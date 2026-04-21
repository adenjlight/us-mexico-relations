import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { regions, getRegionById } from '../data/regions';
import './Map.css';

interface Tooltip {
  x: number;
  y: number;
  name: string;
}

export default function Map({ interactive = false }: { interactive?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredIdRef = useRef<string | null>(null);
  const cursorRegionRef = useRef<{ id: string; x: number; y: number } | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const readyRef = useRef(false);
  const animationDoneRef = useRef(false);
  const interactiveRef = useRef(interactive);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    fetch('/Regions_of_Mexico.svg')
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        if (!svg || !container) return;

        // Add viewBox from original dimensions so the SVG scales correctly
        if (!svg.getAttribute('viewBox')) {
          const w = svg.getAttribute('width');
          const h = svg.getAttribute('height');
          if (w && h) {
            svg.setAttribute('viewBox', `0 0 ${parseFloat(w)} ${parseFloat(h)}`);
          }
        }
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.style.display = 'block';

        // Remove stroke from all paths in the SVG to eliminate the black
        // coastline and border outlines
        svg.querySelectorAll('path').forEach((path) => {
          path.style.stroke = 'none';
        });

        // Deep murky ocean color
        const ocean = svg.getElementById('rect4961') as SVGRectElement | null;
        if (ocean) ocean.style.fill = '#1a3a52';

        // Surrounding non-Mexico lands (US, Guatemala, Belize)
        const surroundingLand = svg.getElementById('path02') as SVGPathElement | null;
        if (surroundingLand) surroundingLand.style.fill = '#b0a888';

        // Coastal features: color + move to front of their parent so region
        // paths always render on top (SVG paints in DOM order)
        ['path36', 'path2811'].forEach((id) => {
          const el = svg.getElementById(id) as SVGPathElement | null;
          if (el) {
            el.style.fill = '#b0a888';
            el.parentNode?.prepend(el);
          }
        });

        // Tag each region path and apply initial colors from regions.ts
        regions.forEach((region, i) => {
          const path = svg.getElementById(region.id) as SVGPathElement | null;
          if (path) {
            path.style.fill = region.color;
            path.classList.add('region-path');
            path.setAttribute('data-region-id', region.id);
            path.style.cursor = 'pointer';
            path.style.opacity = '0';
            path.style.animation = `regionDrop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
            path.style.animationDelay = `${i * 0.22}s`;
            path.style.animationPlayState = 'paused';
          }
        });

        container.innerHTML = '';
        container.appendChild(svg);

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              regions.forEach((region) => {
                const path = container.querySelector(`#${region.id}`) as SVGPathElement | null;
                if (!path) return;
                path.style.animationPlayState = 'running';
                path.addEventListener('animationend', () => {
                  path.style.animation = '';
                  path.style.opacity = '1';
                  path.style.transform = 'translateY(0)';
                }, { once: true });
              });
              // 8 regions × 0.22s stagger + 1.2s duration ≈ 3s total
              setTimeout(() => {
                animationDoneRef.current = true;
                if (interactiveRef.current) readyRef.current = true;
              }, 3200);
              observer.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(container);
      });
  }, []);

  useEffect(() => {
    interactiveRef.current = interactive;
    readyRef.current = interactive && animationDoneRef.current;
    if (!interactive) {
      cancelLeaveTimer();
      if (hoveredIdRef.current) {
        resetAllRegions();
        hoveredIdRef.current = null;
      }
      setTooltip(null);
    } else if (readyRef.current && cursorRegionRef.current) {
      const { id, x, y } = cursorRegionRef.current;
      hoveredIdRef.current = id;
      applyHover(id);
      setTooltip({ x, y, name: getRegionById(id)?.name ?? '' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interactive]);

  const resetAllRegions = () => {
    regions.forEach((reg) => {
      const el = containerRef.current?.querySelector(`#${reg.id}`) as SVGPathElement | null;
      if (!el) return;
      el.style.fill = reg.color;
      el.style.filter = '';
      el.style.transform = '';
    });
  };

  const applyHover = (regionId: string) => {
    const r = regions.find((reg) => reg.id === regionId);
    const el = containerRef.current?.querySelector(`#${regionId}`) as SVGPathElement | null;
    if (el && r) {
      el.style.animation = '';
      el.parentNode?.appendChild(el);
      el.style.fill = r.hoverColor;
      el.style.filter = 'drop-shadow(0 6px 14px rgba(0,0,0,0.35)) brightness(1.12)';
      el.style.transform = 'scale(1.015)';
      el.style.opacity = '1';
    }
  };

  const cancelLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as Element).closest('[data-region-id]') as SVGPathElement | null;
    if (target) {
      const regionId = target.getAttribute('data-region-id')!;
      const region = getRegionById(regionId);
      if (region) {
        cursorRegionRef.current = { id: regionId, x: e.clientX, y: e.clientY };
        if (!interactiveRef.current) return;
        cancelLeaveTimer();
        setTooltip({ x: e.clientX, y: e.clientY, name: region.name });
        if (hoveredIdRef.current !== regionId) {
          if (hoveredIdRef.current) resetAllRegions();
          hoveredIdRef.current = regionId;
          applyHover(regionId);
        }
      }
    } else {
      cursorRegionRef.current = null;
      if (hoveredIdRef.current && !leaveTimerRef.current) {
        leaveTimerRef.current = setTimeout(() => {
          if (hoveredIdRef.current) resetAllRegions();
          hoveredIdRef.current = null;
          setTooltip(null);
          leaveTimerRef.current = null;
        }, 120);
      }
    }
  };

  const handleMouseLeave = () => {
    cursorRegionRef.current = null;
    cancelLeaveTimer();
    if (hoveredIdRef.current) {
      resetAllRegions();
      hoveredIdRef.current = null;
    }
    setTooltip(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const target = (e.target as Element).closest('[data-region-id]') as SVGPathElement | null;
    if (target) {
      const regionId = target.getAttribute('data-region-id')!;
      const region = getRegionById(regionId);
      if (region) {
        navigate(`/region/${region.slug}`);
      }
    }
  };

  return (
    <div className="map-wrapper">
      <div
        ref={containerRef}
        className="map-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      {tooltip && (
        <div
          className="map-tooltip"
          style={{ left: tooltip.x + 14, top: tooltip.y - 36 }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { regions, getRegionById } from '../data/regions';
import './Map.css';

interface Tooltip {
  x: number;
  y: number;
  name: string;
}

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoveredIdRef = useRef<string | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const readyRef = useRef(false);
  const animDoneCountRef = useRef(0);
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
            path.style.animation = `regionDrop 0.7s ease forwards`;
            path.style.animationDelay = `${i * 0.12}s`;
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
                  animDoneCountRef.current += 1;
                  if (animDoneCountRef.current >= regions.length) readyRef.current = true;
                }, { once: true });
              });
              observer.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(container);
      });
  }, []);

  const resetRegion = (regionId: string) => {
    const r = regions.find((reg) => reg.id === regionId);
    const el = containerRef.current?.querySelector(`#${regionId}`) as SVGPathElement | null;
    if (el && r) {
      el.style.fill = r.color;
      el.style.filter = '';
      el.style.transform = 'translateY(0)';
    }
  };

  const applyHover = (regionId: string) => {
    const r = regions.find((reg) => reg.id === regionId);
    const el = containerRef.current?.querySelector(`#${regionId}`) as SVGPathElement | null;
    if (el && r) {
      // Move to end of parent so it renders on top of all border strokes
      el.parentNode?.appendChild(el);
      el.style.fill = r.hoverColor;
      el.style.filter = 'drop-shadow(0 6px 14px rgba(0,0,0,0.28))';
      el.style.transformOrigin = '50% 50%';
      el.style.transform = 'scale(1.03)';
    }
  };

  const cancelLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!readyRef.current) return;
    const target = (e.target as Element).closest('[data-region-id]') as SVGPathElement | null;
    if (target) {
      cancelLeaveTimer();
      const regionId = target.getAttribute('data-region-id')!;
      const region = getRegionById(regionId);
      if (region) {
        setTooltip({ x: e.clientX, y: e.clientY, name: region.name });
        if (hoveredIdRef.current !== regionId) {
          if (hoveredIdRef.current) resetRegion(hoveredIdRef.current);
          hoveredIdRef.current = regionId;
          applyHover(regionId);
        }
      }
    } else {
      if (hoveredIdRef.current && !leaveTimerRef.current) {
        leaveTimerRef.current = setTimeout(() => {
          if (hoveredIdRef.current) resetRegion(hoveredIdRef.current);
          hoveredIdRef.current = null;
          setTooltip(null);
          leaveTimerRef.current = null;
        }, 60);
      }
    }
  };

  const handleMouseLeave = () => {
    cancelLeaveTimer();
    if (hoveredIdRef.current) {
      resetRegion(hoveredIdRef.current);
      hoveredIdRef.current = null;
    }
    setTooltip(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!readyRef.current) return;
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

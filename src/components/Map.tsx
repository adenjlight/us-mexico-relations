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
        svg.removeAttribute('height');
        svg.style.display = 'block';

        // Remove stroke from all paths in the SVG to eliminate the black
        // coastline and border outlines
        svg.querySelectorAll('path').forEach((path) => {
          path.style.stroke = 'none';
        });

        // Tag each region path with a class and data attribute
        regions.forEach((region) => {
          const path = svg.getElementById(region.id) as SVGPathElement | null;
          if (path) {
            path.classList.add('region-path');
            path.setAttribute('data-region-id', region.id);
            path.style.cursor = 'pointer';
            path.style.transition = 'filter 0.2s ease, transform 0.2s ease, fill 0.15s ease';
          }
        });

        container.innerHTML = '';
        container.appendChild(svg);
      });
  }, []);

  const resetRegion = (regionId: string) => {
    const r = regions.find((reg) => reg.id === regionId);
    const el = containerRef.current?.querySelector(`#${regionId}`) as SVGPathElement | null;
    if (el && r) {
      el.style.fill = r.color;
      el.style.filter = '';
      el.style.transform = '';
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
      el.style.transform = 'scale(1.03)';
      el.style.transformOrigin = '50% 50%';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as Element).closest('[data-region-id]') as SVGPathElement | null;
    if (target) {
      const regionId = target.getAttribute('data-region-id')!;
      const region = getRegionById(regionId);
      if (region) {
        setTooltip({ x: e.clientX, y: e.clientY, name: region.name });
        if (hoveredIdRef.current !== regionId) {
          if (hoveredIdRef.current) resetRegion(hoveredIdRef.current);
          hoveredIdRef.current = regionId;
          applyHover(regionId);
        } else {
          setTooltip({ x: e.clientX, y: e.clientY, name: region.name });
        }
      }
    } else {
      if (hoveredIdRef.current) {
        resetRegion(hoveredIdRef.current);
        hoveredIdRef.current = null;
      }
      setTooltip(null);
    }
  };

  const handleMouseLeave = () => {
    if (hoveredIdRef.current) {
      resetRegion(hoveredIdRef.current);
      hoveredIdRef.current = null;
    }
    setTooltip(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
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

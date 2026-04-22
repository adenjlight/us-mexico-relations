import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import Masthead from '../components/Masthead';
import './Home.css';

const INTRO = `This project is guided by the premise that discussions of US-Mexico relations too often reduce Mexico to a single, uniform narrative. Such an approach overlooks the country's regional diversity and obscures how key issues vary across space. In response, our website is structured to highlight geographic variation around the issues of migration, security, and economic conditions.

Each section focuses on a distinct region and includes context on why that area is important in the broader relationship between the US and Mexico. By moving from region to region, we build a cohesive story that connects local experiences to broader national patterns.

It is important to note that the regional map itself reflects this editorial vision. While there is no single definitive way to divide Mexico geographically, the chosen grouping prioritizes narrative clarity over strict classification. Rather than offering a traditional geography lesson, the project uses regional distinctions as a tool to explore how place shapes lived experience and, ultimately, the US-Mexico relationship.`;

export default function Home() {
  const location = useLocation();
  const scrollToMap = !!(location.state as { scrollToMap?: boolean } | null)?.scrollToMap;
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const bodyInnerRef = useRef<HTMLDivElement>(null);
  const bodySectionRef = useRef<HTMLDivElement>(null);
  const [mapInteractive, setMapInteractive] = useState(scrollToMap);

  useEffect(() => {
    if (scrollToMap) {
      document.getElementById('map')?.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Hero: fade out over 1.5× viewport height of scroll
      if (heroInnerRef.current) {
        const op = Math.max(0, 1 - scrollY / (vh * 1.5));
        heroInnerRef.current.style.opacity = String(op);
      }

      // Body: fade in as it enters, fade out as it exits
      if (bodyInnerRef.current) {
        const rect = bodyInnerRef.current.getBoundingClientRect();
        const fadeIn = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.9)));
        const fadeOut = Math.min(1, Math.max(0, rect.bottom / (vh * 0.9)));
        bodyInnerRef.current.style.opacity = String(Math.min(fadeIn, fadeOut));
      }

      // Enable map interactivity once body section is mostly scrolled past
      if (bodySectionRef.current) {
        const rect = bodySectionRef.current.getBoundingClientRect();
        setMapInteractive(rect.bottom <= vh);
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="home">
      {/* Fixed map — always in background, interactive only after body exits viewport */}
      <div className="map-bg">
        <Map interactive={mapInteractive} />
      </div>

      <section className="hero-section">
        <div className="hero-inner" ref={heroInnerRef}>
          <h1 className="hero-title">Mapping <em>Mexico</em></h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            The patterns of migration, security, and trade throughout the nation
          </p>
        </div>
        <div className="scroll-cue">
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      <section className="body-section" ref={bodySectionRef}>
        <div className="body-inner" ref={bodyInnerRef}>
          {INTRO.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Transparent spacer — map shows through and is interactive here */}
      <section className="map-section" id="map" />

      <Masthead />
    </div>
  );
}

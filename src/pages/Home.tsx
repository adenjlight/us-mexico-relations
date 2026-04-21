import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import Masthead from '../components/Masthead';
import './Home.css';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum ultricies, lacus nunc ultrices odio, vel convallis purus mauris vel neque. Sed feugiat. Nam ac quam. Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc feugiat mi a tellus consequat imperdiet.

Fusce fermentum. Nullam varius nulla nec sapien. Proin euismod, urna vel ultricies fringilla, est libero fermentum felis, sit amet malesuada purus lorem ut nunc. In nec felis. Donec ultrices urna. Nullam vulputate diam nec turpis. Sed consequat augue eget diam. Sed tincidunt. Praesent eget nulla non magna interdum elementum. Quisque rutrum erat eu enim. Aenean hendrerit, diam sodales viverra ultrices, leo lorem luctus arcu, a dignissim magna elit quis ante.

Phasellus at dui in ligula mollis ultricies. Integer placerat tristique nisl. Praesent augue. Fusce commodo. Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus. Nullam aliquet porttitor arcu. Donec posuere augue in quam. Etiam vel tortor sodales tellus ultricies commodo. Suspendisse potenti. Aenean in sem ac leo mollis blandit. Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.`;

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
          {LOREM.split('\n\n').map((para, i) => (
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

import { useEffect, useRef } from 'react';
import Map from '../components/Map';
import './Home.css';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum ultricies, lacus nunc ultrices odio, vel convallis purus mauris vel neque. Sed feugiat. Nam ac quam. Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc feugiat mi a tellus consequat imperdiet.

Fusce fermentum. Nullam varius nulla nec sapien. Proin euismod, urna vel ultricies fringilla, est libero fermentum felis, sit amet malesuada purus lorem ut nunc. In nec felis. Donec ultrices urna. Nullam vulputate diam nec turpis. Sed consequat augue eget diam. Sed tincidunt. Praesent eget nulla non magna interdum elementum. Quisque rutrum erat eu enim. Aenean hendrerit, diam sodales viverra ultrices, leo lorem luctus arcu, a dignissim magna elit quis ante.

Phasellus at dui in ligula mollis ultricies. Integer placerat tristique nisl. Praesent augue. Fusce commodo. Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus. Nullam aliquet porttitor arcu. Donec posuere augue in quam. Etiam vel tortor sodales tellus ultricies commodo. Suspendisse potenti. Aenean in sem ac leo mollis blandit. Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.`;

export default function Home() {
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const bodyInnerRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLElement>(null);
  const mapRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Hero: fade out slowly over 2× the viewport height of scroll
      if (heroInnerRef.current && scrollY > 0) {
        const op = Math.max(0, 1 - scrollY / (vh * 2.0));
        heroInnerRef.current.style.opacity = String(op);
      }

      // Body: fade in over 90% of vh as it enters, fade out over 90% of vh as it exits
      if (bodyInnerRef.current) {
        const rect = bodyInnerRef.current.getBoundingClientRect();
        const fadeIn = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.9)));
        const fadeOut = Math.min(1, Math.max(0, rect.bottom / (vh * 0.9)));
        bodyInnerRef.current.style.opacity = String(Math.min(fadeIn, fadeOut));
      }

      // Map reveal: only starts after the section is fully in view (rect.top <= 0),
      // then reveals top-to-bottom over the remaining 80vh of scroll space
      if (mapRevealRef.current && mapSectionRef.current) {
        const rect = mapSectionRef.current.getBoundingClientRect();
        const raw = Math.min(1, Math.max(0, -rect.top / (vh * 0.8)));
        const clipBottom = (1 - raw) * 100;
        mapRevealRef.current.style.clipPath = `inset(0 0 ${clipBottom}% 0)`;
        mapRevealRef.current.style.setProperty('--reveal', `${raw * 100}%`);
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-inner" ref={heroInnerRef}>
          <h1 className="about-title">US–Mexico Relations</h1>
          <div className="about-divider" />
          <p className="about-lead">
            Exploring the history, culture, and diplomacy between two neighboring nations.
          </p>
        </div>
      </section>

      <section className="body-section">
        <div className="body-inner" ref={bodyInnerRef}>
          {LOREM.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      <section className="map-section" id="map" ref={mapSectionRef}>
        <div className="map-section-sticky">
        <div className="map-section-inner">
          <div className="map-reveal-wrapper" ref={mapRevealRef}>
            <Map />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

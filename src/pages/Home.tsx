import Map from '../components/Map';
import './Home.css';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum ultricies, lacus nunc ultrices odio, vel convallis purus mauris vel neque. Sed feugiat. Nam ac quam. Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc feugiat mi a tellus consequat imperdiet.

Fusce fermentum. Nullam varius nulla nec sapien. Proin euismod, urna vel ultricies fringilla, est libero fermentum felis, sit amet malesuada purus lorem ut nunc. In nec felis. Donec ultrices urna. Nullam vulputate diam nec turpis. Sed consequat augue eget diam. Sed tincidunt. Praesent eget nulla non magna interdum elementum. Quisque rutrum erat eu enim. Aenean hendrerit, diam sodales viverra ultrices, leo lorem luctus arcu, a dignissim magna elit quis ante.

Phasellus at dui in ligula mollis ultricies. Integer placerat tristique nisl. Praesent augue. Fusce commodo. Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus. Nullam aliquet porttitor arcu. Donec posuere augue in quam. Etiam vel tortor sodales tellus ultricies commodo. Suspendisse potenti. Aenean in sem ac leo mollis blandit. Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.`;

export default function Home() {
  return (
    <div className="home">
      <section className="about-section">
        <div className="about-inner">
          <h1 className="about-title">US–Mexico Relations</h1>
          <div className="about-divider" />
          <p className="about-lead">
            Exploring the history, culture, and diplomacy between two neighboring nations.
          </p>
          <div className="about-body">
            {LOREM.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-section-inner">
          <h2 className="map-section-title">Explore by Region</h2>
          <p className="map-section-subtitle">
            Click a region to learn more about its history and US–Mexico relations.
          </p>
          <Map />
        </div>
      </section>
    </div>
  );
}

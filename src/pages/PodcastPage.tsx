import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRegionBySlug } from '../data/regions';
import { getPodcastBySlug } from '../data/podcasts';
import Masthead from '../components/Masthead';
import './PodcastPage.css';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function PodcastPage() {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const region = getRegionBySlug(regionSlug ?? '');
  const podcast = getPodcastBySlug(regionSlug ?? '');

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    if (!dragging && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const onEnded = () => setPlaying(false);

  const onScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) audioRef.current.currentTime = val;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!region || !podcast) {
    return (
      <div className="pp-page pp-not-found">
        <p>Podcast not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div
      className="pp-page"
      style={{ '--region-color': region.color } as React.CSSProperties}
    >
      <nav className="pp-nav">
        <Link to="/" className="pp-nav-logo">US<span>–</span>MX</Link>
      </nav>

      <header className="pp-header">
        <Link to={`/region/${regionSlug}`} className="pp-back-link">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 8H3M7 4l-4 4 4 4"/></svg>
          Back to {region.name}
        </Link>

        <h1 className="pp-title">{podcast.title}</h1>
        <p className="pp-description">{podcast.description}</p>
      </header>

      <div className="pp-player-wrap">
        {podcast.audioUrl ? (
          <div className="pp-player">
            <audio
              ref={audioRef}
              src={podcast.audioUrl}
              onTimeUpdate={onTimeUpdate}
              onLoadedMetadata={onLoadedMetadata}
              onEnded={onEnded}
            />

            <button className="pp-play-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16" rx="1"/><rect x="15" y="4" width="4" height="16" rx="1"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>
              )}
            </button>

            <div className="pp-controls">
              <div className="pp-progress-wrap">
                <input
                  className="pp-scrubber"
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={currentTime}
                  onMouseDown={() => setDragging(true)}
                  onMouseUp={() => setDragging(false)}
                  onChange={onScrub}
                  style={{ '--progress': `${progress}%` } as React.CSSProperties}
                />
              </div>
              <div className="pp-time">
                <span>{formatTime(currentTime)}</span>
                <span>{duration ? formatTime(duration) : '--:--'}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="pp-coming-soon">
            <div className="pp-mic-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3M9 22h6"/></svg>
            </div>
            <p className="pp-coming-label">Episode coming soon</p>
          </div>
        )}
      </div>

      <Masthead />
    </div>
  );
}

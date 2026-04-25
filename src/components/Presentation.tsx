import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type PresentationProps = {
  slides: React.ReactElement[];
};

export function Presentation({ slides }: PresentationProps) {
  const [index, setIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  const total = slides.length;

  const next = useCallback(() => setIndex((prev) => Math.min(prev + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((prev) => Math.max(prev - 1, 0)), []);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }, []);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = window.setTimeout(() => setControlsVisible(false), 3000);
  }, []);

  useEffect(() => {
    showControls();
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        next();
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        prev();
      }
      if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        toggleFullscreen().catch(() => undefined);
      }
      if (event.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen().catch(() => undefined);
      }
    };

    window.addEventListener('mousemove', showControls);
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      window.removeEventListener('mousemove', showControls);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [next, prev, showControls, toggleFullscreen]);

  const dots = useMemo(
    () =>
      slides.map((_, i) => (
        <button
          key={i}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={`h-[6px] rounded-full transition-all duration-300 ${
            i === index ? 'w-[24px] bg-white/90' : 'w-[6px] bg-white/30'
          }`}
        />
      )),
    [index, slides],
  );

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {slides.map((slide, i) => {
        const scale = i < index ? 0.95 : i > index ? 1.05 : 1;
        const opacity = i === index ? 1 : 0;
        return (
          <section
            key={i}
            className="absolute inset-0 transition-all duration-500 ease-in-out"
            style={{ opacity, transform: `scale(${scale})`, pointerEvents: i === index ? 'auto' : 'none' }}
          >
            {slide}
          </section>
        );
      })}

      <div
        className={`pointer-events-none absolute right-[5.2%] top-[2.4%] z-30 text-[11px] text-white/40 transition-opacity duration-300 ${
          controlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {'← → Navigate · F Fullscreen'}
      </div>

      <div
        className={`absolute bottom-[3.2%] left-[5.2%] right-[5.2%] z-30 flex items-center justify-between transition-opacity duration-300 ${
          controlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="tabular text-[13px] text-white/50">{`${index + 1} / ${total}`}</p>

        <div className="flex items-center gap-[10px]">{dots}</div>

        <div className="flex items-center gap-[8px]">
          <button
            onClick={prev}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition hover:bg-white/10 hover:text-white/90"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition hover:bg-white/10 hover:text-white/90"
          >
            <ChevronRight size={16} />
          </button>
          <div className="mx-1 h-5 w-px bg-white/20" />
          <button
            onClick={() => toggleFullscreen().catch(() => undefined)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition hover:bg-white/10 hover:text-white/90"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}

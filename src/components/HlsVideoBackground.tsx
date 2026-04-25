import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

type HlsVideoBackgroundProps = {
  src: string;
};

export function HlsVideoBackground({ src }: HlsVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => undefined);
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      const onLoadedMetadata = () => {
        video.play().catch(() => undefined);
      };
      video.addEventListener('loadedmetadata', onLoadedMetadata);
      return () => {
        video.removeEventListener('loadedmetadata', onLoadedMetadata);
      };
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}


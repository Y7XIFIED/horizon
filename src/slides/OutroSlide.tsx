import { DeckHeader } from '../components/DeckBrand';
import { HlsVideoBackground } from '../components/HlsVideoBackground';

const VIDEO = 'https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8';

export function OutroSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <HlsVideoBackground src={VIDEO} />
      <div className="relative z-10 flex h-full flex-col">
        <DeckHeader center="004" right="Page 005" />

        <main className="flex flex-1 flex-col justify-center px-[5.2%]">
          <h2 className="max-w-[56%] text-left text-[clamp(28px,5vw,64px)] leading-[1.05] tracking-[-0.02em]">
            Showcase 5 <span className="opacity-90">/ Closing Frame</span>
          </h2>
          <p className="mt-[3%] max-w-[38%] text-[clamp(13px,1.05vw,20px)] leading-[1.5] text-white/90">
            Final view in the sequence. This project is intentionally topic-free and focused on visual art only.
          </p>

          <div className="mt-[3%] flex flex-col gap-[clamp(12px,1.2vw,19px)] text-[clamp(13px,1.05vw,20px)] text-white/85">
            <p>Showcase 1: Opening Visual</p>
            <p>Showcase 2: Shape Composition</p>
            <p>Showcase 3: Grid Collection</p>
            <p>Showcase 4: Statement Frame</p>
            <p>Showcase 5: Final Composition</p>
          </div>
        </main>
      </div>
    </div>
  );
}

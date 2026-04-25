import { DeckHeader } from '../components/DeckBrand';
import { HlsVideoBackground } from '../components/HlsVideoBackground';

const VIDEO = 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8';

export function IntroSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <HlsVideoBackground src={VIDEO} />
      <div className="relative z-10 flex h-full flex-col">
        <DeckHeader center="001" right="Page 002" />

        <main className="px-[5.2%] pt-[5.2%]">
          <h2 className="max-w-[60%] text-[clamp(28px,5vw,64px)] leading-[1.05] tracking-[-0.02em]">
            Showcase 2 <span className="opacity-90">/ Shapes and Motion</span>
          </h2>

          <div className="mt-[3.5%] flex gap-[4%]">
            <div className="basis-[22%]">
              <p className="text-[clamp(13px,1.05vw,20px)] leading-[1.45] text-white/90">
                Abstract forms layered with rhythm and contrast.
              </p>
              <div className="mt-[8%] flex items-end gap-[8px]">
                <p className="text-[clamp(28px,4.8vw,64px)] leading-none">02</p>
                <p className="pb-[0.7%] text-[clamp(13px,1.05vw,20px)] text-white/80">showcase section</p>
              </div>
            </div>

            <div className="basis-[38%]">
              <p className="text-[clamp(13px,1.05vw,20px)] leading-[1.5] text-white/90">
                This slide highlights texture, framing, and composition. The content is intentionally open-ended,
                designed to present art without locking it to a specific story or subject.
              </p>
            </div>

            <div className="flex basis-[20%] flex-col justify-between">
              <div>
                <p className="text-[clamp(28px,4.8vw,64px)] leading-none">03</p>
                <p className="mt-[4%] text-[clamp(13px,1.05vw,20px)] leading-[1.45] text-white/85">
                  transitioning to the next visual set.
                </p>
              </div>

              <svg viewBox="0 0 300 140" className="mt-[12%] w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="riseFill" x1="150" y1="18" x2="150" y2="126" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D2FF55" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#D2FF55" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M14 112C64 102 100 94 136 84C174 73 206 55 286 26V126H14V112Z" fill="url(#riseFill)" />
                <path d="M14 112C64 102 100 94 136 84C174 73 206 55 286 26" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <circle cx="14" cy="112" r="8" fill="#B750B2" stroke="white" strokeWidth="2" />
                <circle cx="286" cy="26" r="8" fill="#B750B2" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </main>

        <footer className="mt-auto px-[5.2%] pb-[3.4%] text-right text-[clamp(12px,1.05vw,20px)] text-white/60">Art Showcase</footer>
      </div>
    </div>
  );
}

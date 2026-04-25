import { DeckLogo } from '../components/DeckBrand';
import { HlsVideoBackground } from '../components/HlsVideoBackground';

const VIDEO = 'https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8';

export function CoverSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <HlsVideoBackground src={VIDEO} />
      <div className="relative z-10 flex h-full flex-col">
        <header className="flex items-center justify-between px-[5.2%] pt-[4%]">
          <DeckLogo />
          <p className="text-[clamp(12px,1.05vw,20px)] text-white/80">Page 001</p>
        </header>

        <main className="flex flex-1 items-center justify-center px-[5.2%]">
          <div className="-mt-[3%] text-center">
            <h1 className="text-[clamp(32px,6.6vw,96px)] leading-[1.05] tracking-[-0.02em]">Showcase 1</h1>
            <p className="mt-[1.5%] text-[clamp(20px,3.2vw,48px)] text-white/90">Art Collection</p>
            <p className="mt-[2%] text-[clamp(14px,1.35vw,24px)] text-white/75">A visual sequence with no fixed theme</p>
          </div>
        </main>

        <footer className="pb-[3.5%] text-center text-[clamp(12px,1.05vw,20px)] text-white/60">2026</footer>
      </div>
    </div>
  );
}

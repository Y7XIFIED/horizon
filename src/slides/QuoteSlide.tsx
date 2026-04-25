import { DeckHeader } from '../components/DeckBrand';
import { HlsVideoBackground } from '../components/HlsVideoBackground';

const VIDEO = 'https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8';

export function QuoteSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <HlsVideoBackground src={VIDEO} />
      <div className="relative z-10 flex h-full flex-col">
        <DeckHeader center="003" right="Page 004" />
        <main className="flex flex-1 items-center justify-center px-[5.2%]">
          <div className="flex max-w-[70%] flex-col items-center gap-[12px] text-center">
            <p className="text-[clamp(14px,1.2vw,20px)] text-white/90">Showcase 4</p>
            <h2 className="text-[clamp(28px,5.3vw,64px)] leading-[1.15] tracking-[-0.02em]">"Art without a fixed topic, open to your own reading."</h2>
          </div>
        </main>
      </div>
    </div>
  );
}

import { Brain, Briefcase, Monitor } from 'lucide-react';
import { DeckHeader } from '../components/DeckBrand';
import { HlsVideoBackground } from '../components/HlsVideoBackground';

const VIDEO = 'https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8';

const cards = [
  {
    icon: Monitor,
    title: 'Showcase 3',
    description: 'Light and shadow studies across layered surfaces.',
  },
  {
    icon: Brain,
    title: 'Color Blocks',
    description: 'Bold palettes with calm negative space.',
  },
  {
    icon: Briefcase,
    title: 'Form Language',
    description: 'Curves and edges arranged for visual tension.',
  },
];

function GlassCard({ icon: Icon, title, description }: (typeof cards)[number]) {
  return (
    <article className="liquid-glass flex min-h-[24vh] flex-col justify-end rounded-[26px] p-[clamp(20px,3vw,48px)]">
      <Icon className="mb-[8%] h-[clamp(32px,2.8vw,48px)] w-[clamp(32px,2.8vw,48px)]" strokeWidth={1.6} />
      <h3 className="text-[clamp(18px,2.2vw,36px)] leading-[1.12]">{title}</h3>
      <p className="mt-[4%] text-[clamp(12px,1.05vw,20px)] leading-[1.45] text-white/80">{description}</p>
    </article>
  );
}

export function AnalyticsSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <HlsVideoBackground src={VIDEO} />
      <div className="relative z-10 flex h-full flex-col">
        <DeckHeader center="002" right="Page 003" />

        <main className="px-[5.2%] pt-[3.4%]">
          <div className="text-center">
            <p className="text-[clamp(14px,1.25vw,24px)] text-white/90">A neutral gallery page with flexible interpretation</p>
            <h2 className="mt-[1%] text-[clamp(28px,5vw,64px)] leading-[1.05] tracking-[-0.02em]">Showcase 3</h2>
          </div>

          <div className="mt-[3.6%]">
            <div className="grid grid-cols-3 gap-[clamp(10px,1.7vw,27px)]">
              {cards.map((card) => (
                <GlassCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

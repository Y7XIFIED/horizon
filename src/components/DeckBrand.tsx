export function DeckLogo() {
  return (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="26" fill="white" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.03em' }}>
        HORIZON
      </text>
    </svg>
  );
}

export function DeckHeader({ center = '', right }: { center?: string; right?: string }) {
  return (
    <header className="relative z-10 flex items-center justify-between px-[5.2%] pt-[4%] text-white/80">
      <DeckLogo />
      <p className="text-[clamp(12px,1.05vw,20px)]">{center}</p>
      <p className="w-[129px] text-right text-[clamp(12px,1.05vw,20px)]">{right ?? ''}</p>
    </header>
  );
}


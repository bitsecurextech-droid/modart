import logo from "@/assets/mod-arts-logo.asset.json";

export function Logo({ className = "h-10", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo.url}
        alt="MOD-Arts School of Music"
        className={`${className} w-auto object-contain`}
        width={48}
        height={48}
      />
      {showText && (
        <div className="leading-none">
          <div className="font-display text-xl font-extrabold tracking-tight text-navy">
            <span className="text-gold">MOD</span>-ARTS
          </div>
          <div className="mt-0.5 text-[10px] font-semibold tracking-[0.22em] text-navy/70">
            SCHOOL OF MUSIC
          </div>
        </div>
      )}
    </div>
  );
}

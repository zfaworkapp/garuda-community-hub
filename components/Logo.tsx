import Image from "next/image";

const LOGO_URL =
  "https://jqkrxekvjidbbvuuidyj.supabase.co/storage/v1/object/public/asset/logo%20garuda%20hub%20community%20circle.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={LOGO_URL}
        alt="Garuda Community Hub"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
        priority
      />
      <div className="leading-none">
        <div
          className={`font-display text-[15px] font-extrabold uppercase tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Garuda
          <br />
          Community Hub
        </div>
        <div
          className={`mt-1 text-[8px] font-semibold uppercase tracking-[0.15em] ${
            light ? "text-white/60" : "text-muted"
          }`}
        >
          Indonesia&apos;s Football
          <br />
          Community Ecosystem
        </div>
      </div>
    </div>
  );
}

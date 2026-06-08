/**
 * Motif.tsx — Ornamen geometris halus terinspirasi batik kawung & parang.
 *
 * Dua varian:
 * - MotifDivider  : pita pembatas horizontal antar-section (repeat pattern)
 * - MotifCorner   : ornamen sudut dekoratif
 *
 * Prinsip: monoline, opacity ≤ 0.08, satu warna, tidak ramai.
 */

function KawungTile({ x, y, r = 18 }: { x: number; y: number; r?: number }) {
  return (
    <g opacity={0.06}>
      {/* Empat lingkaran bersinggungan — motif kawung */}
      <circle
        cx={x - r}
        cy={y - r}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle
        cx={x + r}
        cy={y - r}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle
        cx={x - r}
        cy={y + r}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle
        cx={x + r}
        cy={y + r}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      {/* Titik tengah */}
      <circle cx={x} cy={y} r={2.2} fill="currentColor" opacity={0.4} />
    </g>
  );
}

/** Pita horizontal tipis pembatas antar-section — motif kawung berulang, fade di ujung */
export function MotifDivider() {
  const tiles = 32;
  const spacing = 48;

  return (
    <div
      className="w-full py-3 overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <svg
        viewBox={`0 0 ${tiles * spacing} 48`}
        className="block w-full h-6 text-ink"
        preserveAspectRatio="none"
      >
        {Array.from({ length: tiles }, (_, i) => (
          <KawungTile key={i} x={i * spacing + spacing / 2} y={24} r={18} />
        ))}
        {/* Garis tipis tengah sebagai anchor visual */}
        <line
          x1="0"
          y1="24"
          x2={tiles * spacing}
          y2="24"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.05"
        />
      </svg>
    </div>
  );
}

/** Ornamen dekoratif sudut — parang & kawung mini */
export function MotifCorner() {
  return (
    <div className="w-20 h-20" aria-hidden="true">
      <svg viewBox="0 0 80 80" className="w-full h-full text-ink">
        {/* Garis parang diagonal */}
        <g opacity={0.07} fill="none" stroke="currentColor" strokeWidth="0.8">
          {/* Vertikal bergelombang */}
          <path d="M12 0 Q20 10 12 26 T12 52 T12 78" />
          <path d="M24 0 Q32 10 24 26 T24 52 T24 78" />
          <path d="M36 0 Q44 10 36 26 T36 52 T36 78" />
          {/* Horizontal bergelombang */}
          <path d="M0 12 Q10 20 26 12 T52 12 T78 12" />
          <path d="M0 24 Q10 32 26 24 T52 24 T78 24" />
          <path d="M0 36 Q10 44 26 36 T52 36 T78 36" />
        </g>
        {/* Kawung mini di sudut */}
        <g opacity={0.05}>
          <circle
            cx="8"
            cy="8"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <circle
            cx="28"
            cy="8"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <circle
            cx="8"
            cy="28"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <circle cx="8" cy="8" r="1.8" fill="currentColor" opacity={0.4} />
        </g>
        {/* Titik-titik halus sepanjang diagonal */}
        <g fill="currentColor" opacity={0.06}>
          {[20, 32, 44, 56, 68].map((d) => (
            <circle key={`dot-${d}`} cx={d} cy={d} r="1.2" />
          ))}
        </g>
      </svg>
    </div>
  );
}

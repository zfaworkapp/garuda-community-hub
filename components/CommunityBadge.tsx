function initials(name: string) {
  const words = name.replace("GARUDA", "").trim().split(" ");
  return (words[0]?.[0] ?? "G") + (words[1]?.[0] ?? "");
}

export function CommunityBadge({ name }: { name: string }) {
  const code = initials(name).toUpperCase();
  return (
    <svg viewBox="0 0 100 110" className="h-16 w-16" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${code}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2d34" />
          <stop offset="1" stopColor="#16181d" />
        </linearGradient>
      </defs>
      {/* shield */}
      <path
        d="M50 4 92 16 V52 C92 80 72 98 50 106 C28 98 8 80 8 52 V16 Z"
        fill={`url(#g-${code})`}
        stroke="#C8102E"
        strokeWidth="3"
      />
      {/* garis aksen */}
      <path
        d="M50 12 84 22 V52 C84 75 67 90 50 97 C33 90 16 75 16 52 V22 Z"
        fill="none"
        stroke="#C8102E"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* sayap mini */}
      <path
        d="M30 40 C38 36 44 36 50 40 C56 36 62 36 70 40 C64 44 57 45 50 43 C43 45 36 44 30 40Z"
        fill="#C8102E"
      />
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontFamily="Archivo, sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="#ffffff"
      >
        {code}
      </text>
    </svg>
  );
}

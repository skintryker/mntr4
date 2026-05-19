interface ProductMockupProps {
  category: string
  color: string
  className?: string
}

function getLuminance(hex: string): number {
  const h = hex.replace('#', '').padEnd(6, '0')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function getMockupBg(color: string): string {
  const lum = getLuminance(color)
  if (lum < 0.15) return '#ece9e3'   // dark garment → warm off-white bg
  if (lum > 0.55) return '#d4d0c8'   // very light garment → stone gray bg
  return '#e2ddd6'                    // mid-tone → warm beige bg
}

function darken(hex: string, f: number): string {
  const h = hex.replace('#', '').padEnd(6, '0')
  const r = Math.round(parseInt(h.slice(0, 2), 16) * f)
  const g = Math.round(parseInt(h.slice(2, 4), 16) * f)
  const b = Math.round(parseInt(h.slice(4, 6), 16) * f)
  return `rgb(${r},${g},${b})`
}

function lighten(hex: string, f: number): string {
  const h = hex.replace('#', '').padEnd(6, '0')
  const r = Math.min(255, Math.round(parseInt(h.slice(0, 2), 16) * f))
  const g = Math.min(255, Math.round(parseInt(h.slice(2, 4), 16) * f))
  const b = Math.min(255, Math.round(parseInt(h.slice(4, 6), 16) * f))
  return `rgb(${r},${g},${b})`
}

const TYPE_MAP: Record<string, string> = {
  'T-Shirts':    'tshirt',
  'Hoodies':     'hoodie',
  'Sweatshirts': 'sweatshirt',
  'Hats':        'cap',
  'Tote Bags':   'tote',
  'Sweatpants':  'sweatpants',
  'Sets':        'set',
}

export default function ProductMockup({ category, color, className = '' }: ProductMockupProps) {
  const type       = TYPE_MAP[category] ?? 'tshirt'
  const shadow     = darken(color, 0.78)
  const highlight  = getLuminance(color) < 0.12 ? lighten(color, 1.7) : darken(color, 0.92)
  const logoColor  = getLuminance(color) > 0.28 ? '#1a1a1a' : '#f0ede8'
  const drop       = 'drop-shadow(0 10px 28px rgba(0,0,0,0.11))'
  const svgCls     = `w-full h-full ${className}`
  const font       = 'Space Grotesk, Inter, sans-serif'

  if (type === 'tshirt') return (
    <svg viewBox="0 0 200 242" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Body */}
      <path d="M 76,46 C 63,40 50,52 44,64 L 7,97 L 26,105 L 26,228 L 174,228 L 174,105 L 193,97 L 156,64 C 150,52 137,40 124,46 C 110,62 90,62 76,46 Z" fill={color} />
      {/* Shoulder seam */}
      <path d="M 26,105 L 26,116 L 174,116 L 174,105 Z" fill={shadow} opacity="0.32" />
      {/* Left sleeve shadow */}
      <path d="M 7,97 L 26,105 L 26,101 L 12,95 Z" fill={shadow} opacity="0.22" />
      {/* Right sleeve shadow */}
      <path d="M 193,97 L 174,105 L 174,101 L 188,95 Z" fill={shadow} opacity="0.22" />
      {/* Side body shadow (left) */}
      <path d="M 26,116 L 26,228 L 38,228 L 38,116 Z" fill={shadow} opacity="0.1" />
      {/* Logo */}
      <text x="100" y="162" textAnchor="middle" fontFamily={font} fontSize="11" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
    </svg>
  )

  if (type === 'hoodie') return (
    <svg viewBox="0 0 200 272" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Hood outer */}
      <path d="M 76,74 Q 72,28 100,20 Q 128,28 124,74 L 118,102 Q 100,92 82,102 Z" fill={color} />
      {/* Hood inner opening */}
      <path d="M 82,78 Q 80,44 100,36 Q 120,44 118,78 L 113,100 Q 100,91 87,100 Z" fill={shadow} opacity="0.52" />
      {/* Hood inner highlight */}
      <path d="M 90,80 Q 90,50 100,42 Q 110,50 110,80 L 108,98 Q 100,93 92,98 Z" fill={highlight} opacity="0.08" />
      {/* Body */}
      <path d="M 76,74 C 63,68 50,80 44,92 L 7,124 L 26,132 L 26,254 L 174,254 L 174,132 L 193,124 L 156,92 C 150,80 137,68 124,74 Z" fill={color} />
      {/* Shoulder seam */}
      <path d="M 26,132 L 26,144 L 174,144 L 174,132 Z" fill={shadow} opacity="0.28" />
      {/* Left sleeve shadow */}
      <path d="M 7,124 L 26,132 L 26,128 L 12,122 Z" fill={shadow} opacity="0.22" />
      {/* Right sleeve shadow */}
      <path d="M 193,124 L 174,132 L 174,128 L 188,122 Z" fill={shadow} opacity="0.22" />
      {/* Body left side shadow */}
      <path d="M 26,144 L 26,254 L 36,254 L 36,144 Z" fill={shadow} opacity="0.08" />
      {/* Kangaroo pocket */}
      <rect x="66" y="204" width="68" height="30" rx="4" fill={shadow} opacity="0.26" />
      {/* Logo */}
      <text x="100" y="180" textAnchor="middle" fontFamily={font} fontSize="11" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
      {/* Drawstrings */}
      <line x1="96" y1="102" x2="92" y2="120" stroke={logoColor} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
      <line x1="104" y1="102" x2="108" y2="120" stroke={logoColor} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
    </svg>
  )

  if (type === 'sweatshirt') return (
    <svg viewBox="0 0 200 242" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Body — boxy crewneck */}
      <path d="M 74,52 C 62,46 49,58 44,70 L 7,102 L 26,110 L 26,228 L 174,228 L 174,110 L 193,102 L 156,70 C 151,58 138,46 126,52 C 114,66 86,66 74,52 Z" fill={color} />
      {/* Shoulder seam */}
      <path d="M 26,110 L 26,122 L 174,122 L 174,110 Z" fill={shadow} opacity="0.3" />
      {/* Left cuff rib */}
      <path d="M 7,100 L 7,110 L 26,110 L 26,102 Z" fill={shadow} opacity="0.38" />
      {/* Right cuff rib */}
      <path d="M 193,100 L 193,110 L 174,110 L 174,102 Z" fill={shadow} opacity="0.38" />
      {/* Hem rib */}
      <path d="M 26,220 L 26,228 L 174,228 L 174,220 Z" fill={shadow} opacity="0.28" />
      {/* Left side shadow */}
      <path d="M 26,122 L 26,220 L 35,220 L 35,122 Z" fill={shadow} opacity="0.08" />
      {/* Logo */}
      <text x="100" y="162" textAnchor="middle" fontFamily={font} fontSize="11" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
    </svg>
  )

  if (type === 'cap') return (
    <svg viewBox="0 0 200 188" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Crown dome */}
      <path d="M 32,122 Q 26,50 100,36 Q 174,50 168,122 Z" fill={color} />
      {/* Crown right-panel highlight */}
      <path d="M 100,39 Q 148,55 168,122 L 134,122 Q 126,68 100,52 Z" fill={highlight} opacity="0.12" />
      {/* Crown left-panel shadow */}
      <path d="M 100,39 Q 52,55 32,122 L 66,122 Q 74,68 100,52 Z" fill={shadow} opacity="0.12" />
      {/* Brim */}
      <path d="M 24,122 Q 100,136 176,122 L 179,136 Q 100,151 21,136 Z" fill={shadow} />
      {/* Brim highlight edge */}
      <path d="M 24,122 Q 100,130 176,122 L 176,125 Q 100,133 24,125 Z" fill={highlight} opacity="0.2" />
      {/* Crown top button */}
      <circle cx="100" cy="38" r="5" fill={shadow} />
      <circle cx="100" cy="38" r="3" fill={highlight} opacity="0.2" />
      {/* Panel seams */}
      <line x1="100" y1="43" x2="100" y2="122" stroke={shadow} strokeWidth="0.9" opacity="0.35" />
      <line x1="100" y1="43" x2="54" y2="110" stroke={shadow} strokeWidth="0.7" opacity="0.25" />
      <line x1="100" y1="43" x2="146" y2="110" stroke={shadow} strokeWidth="0.7" opacity="0.25" />
      {/* Logo on front panel */}
      <text x="100" y="92" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="600" letterSpacing="3" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
    </svg>
  )

  if (type === 'tote') return (
    <svg viewBox="0 0 200 238" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Left handle */}
      <path d="M 62,92 C 58,42 78,26 100,26" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
      <path d="M 62,92 C 58,42 78,26 100,26" fill="none" stroke={shadow} strokeWidth="11" strokeLinecap="round" opacity="0.35" />
      {/* Right handle */}
      <path d="M 138,92 C 142,42 122,26 100,26" fill="none" stroke={color} strokeWidth="11" strokeLinecap="round" />
      <path d="M 138,92 C 142,42 122,26 100,26" fill="none" stroke={shadow} strokeWidth="11" strokeLinecap="round" opacity="0.35" />
      {/* Bag body */}
      <rect x="24" y="92" width="152" height="138" rx="4" fill={color} />
      {/* Top band shadow */}
      <rect x="24" y="92" width="152" height="18" rx="4" fill={shadow} opacity="0.28" />
      {/* Right side shadow */}
      <rect x="162" y="92" width="14" height="138" rx="4" fill={shadow} opacity="0.14" />
      {/* Logo */}
      <text x="100" y="170" textAnchor="middle" fontFamily={font} fontSize="12" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
      {/* Bottom shadow */}
      <rect x="24" y="222" width="152" height="8" rx="4" fill={shadow} opacity="0.22" />
    </svg>
  )

  if (type === 'sweatpants') return (
    <svg viewBox="0 0 200 268" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Waistband */}
      <rect x="28" y="14" width="144" height="22" rx="4" fill={shadow} />
      {/* Waistband top highlight */}
      <rect x="28" y="14" width="144" height="6" rx="4" fill={highlight} opacity="0.15" />
      {/* Hip/seat area */}
      <path d="M 30,36 L 28,96 L 100,102 L 172,96 L 170,36 Z" fill={color} />
      {/* Left leg */}
      <path d="M 28,96 L 16,258 L 95,258 L 100,102 Z" fill={color} />
      {/* Right leg */}
      <path d="M 172,96 L 184,258 L 105,258 L 100,102 Z" fill={color} />
      {/* Inseam shadow - left */}
      <path d="M 100,102 L 95,258 L 80,258 L 86,102 Z" fill={shadow} opacity="0.14" />
      {/* Inseam shadow - right */}
      <path d="M 100,102 L 105,258 L 120,258 L 114,102 Z" fill={shadow} opacity="0.14" />
      {/* Center inseam line */}
      <line x1="100" y1="102" x2="100" y2="258" stroke={shadow} strokeWidth="1" opacity="0.2" />
      {/* Drawstrings */}
      <line x1="90" y1="36" x2="86" y2="54" stroke={logoColor} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
      <line x1="110" y1="36" x2="114" y2="54" stroke={logoColor} strokeWidth="1.5" opacity="0.28" strokeLinecap="round" />
      {/* Ankle cuffs */}
      <rect x="16" y="250" width="79" height="8" rx="2" fill={shadow} opacity="0.32" />
      <rect x="105" y="250" width="79" height="8" rx="2" fill={shadow} opacity="0.32" />
      {/* Logo on front hip */}
      <text x="100" y="68" textAnchor="middle" fontFamily={font} fontSize="11" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
    </svg>
  )

  if (type === 'set') return (
    <svg viewBox="0 0 200 242" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      {/* Sweatshirt top for set */}
      <path d="M 74,52 C 62,46 49,58 44,70 L 7,102 L 26,110 L 26,228 L 174,228 L 174,110 L 193,102 L 156,70 C 151,58 138,46 126,52 C 114,66 86,66 74,52 Z" fill={color} />
      <path d="M 26,110 L 26,122 L 174,122 L 174,110 Z" fill={shadow} opacity="0.3" />
      <path d="M 7,100 L 7,110 L 26,110 L 26,102 Z" fill={shadow} opacity="0.38" />
      <path d="M 193,100 L 193,110 L 174,110 L 174,102 Z" fill={shadow} opacity="0.38" />
      <path d="M 26,220 L 26,228 L 174,228 L 174,220 Z" fill={shadow} opacity="0.28" />
      {/* Set badge */}
      <text x="100" y="156" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
      <text x="100" y="172" textAnchor="middle" fontFamily={font} fontSize="7.5" fontWeight="500" letterSpacing="3" fill={logoColor} opacity="0.4">SET</text>
    </svg>
  )

  // Fallback
  return (
    <svg viewBox="0 0 200 242" className={svgCls} xmlns="http://www.w3.org/2000/svg" style={{ filter: drop }}>
      <path d="M 76,46 C 63,40 50,52 44,64 L 7,97 L 26,105 L 26,228 L 174,228 L 174,105 L 193,97 L 156,64 C 150,52 137,40 124,46 C 110,62 90,62 76,46 Z" fill={color} />
      <text x="100" y="162" textAnchor="middle" fontFamily={font} fontSize="11" fontWeight="600" letterSpacing="4" fill={logoColor} opacity="0.78">[ MNTR4 ]</text>
    </svg>
  )
}

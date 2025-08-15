// components/ParticlesBackground.tsx
export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#0d0d17] to-[#0a0a10]" />

      {/* Soft center glow under the headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 600px at 50% 30%, rgba(167,139,250,0.18) 0%, rgba(167,139,250,0.00) 65%)",
        }}
      />

      {/* Blurred gradient blobs for depth (very subtle) */}
      <div className="absolute -top-24 -left-24 w-[38rem] h-[38rem] bg-[#a78bfa]/15 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[42rem] h-[42rem] bg-[#818cf8]/12 blur-[130px] rounded-full" />

      {/* Subtle dot grid + vignette */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.06)" />
          </pattern>
          <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
            <stop offset="60%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
        <rect width="100%" height="100%" fill="url(#vignette)" />
      </svg>
    </div>
  );
}

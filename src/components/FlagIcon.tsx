import { cn } from "@/lib/utils";

interface FlagIconProps {
  country: "argentina" | "usa" | "laser";
  onClick: () => void;
  className?: string;
}

export const FlagIcon = ({ country, onClick, className }: FlagIconProps) => {
  const argentiniaFlag = (
    <svg viewBox="0 0 72 48" className="w-full h-full">
      <rect width="72" height="16" fill="#74ACDF" />
      <rect y="16" width="72" height="16" fill="#FFFFFF" />
      <rect y="32" width="72" height="16" fill="#74ACDF" />
      <g transform="translate(36, 24)">
        <circle r="6" fill="#F6B40E" stroke="#8B4513" strokeWidth="0.5" />
        <circle r="4" fill="#F6B40E" />
        <path d="M-2,-2 L2,2 M2,-2 L-2,2" stroke="#8B4513" strokeWidth="0.5" />
      </g>
    </svg>
  );

  const usaFlag = (
    <svg viewBox="0 0 72 48" className="w-full h-full">
      <rect width="72" height="48" fill="#B22234" />
      <rect y="0" width="72" height="4" fill="#FFFFFF" />
      <rect y="8" width="72" height="4" fill="#FFFFFF" />
      <rect y="16" width="72" height="4" fill="#FFFFFF" />
      <rect y="24" width="72" height="4" fill="#FFFFFF" />
      <rect y="32" width="72" height="4" fill="#FFFFFF" />
      <rect y="40" width="72" height="4" fill="#FFFFFF" />
      <rect x="0" y="0" width="29" height="28" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        <circle cx="4" cy="4" r="0.8" />
        <circle cx="12" cy="4" r="0.8" />
        <circle cx="20" cy="4" r="0.8" />
        <circle cx="8" cy="8" r="0.8" />
        <circle cx="16" cy="8" r="0.8" />
        <circle cx="24" cy="8" r="0.8" />
        <circle cx="4" cy="12" r="0.8" />
        <circle cx="12" cy="12" r="0.8" />
        <circle cx="20" cy="12" r="0.8" />
        <circle cx="8" cy="16" r="0.8" />
        <circle cx="16" cy="16" r="0.8" />
        <circle cx="24" cy="16" r="0.8" />
        <circle cx="4" cy="20" r="0.8" />
        <circle cx="12" cy="20" r="0.8" />
        <circle cx="20" cy="20" r="0.8" />
        <circle cx="8" cy="24" r="0.8" />
        <circle cx="16" cy="24" r="0.8" />
        <circle cx="24" cy="24" r="0.8" />
      </g>
    </svg>
  );

  const laserFlag = (
    <svg viewBox="0 0 72 48" className="w-full h-full">
      <defs>
        <radialGradient id="laserGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff1493" />
          <stop offset="50%" stopColor="#ff6347" />
          <stop offset="100%" stopColor="#8b0000" />
        </radialGradient>
      </defs>
      <rect width="72" height="48" fill="url(#laserGradient)" />
      <circle cx="36" cy="24" r="8" fill="#ffffff" opacity="0.8" />
      <circle cx="36" cy="24" r="4" fill="#ff1493" />
      <path d="M20 24 L52 24 M36 12 L36 36" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-12 h-8 rounded-sm overflow-hidden shadow-lg hover:scale-110 transition-transform duration-200",
        "animate-[gentle-wave_3s_ease-in-out_infinite] hover:animate-[gentle-wave_2s_ease-in-out_infinite]",
        className
      )}
    >
      {country === "argentina" ? argentiniaFlag : country === "usa" ? usaFlag : laserFlag}
    </button>
  );
};
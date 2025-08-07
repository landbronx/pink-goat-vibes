import { cn } from "@/lib/utils";

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
  animated?: boolean;
}

export const NeonText = ({ 
  children, 
  className,
  size = "medium",
  animated = true 
}: NeonTextProps) => {
  const sizeClasses = {
    large: "text-6xl md:text-8xl lg:text-9xl",
    medium: "text-4xl md:text-6xl lg:text-7xl",
    small: "text-2xl md:text-3xl lg:text-4xl"
  };

  return (
    <h1 
      className={cn(
        "font-graffiti font-bold text-primary",
        "drop-shadow-[0_0_10px_hsl(var(--neon-pink))]",
        "drop-shadow-[0_0_20px_hsl(var(--neon-pink))]",
        "drop-shadow-[0_0_30px_hsl(var(--neon-pink))]",
        animated && "animate-neon-pulse",
        sizeClasses[size],
        className
      )}
      style={{
        textShadow: `
          0 0 8px hsl(var(--neon-pink)),
          0 0 15px hsl(var(--neon-pink)),
          0 0 25px hsl(var(--neon-pink)),
          0 0 35px hsl(var(--neon-pink))
        `
      }}
    >
      {children}
    </h1>
  );
};
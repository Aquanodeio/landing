import { cn } from "../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn("relative transition-bg", className)}
      style={{
        backgroundColor: "#07101f",
      }}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#061537 10%,#0a1e4a 15%,#0d2660 20%,#112d75 25%,#050e29 30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#030b1c 0%,#030b1c 7%,transparent 10%,transparent 12%,#030b1c 16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#0a1d41 0%,#0a1d41 7%,transparent 10%,transparent 12%,#0a1d41 16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] 
            [background-image:var(--dark-gradient),var(--aurora)] 
            [background-size:300%,_200%] [background-position:50%_50%,50%_50%] 
            opacity-70 blur-[10px] filter will-change-transform 
            after:absolute after:inset-0 
            after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:[background-attachment:fixed] 
            after:mix-blend-difference after:content-[""]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,transparent_80%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default AuroraBackground;

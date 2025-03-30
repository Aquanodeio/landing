import { cn } from "../lib/utils";
// import React from "react";

export function GridBackground() {
  return (
    <div className="relative w-full h-full bg-black">
      {/* Blue radial gradient */}
      <div className="absolute inset-0 -top-2/3 bg-gradient-radial from-[#003DBD]/20 via-[#1A1DC1]/10 to-black"></div>

      {/* Vertical lines only with wider spacing */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,rgba(150,150,200,0.15)_1px,transparent_1px)]",
          "before:absolute before:inset-0 before:[background-image:linear-gradient(to_right,rgba(200,200,255,0.05)_1px,transparent_1px)] before:[background-size:80px_80px] before:blur-[0.5px] before:translate-x-[0.5px]"
        )}
      />

      {/* Radial fade mask for lines */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_2%,black_60%)]">
        {/* Semi-transparent overlay that gets masked */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      </div>
    </div>
  );
}

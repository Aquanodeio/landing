import { cn } from "../lib/utils";

export function GridBackground() {
  return (
    <div className="w-full h-full relative">
      {/* Vertical lines with gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[75%] h-full flex justify-between pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 h-full bg-gradient-to-t from-gray-100 via-gray-500 to-gray-300 opacity-5
                      filter drop-shadow-[0_0_8px_rgba(173,216,230,0.7)]"
          />
        ))}
        {[...Array(2)].map((_, i) => (
          <div
            key={i + 4}
            className="hidden md:block w-0.5 h-full bg-gradient-to-t from-gray-100 via-gray-500 to-gray-300 opacity-5
                      filter drop-shadow-[0_0_8px_rgba(173,216,230,0.7)]"
          />
        ))}
      </div>

      {/* Super subtle fade out effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, #08102C 85%, #03081B 100%)",
        }}
      />
    </div>
  );
}

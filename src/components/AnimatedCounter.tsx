import { useState, useEffect } from "react";

export default function AnimatedCounter({ end = 12, duration = 2000 }) {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 2;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const currentCount = Math.floor(
        startValue + (end - startValue) * progress
      );
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
}

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [pointer, setPointer] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Raw motion values for the dot (instant)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring-smoothed values for the trailing ring
  const ringX = useSpring(dotX, { damping: 22, stiffness: 250, mass: 0.6 });
  const ringY = useSpring(dotY, { damping: 22, stiffness: 250, mass: 0.6 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      if (hidden) setHidden(false);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, hsl(var(--primary) / 0.18), hsl(var(--accent) / 0.06) 25%, transparent 60%)`;
      }

      const el = e.target as HTMLElement | null;
      setPointer(
        !!el?.closest(
          "a, button, [role='button'], input, textarea, select, label",
        ),
      );
    };

    const onLeave = () => setHidden(true);
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dotX, dotY, hidden]);

  return (
    <>
      {/* Soft spotlight glow that tracks the cursor */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
        style={{ opacity: hidden ? 0 : 1 }}
      />

      {/* Center dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-accent shadow-glow"
        style={{ x: dotX, y: dotY, opacity: hidden ? 0 : 1 }}
        animate={{ scale: clicked ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />

      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 mix-blend-difference"
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        animate={{
          scale: pointer ? 1.6 : clicked ? 0.8 : 1,
          borderColor: pointer
            ? "hsl(var(--accent))"
            : "hsl(var(--primary) / 0.6)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
};

"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    if (!hasMouse) return;

    const timer = setTimeout(() => setIsVisible(true), 0);

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-[55] opacity-[0.03]"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
      }}
    />
  );
}

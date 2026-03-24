"use client";

import { useLayoutEffect, useRef, useState } from "react";

const LAYERS = 6;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function CursorAurora() {
  const [active, setActive] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef(
    Array.from({ length: LAYERS }, () => ({ x: 0, y: 0 })),
  );
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef(0);

  useLayoutEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setActive(fine.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useLayoutEffect(() => {
    if (!active) return;

    const cx = window.innerWidth * 0.5;
    const cy = window.innerHeight * 0.38;
    mouse.current = { x: cx, y: cy };
    trail.current.forEach((p) => {
      p.x = cx;
      p.y = cy;
    });

    const factors = [0.26, 0.165, 0.11, 0.078, 0.054, 0.038];

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      const tr = trail.current;
      const m = mouse.current;

      tr[0]!.x = lerp(tr[0]!.x, m.x, factors[0]!);
      tr[0]!.y = lerp(tr[0]!.y, m.y, factors[0]!);
      for (let i = 1; i < LAYERS; i++) {
        tr[i]!.x = lerp(tr[i]!.x, tr[i - 1]!.x, factors[i]!);
        tr[i]!.y = lerp(tr[i]!.y, tr[i - 1]!.y, factors[i]!);
      }

      for (let i = 0; i < LAYERS; i++) {
        const el = nodes.current[i];
        if (el) {
          const { x, y } = tr[i]!;
          el.style.transform = `translate3d(${x}px,${y}px,0)`;
        }
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="cursor-aurora-root" aria-hidden>
      {Array.from({ length: LAYERS }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            nodes.current[i] = el;
          }}
          className={`cursor-aurora-node cursor-aurora-node--${i}`}
        >
          <div className={`cursor-aurora-disk cursor-aurora-disk--${i}`} />
        </div>
      ))}
    </div>
  );
}

"use client";

import { useLayoutEffect, useRef, useState } from "react";

const LAYERS = 6;

const FADE_HOLD_MS = 750;
const FADE_OUT_MS = 3200;
const LERP_UP = 0.26;
const LERP_DOWN = 0.085;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function randomAuroraHues(root: HTMLDivElement) {
  const base = Math.random() * 360;
  const spread = 48 + Math.random() * 92;
  const h = (offset: number) => Math.round((base + offset * spread) % 360);
  root.style.setProperty("--aurora-h1", String(h(0)));
  root.style.setProperty("--aurora-h2", String(h(0.28)));
  root.style.setProperty("--aurora-h3", String(h(0.55)));
  root.style.setProperty("--aurora-h4", String(h(0.82)));
}

export function CursorAurora() {
  const [active, setActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef(
    Array.from({ length: LAYERS }, () => ({ x: 0, y: 0 })),
  );
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef(0);
  const lastMoveRef = useRef(0);
  const fadeRef = useRef(1);

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
    const now0 = performance.now();
    lastMoveRef.current = now0;
    mouse.current = { x: cx, y: cy };
    trail.current.forEach((p) => {
      p.x = cx;
      p.y = cy;
    });
    fadeRef.current = 1;

    const root = rootRef.current;
    if (root) {
      randomAuroraHues(root);
      root.style.setProperty("--aurora-fade", "1");
    }

    const factors = [0.19, 0.125, 0.088, 0.062, 0.044, 0.031];

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMoveRef.current = performance.now();
    };

    const onClick = () => {
      if (rootRef.current) randomAuroraHues(rootRef.current);
      lastMoveRef.current = performance.now();
      fadeRef.current = 1;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    const loop = (now: number) => {
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

      const idle = now - lastMoveRef.current;
      let targetFade = 1;
      if (idle > FADE_HOLD_MS) {
        targetFade = Math.max(
          0,
          1 - (idle - FADE_HOLD_MS) / FADE_OUT_MS,
        );
      }
      const lerpT = targetFade >= 0.98 ? LERP_UP : LERP_DOWN;
      fadeRef.current = lerp(fadeRef.current, targetFade, lerpT);
      if (rootRef.current) {
        rootRef.current.style.setProperty(
          "--aurora-fade",
          String(fadeRef.current),
        );
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div ref={rootRef} className="cursor-aurora-root" aria-hidden>
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

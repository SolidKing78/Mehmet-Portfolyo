"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  fillOpacity?: number;
  animated?: boolean;
  accentColors?: [string, string, string];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function parseHsl(hsl: string) {
  const match = hsl.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) {
    return { h: 194, s: 92, l: 72 };
  }

  return {
    h: Number.parseFloat(match[1] ?? "194"),
    s: Number.parseFloat(match[2] ?? "92"),
    l: Number.parseFloat(match[3] ?? "72"),
  };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHsl(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const steps = [
    ["", 100],
    ["-72", 72],
    ["-58", 58],
    ["-42", 42],
    ["-28", 28],
    ["-18", 18],
    ["-10", 10],
  ] as const;

  return Object.fromEntries(
    steps.map(([suffix, alpha]) => [
      `--border-glow-color${suffix}`,
      `hsl(${base} / ${Math.min(alpha * intensity, 100)}%)`,
    ]),
  );
}

function getCenter(node: HTMLElement) {
  const { width, height } = node.getBoundingClientRect();
  return { x: width / 2, y: height / 2 };
}

function getCursorAngle(node: HTMLElement, x: number, y: number) {
  const center = getCenter(node);
  const dx = x - center.x;
  const dy = y - center.y;

  if (dx === 0 && dy === 0) {
    return 0;
  }

  let angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
  if (angle < 0) {
    angle += 360;
  }

  return angle;
}

function getEdgeProximity(node: HTMLElement, x: number, y: number) {
  const center = getCenter(node);
  const dx = x - center.x;
  const dy = y - center.y;

  let kx = Number.POSITIVE_INFINITY;
  let ky = Number.POSITIVE_INFINITY;

  if (dx !== 0) {
    kx = center.x / Math.abs(dx);
  }

  if (dy !== 0) {
    ky = center.y / Math.abs(dy);
  }

  return clamp(1 / Math.min(kx, ky), 0, 1);
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function easeInCubic(value: number) {
  return value * value * value;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (value: number) => number;
  onUpdate: (value: number) => void;
  onEnd?: () => void;
}) {
  const startAt = performance.now() + delay;

  function tick() {
    const elapsed = performance.now() - startAt;
    const progress = clamp(elapsed / duration, 0, 1);
    onUpdate(start + (end - start) * ease(progress));

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    onEnd?.();
  }

  window.setTimeout(() => requestAnimationFrame(tick), delay);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BorderGlow({
  children,
  className,
  innerClassName,
  edgeSensitivity = 36,
  glowColor = "196 86 74",
  backgroundColor = "rgba(8, 12, 18, 0.9)",
  borderRadius = 30,
  glowRadius = 30,
  glowIntensity = 0.48,
  coneSpread = 18,
  fillOpacity = 0.1,
  animated = false,
  accentColors = [
    "rgba(120, 226, 255, 0.36)",
    "rgba(95, 153, 255, 0.2)",
    "rgba(214, 236, 255, 0.08)",
  ],
}: BorderGlowProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(animated);
  const [sweeping, setSweeping] = useState(false);

  const applyMetrics = useCallback(
    (proximity: number, angle: number) => {
      const node = nodeRef.current;
      if (!node) {
        return;
      }

      const edgePercent = proximity * 100;
      const borderSensitivity = edgeSensitivity + 22;
      const borderOpacity = clamp(
        (edgePercent - borderSensitivity) / (100 - borderSensitivity),
        0,
        1,
      );
      const auraOpacity =
        clamp(
          (edgePercent - edgeSensitivity) / (100 - edgeSensitivity),
          0,
          1,
        ) * 0.76;

      node.style.setProperty("--border-glow-angle", `${angle.toFixed(3)}deg`);
      node.style.setProperty(
        "--border-glow-border-opacity",
        borderOpacity.toFixed(3),
      );
      node.style.setProperty(
        "--border-glow-fill-opacity",
        (borderOpacity * fillOpacity).toFixed(3),
      );
      node.style.setProperty(
        "--border-glow-aura-opacity",
        auraOpacity.toFixed(3),
      );
    },
    [edgeSensitivity, fillOpacity],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") {
        return;
      }

      const node = nodeRef.current;
      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const proximity = getEdgeProximity(node, x, y);
      const angle = getCursorAngle(node, x, y);

      setVisible(true);
      applyMetrics(proximity, angle);
    },
    [applyMetrics],
  );

  const handlePointerEnter = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    setVisible(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    applyMetrics(0, 120);
  }, [applyMetrics]);

  useEffect(() => {
    if (!animated || !nodeRef.current || prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    const startAngle = 126;
    const endAngle = 372;

    const kickoffId = requestAnimationFrame(() => {
      if (cancelled) {
        return;
      }

      setVisible(true);
      setSweeping(true);
      applyMetrics(0, startAngle);

      animateValue({
        duration: 640,
        onUpdate: (value) => {
          if (cancelled) {
            return;
          }
          applyMetrics(value / 100, startAngle);
        },
      });

      animateValue({
        delay: 320,
        duration: 2360,
        ease: easeOutCubic,
        start: startAngle,
        end: endAngle,
        onUpdate: (angle) => {
          if (cancelled) {
            return;
          }
          applyMetrics(0.56, angle);
        },
      });

      animateValue({
        delay: 2480,
        duration: 1040,
        ease: easeInCubic,
        start: 100,
        end: 0,
        onUpdate: (value) => {
          if (cancelled) {
            return;
          }
          applyMetrics(value / 100, endAngle);
        },
        onEnd: () => {
          if (cancelled) {
            return;
          }
          setSweeping(false);
          setVisible(false);
        },
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(kickoffId);
      setSweeping(false);
    };
  }, [animated, applyMetrics]);

  return (
    <div
      ref={nodeRef}
      className={cn(
        "premium-border-glow",
        (visible || sweeping) && "premium-border-glow-visible",
        className,
      )}
      style={
        {
          "--border-glow-surface": backgroundColor,
          "--border-glow-radius": `${borderRadius}px`,
          "--border-glow-aura-size": `${glowRadius}px`,
          "--border-glow-cone": coneSpread,
          "--border-glow-accent-1": accentColors[0],
          "--border-glow-accent-2": accentColors[1],
          "--border-glow-accent-3": accentColors[2],
          ...buildGlowVars(glowColor, glowIntensity),
        } as CSSProperties
      }
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <span className="premium-border-glow__aura" aria-hidden />
      <div className={cn("premium-border-glow__inner", innerClassName)}>
        {children}
      </div>
    </div>
  );
}

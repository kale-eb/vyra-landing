"use client";

import { useState, useEffect, useRef } from "react";
import {
  useMotionValue,
  useMotionValueEvent,
  useInView,
  animate,
} from "framer-motion";
const COUNT_RPC =
  "https://uskviqibopshckqsmyvk.supabase.co/rest/v1/rpc/public_user_count";
const COUNT_KEY = "sb_publishable_aAeaDWrJlNNTiJbdh6nGKA_yUVUT_6P";

/* Live user count: seeds from the server-fetched value, refetches every
   60s so it climbs on its own, and counts up fluidly when scrolled into
   view or when a fresh number arrives. */
export default function LiveCount({ initial }: { initial: number | null }) {
  const [target, setTarget] = useState<number | null>(initial);
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState<string | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "160px" });

  useEffect(() => {
    let alive = true;
    const fetchCount = async () => {
      try {
        const res = await fetch(COUNT_RPC, {
          method: "POST",
          headers: { apikey: COUNT_KEY, "Content-Type": "application/json" },
          body: "{}",
        });
        if (!res.ok) return;
        const n = await res.json();
        if (alive && typeof n === "number") setTarget(n);
      } catch {
        /* keep last known value */
      }
    };
    fetchCount();
    const id = setInterval(fetchCount, 60_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (!inView || target == null) return;
    const controls = animate(mv, target, {
      duration: 1.8,
      ease: [0.21, 0.68, 0.35, 1],
    });
    return () => controls.stop();
  }, [inView, target, mv]);

  useMotionValueEvent(mv, "change", (v) =>
    setDisplay(Math.round(v).toLocaleString())
  );

  return (
    <span ref={ref} className="tabular-nums">
      {display ?? (target != null ? target.toLocaleString() : "26,000+")}
    </span>
  );
}

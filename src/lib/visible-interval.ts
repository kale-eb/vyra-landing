/** Run decorative carousel work only while its section can be seen. */
export function watchVisibleInterval(element: Element, tick: () => void, delay: number) {
  let visible = typeof IntersectionObserver === "undefined";
  let timer: ReturnType<typeof setInterval> | undefined;
  let stopped = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const sync = () => {
    if (stopped) return;
    const shouldRun = visible && !document.hidden && !reducedMotion.matches;
    if (shouldRun && timer === undefined) timer = setInterval(tick, delay);
    if (!shouldRun && timer !== undefined) {
      clearInterval(timer);
      timer = undefined;
    }
  };
  const observer = typeof IntersectionObserver === "undefined" ? undefined : new IntersectionObserver(
    (entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      sync();
    }
  );
  observer?.observe(element);
  document.addEventListener("visibilitychange", sync);
  reducedMotion.addEventListener("change", sync);
  sync();

  return () => {
    stopped = true;
    observer?.disconnect();
    document.removeEventListener("visibilitychange", sync);
    reducedMotion.removeEventListener("change", sync);
    if (timer !== undefined) clearInterval(timer);
  };
}

/** Autoplay demo media only while its element and browser tab are visible. */
export function watchVideoPlayback(video: HTMLVideoElement) {
  let visible = typeof IntersectionObserver === "undefined";
  const sync = () => {
    if (visible && !document.hidden) void video.play().catch(() => {});
    else video.pause();
  };
  const observer = typeof IntersectionObserver === "undefined" ? undefined : new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  observer?.observe(video);
  video.addEventListener("canplay", sync);
  document.addEventListener("visibilitychange", sync);
  sync();
  return () => {
    observer?.disconnect();
    video.removeEventListener("canplay", sync);
    document.removeEventListener("visibilitychange", sync);
    video.pause();
  };
}

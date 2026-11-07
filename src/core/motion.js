/**
 * Motion policy.
 * - prefers-reduced-motion shortens every timeline.
 * - html.is-static (set by ?state= links) freezes all transitions for capture.
 */
const root = document.documentElement;
const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

export const isReduced = () => reducedQuery.matches;
export const pick = (full, reduced) => (reducedQuery.matches ? reduced : full);

export const isStatic = () => root.classList.contains("is-static");
export const releaseStatic = () => root.classList.remove("is-static");

/** Timers that a scene can cancel in one call when it is left mid-animation. */
export function createTimeline() {
  let ids = [];
  return {
    after(ms, fn) { ids.push(window.setTimeout(fn, ms)); },
    clear() { ids.forEach(clearTimeout); ids = []; },
  };
}

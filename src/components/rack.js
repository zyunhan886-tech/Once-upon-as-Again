/**
 * Horizontal rack of standing 3D books (genre shelf).
 *
 * The rack is a native horizontal scroller, so touch swipes, trackpads and
 * keyboard focus work as-is. On top of that:
 *   - mouse drag scrolls it (a drag never triggers the book link underneath),
 *   - a vertical wheel over it scrolls sideways until the rack hits an end,
 *   - the ← / → buttons page through it,
 *   - the book nearest the centre is reported through `onCenter`.
 */
import { isReduced } from "../core/motion.js";
import { bindDragScroll } from "../core/dragscroll.js";

export function bindRack(rack, { prev, next, onCenter }) {
  const items = () => [...rack.querySelectorAll(".book3d")];
  const step = () => {
    const first = rack.querySelector(".rack__item");
    return first ? first.getBoundingClientRect().width : 120;
  };
  const behavior = () => (isReduced() ? "auto" : "smooth");

  // Start with the whole row centred when it fits, otherwise from its first book.
  const track = rack.querySelector(".rack__track");
  const maxScroll = track.scrollWidth - rack.clientWidth;
  const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
  const row = track.scrollWidth - pad * 2;
  rack.scrollLeft = row <= rack.clientWidth * 0.86
    ? Math.max(0, maxScroll / 2)
    : Math.max(0, pad - rack.clientWidth * 0.1);

  // ── Which book sits in the middle? ──
  let raf = 0;
  let userMoved = false;
  function report() {
    raf = 0;
    if (!userMoved) return; // keep the first book captioned until the reader moves
    const mid = rack.getBoundingClientRect().left + rack.clientWidth / 2;
    let best = null, dist = Infinity;
    for (const el of items()) {
      const r = el.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - mid);
      if (d < dist) { dist = d; best = el; }
    }
    if (best) onCenter(best.dataset.book);
  }
  function syncButtons() {
    const max = rack.scrollWidth - rack.clientWidth - 2;
    if (prev) prev.disabled = rack.scrollLeft <= 2;
    if (next) next.disabled = rack.scrollLeft >= max;
    rack.classList.toggle("is-scrollable", max > 2);
    for (const b of [prev, next]) if (b) b.style.visibility = max > 2 ? "" : "hidden";
  }
  rack.addEventListener("scroll", () => {
    syncButtons();
    if (!raf) raf = requestAnimationFrame(report);
  }, { passive: true });
  syncButtons();

  const page = (dir) => {
    userMoved = true;
    rack.scrollBy({ left: dir * step() * 3, behavior: behavior() });
  };
  prev?.addEventListener("click", () => page(-1));
  next?.addEventListener("click", () => page(1));

  // ── Wheel: vertical intent scrolls the row, then lets the page scroll at the ends ──
  rack.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) { userMoved = true; return; } // trackpad sideways: native
    const max = rack.scrollWidth - rack.clientWidth;
    const atEnd = (e.deltaY > 0 && rack.scrollLeft >= max - 1) || (e.deltaY < 0 && rack.scrollLeft <= 1);
    if (atEnd) return;
    e.preventDefault();
    userMoved = true;
    rack.scrollLeft += e.deltaY;
  }, { passive: false });

  // ── Mouse drag (shared with the bookcase bays) ──
  bindDragScroll(rack, { onMove: () => { userMoved = true; } });

  // Touch swipes are native scrolling; count them as "moved" for the caption.
  rack.addEventListener("touchstart", () => { userMoved = true; }, { passive: true });
  rack.addEventListener("focusin", () => { userMoved = true; });
}

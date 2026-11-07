/**
 * Mouse-drag scrolling for a native horizontal scroller.
 * Touch and trackpads already scroll natively; this adds "grab and pull" for a
 * mouse. A drag never triggers the link under the cursor, and the element gets
 * .is-dragging while it moves (CSS can drop scroll-snap / change the cursor).
 */
export function bindDragScroll(el, { onMove } = {}) {
  let drag = null;
  let swallowClick = false;

  // the click that follows a drag must not open whatever is under the cursor
  el.addEventListener("click", (e) => {
    if (!swallowClick) return;
    e.preventDefault();
    e.stopPropagation();
  }, { capture: true });

  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    if (el.scrollWidth <= el.clientWidth) return; // nothing to scroll
    drag = { x: e.clientX, left: el.scrollLeft, moved: false, id: e.pointerId };
  });

  el.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) < 6) return;
    if (!drag.moved) {
      drag.moved = true;
      el.classList.add("is-dragging");
      el.setPointerCapture(drag.id);
      onMove?.();
    }
    el.scrollLeft = drag.left - dx;
  });

  const end = () => {
    if (!drag) return;
    const moved = drag.moved;
    el.classList.remove("is-dragging");
    if (el.hasPointerCapture?.(drag.id)) el.releasePointerCapture(drag.id);
    drag = null;
    if (moved) {
      swallowClick = true; // the click (if any) fires right after pointerup, before this timeout
      setTimeout(() => { swallowClick = false; }, 0);
    }
  };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);
  el.addEventListener("dragstart", (e) => e.preventDefault()); // no ghost image of links/images
}

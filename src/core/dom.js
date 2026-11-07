/** Tiny DOM helpers shared by every scene and component. */

export const qs = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ENTITIES[c]);

/** Stable 32-bit hash (FNV-1a) — used to give each book a deterministic look. */
export function hashOf(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Focus a heading after a scene change without scrolling the page. */
export function focusHeading(el) {
  if (el) el.focus({ preventScroll: true });
}

/**
 * Act 1 — the opening sequence.
 * closed ─(hold)→ open ─(click)→ closing ─→ #/library
 * The visual phases live on <html data-intro="…">; CSS does the motion.
 */
import { qs } from "../core/dom.js";
import { pick, createTimeline } from "../core/motion.js";

export function createIntro({ root, navigate }) {
  const html = document.documentElement;
  const timeline = createTimeline();
  const setPhase = (phase) => { html.dataset.intro = phase; };

  function play() {
    timeline.clear();
    // Snap to "closed" with transitions suppressed, then let the cover turn.
    html.classList.add("is-snapping");
    setPhase("closed");
    void html.offsetWidth;
    html.classList.remove("is-snapping");
    timeline.after(pick(1200, 300), () => setPhase("open"));
  }

  function close() {
    timeline.clear();
    html.classList.remove("is-static"); // a click always animates, even from a capture link
    setPhase("closing");
    timeline.after(pick(2350, 450), () => navigate("/library"));
  }

  qs('[data-action="enter"]', root).addEventListener("click", close);

  return {
    enter(_params, ctx) {
      document.title = "MendReading — Do you remember the last time you read a book?";
      if (ctx.static) return; // ?state=closed|opening|open: the phase is already set, hold it
      play();
    },
    leave() { timeline.clear(); },
  };
}

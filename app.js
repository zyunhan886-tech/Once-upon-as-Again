/**
 * MendReading — entry point.
 * Wires data → store → scenes → router. No dependencies, native ES modules.
 *
 * Capture links (frozen, never auto-advance):
 *   ?state=closed | opening | open          Act 1 phases
 *   ?state=bookshelf                        Act 2 hub
 *   ?state=shelf&genre=<id>                 genre shelf   (default: scifi)
 *   ?state=reader&book=<id>                 page one      (default: time-machine)
 */
import { qs } from "./src/core/dom.js";
import { createRouter } from "./src/core/router.js";
import { initStore } from "./src/core/store.js";
import { createIntro } from "./src/scenes/intro.js";
import { createLibrary } from "./src/scenes/library.js";
import { createShelf } from "./src/scenes/shelf.js";
import { createReader } from "./src/scenes/reader.js";

const query = new URLSearchParams(location.search);

const CAPTURE = {
  closed: () => ({ name: "intro", params: {} }),
  opening: () => ({ name: "intro", params: {} }),
  open: () => ({ name: "intro", params: {} }),
  bookshelf: () => ({ name: "library", params: {} }),
  shelf: () => ({ name: "shelf", params: { genre: query.get("genre") || "scifi" } }),
  reader: () => ({ name: "reader", params: { id: query.get("book") || "time-machine" } }),
};
const capture = CAPTURE[query.get("state")]?.();

// Captures always show the seeded demo data, never this browser's saved progress.
initStore({ useSaved: !capture });

let router;
const navigate = (path, opts) => router.navigate(path, opts);

const scenes = {
  intro: createIntro({ root: qs('[data-scene-root="intro"]'), navigate }),
  library: createLibrary({ root: qs('[data-scene-root="library"]') }),
  shelf: createShelf({ root: qs('[data-scene-root="shelf"]') }),
  reader: createReader({ root: qs('[data-scene-root="reader"]'), back: () => router.back() }),
};

router = createRouter(scenes);
router.start();

qs('[data-action="replay"]').addEventListener("click", () => navigate("/"));

if (capture) router.show(capture, { static: true });
else router.resolve();

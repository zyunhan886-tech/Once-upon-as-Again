/**
 * Once Upon an Again — entry point.
 * Wires data → store → scenes → router. No dependencies, native ES modules.
 *
 * Capture links (frozen, never auto-advance):
 *   ?state=closed | opening | open          Act 1 phases
 *   ?state=bookshelf                        Act 2 hub
 *   ?state=shelf&genre=<id>                 genre shelf   (default: scifi)
 *   ?state=reader&book=<id>                 page one      (default: time-machine)
 *   ?state=search&q=<text>                  Act 2 hub with Search open
 */
import { qs } from "./src/core/dom.js";
import { createRouter } from "./src/core/router.js";
import { initStore } from "./src/core/store.js";
import { createIntro } from "./src/scenes/intro.js";
import { createLibrary } from "./src/scenes/library.js";
import { createShelf } from "./src/scenes/shelf.js";
import { createReader } from "./src/scenes/reader.js";
import { createSearch } from "./src/components/search.js";

const query = new URLSearchParams(location.search);

const CAPTURE = {
  closed: () => ({ name: "intro", params: {} }),
  opening: () => ({ name: "intro", params: {} }),
  open: () => ({ name: "intro", params: {} }),
  bookshelf: () => ({ name: "library", params: {} }),
  shelf: () => ({ name: "shelf", params: { genre: query.get("genre") || "scifi" } }),
  reader: () => ({ name: "reader", params: { id: query.get("book") || "time-machine" } }),
  search: () => ({ name: "library", params: {} }),
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

// Search: the field beside "Discover", any [data-action="search"] (e.g. an empty shelf), "/" or ⌘K.
const search = createSearch({ dialog: qs("#search") });
document.addEventListener("click", (event) => {
  if (event.target.closest('[data-action="search"]')) search.open();
});

// Adding a book (or opening / finishing one) redraws whatever scene is showing.
document.addEventListener("reading:change", () => router.refresh());

if (capture) router.show(capture, { static: true });
else router.resolve();
if (query.get("state") === "search") search.open(query.get("q") || "");

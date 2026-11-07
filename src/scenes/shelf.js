/**
 * Genre shelf — the giant genre name sits above a long, scrollable row of
 * standing 3D books (src/components/rack.js). The row holds only the books on
 * the reader's shelf — reading, then not started, then finished. Books that are
 * only in the catalogue are found through Search. Tabs at the bottom switch genres.
 */
import { qs, esc, focusHeading } from "../core/dom.js";
import { isStatic } from "../core/motion.js";
import { GENRES, genreById, genreIndex } from "../data/genres.js";
import { booksIn, bookById } from "../data/books.js";
import { readingOf, isOnShelf } from "../core/store.js";
import { renderBook3D, statusLabel } from "../components/book3d.js";
import { bindRack } from "../components/rack.js";

const ORDER = { reading: 0, shelved: 1, finished: 2 };

export function createShelf({ root }) {
  let caption = null;

  function describe(book) {
    if (!caption || !book) return;
    caption.innerHTML = `
      <span class="shelf-caption__title">${esc(book.title)}</span>
      <span class="shelf-caption__meta">${esc(book.author)} · ${book.year} · <em>${statusLabel(book)}</em></span>`;
  }

  // Hover / focus a book on the rack → caption follows it.
  const follow = (event) => {
    const el = event.target.closest(".book3d");
    if (el) describe(bookById[el.dataset.book]);
  };
  root.addEventListener("pointerover", follow);
  root.addEventListener("focusin", follow);

  function render(genre) {
    const g = genreById[genre];
    const all = booksIn(genre);
    const rack = all
      .filter(isOnShelf)
      .sort((a, b) => ORDER[readingOf(a).state] - ORDER[readingOf(b).state]);
    const n = GENRES.length;
    const i = genreIndex(genre);

    root.innerHTML = `
      <div class="shelf-scene" style="--len:${g.name.length}">
        <div class="shelf-bar">
          <a class="text-link text-link--quiet" href="#/library">← Library</a>
          <p class="eyebrow">Shelf ${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}</p>
        </div>

        <div class="shelf-hero">
          <h2 class="shelf-hero__title" id="shelf-scene-title" tabindex="-1">${esc(g.name)}</h2>
          <p class="shelf-hero__tagline">${esc(g.tagline)}</p>
          ${rack.length
            ? `<div class="rack" aria-label="Your ${esc(g.name)} books — drag or swipe to browse">
                 <ul class="rack__track" style="--n:${rack.length}">${rack.map(renderBook3D).join("")}</ul>
               </div>`
            : `<p class="rack-empty">Nothing on this shelf yet. <button class="text-link" type="button" data-action="search">Search for a book</button> to add one.</p>`}
        </div>

        ${rack.length ? `
        <div class="rack-controls">
          <button class="rack-nav" type="button" data-rack="prev" aria-label="Previous books">←</button>
          <p class="shelf-caption" aria-live="polite"></p>
          <button class="rack-nav" type="button" data-rack="next" aria-label="Next books">→</button>
        </div>` : ""}

        <nav class="genre-tabs" aria-label="Genres">
          ${GENRES.map((x) => `<a class="genre-tab" href="#/shelf/${x.id}"${x.id === genre ? ' aria-current="page"' : ""}>${esc(x.name)}</a>`).join("")}
        </nav>
      </div>`;

    caption = qs(".shelf-caption", root);
    describe(rack[0]);

    const rackEl = qs(".rack", root);
    if (rackEl) {
      bindRack(rackEl, {
        prev: qs('[data-rack="prev"]', root),
        next: qs('[data-rack="next"]', root),
        onCenter: (id) => describe(bookById[id]),
      });
    }
  }

  let current = null;

  return {
    canEnter: ({ genre }) => Boolean(genreById[genre]),
    /** Shelf changed (e.g. a book added from Search): redraw this genre, keep focus. */
    refresh() { if (current) render(current); },
    enter({ genre }) {
      current = genre;
      document.title = `${genreById[genre].name} — Once Upon an Again`;
      render(genre);
      if (!isStatic()) focusHeading(qs("#shelf-scene-title", root));
    },
  };
}

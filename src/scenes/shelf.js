/**
 * Genre shelf — the giant genre name sits behind a rack of standing 3D books.
 * The rack holds only books the reader is reading or has finished; everything
 * else in the genre waits underneath. Tabs at the bottom switch genres.
 */
import { qs, esc, focusHeading } from "../core/dom.js";
import { isStatic } from "../core/motion.js";
import { GENRES, genreById, genreIndex } from "../data/genres.js";
import { booksIn, bookById } from "../data/books.js";
import { readingOf } from "../core/store.js";
import { renderBook3D, statusLabel } from "../components/book3d.js";
import { renderCover } from "../components/cover.js";

const ORDER = { reading: 0, finished: 1 };

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
      .filter((b) => readingOf(b).state !== "none")
      .sort((a, b) => ORDER[readingOf(a).state] - ORDER[readingOf(b).state]);
    const waiting = all.filter((b) => readingOf(b).state === "none");
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
            ? `<div class="rack" aria-label="Reading and finished">
                 <ul class="rack__track" style="--n:${rack.length}">${rack.map(renderBook3D).join("")}</ul>
               </div>`
            : `<p class="rack-empty">Nothing from this shelf yet. Start with one page below.</p>`}
        </div>

        <p class="shelf-caption" aria-live="polite"></p>

        <nav class="genre-tabs" aria-label="Genres">
          ${GENRES.map((x) => `<a class="genre-tab" href="#/shelf/${x.id}"${x.id === genre ? ' aria-current="page"' : ""}>${esc(x.name)}</a>`).join("")}
        </nav>

        ${waiting.length ? `
        <section class="waiting" aria-labelledby="waiting-title">
          <header class="waiting__head">
            <h3 class="waiting__title" id="waiting-title">Still on the shelf</h3>
            <p class="waiting__note">Unopened. Each one is a single page away.</p>
          </header>
          <ul class="waiting__list">
            ${waiting.map((b) => `
              <li><a class="waiting__book" href="#/book/${b.id}" aria-label="Start ${esc(b.title)} by ${esc(b.author)}">
                ${renderCover(b, { size: "sm" })}
                <span class="waiting__label">Start reading →</span>
              </a></li>`).join("")}
          </ul>
        </section>` : ""}
      </div>`;

    caption = qs(".shelf-caption", root);
    describe(rack[0]);
  }

  return {
    canEnter: ({ genre }) => Boolean(genreById[genre]),
    enter({ genre }) {
      document.title = `${genreById[genre].name} — Once Upon an Again`;
      render(genre);
      if (!isStatic()) focusHeading(qs("#shelf-scene-title", root));
    },
  };
}

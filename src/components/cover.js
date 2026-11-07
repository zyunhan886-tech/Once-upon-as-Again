/**
 * Book cover — always the book's own scanned cover (`book.cover.src`).
 * There is no generated or placeholder art: a book without a real cover
 * does not belong in src/data/books.js.
 */
import { esc } from "../core/dom.js";
import { genreById } from "../data/genres.js";

/** CSS custom properties shared by the cover, its spine and the 3D book sides. */
export function coverStyle(book) {
  const g = genreById[book.genre];
  // Absolute URL: a url() inside a custom property resolves against the stylesheet that uses it.
  const img = new URL(book.cover.src, document.baseURI).href;
  return `--c-bg:${book.cover.tone};--c-ink:#EDE6D8;--c-acc:${g.accent};--c-img:url('${img}')`;
}

/** Cover markup. The image carries the title; every caller labels the book itself. */
export function renderCover(book, { size = "md" } = {}) {
  return `
    <span class="cover-art cover-art--${size}" style="${coverStyle(book)}">
      <img class="cover-art__photo" src="${esc(book.cover.src)}" alt="" width="480" height="720" loading="lazy" decoding="async">
    </span>`;
}

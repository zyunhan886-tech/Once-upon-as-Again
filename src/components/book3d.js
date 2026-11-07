/**
 * A standing 3D book (cover, gilded fore-edge, top, spine, back) used on the
 * genre shelf rack. Built from six CSS faces; the cover is real HTML text.
 */
import { esc } from "../core/dom.js";
import { renderCover, coverStyle } from "./cover.js";
import { readingOf } from "../core/store.js";

export function statusLabel(book) {
  const r = readingOf(book);
  if (r.state === "finished") return "Finished";
  if (r.state === "reading") return `Reading · ${Math.round(r.progress * 100)}%`;
  return "Not started";
}

export function renderBook3D(book, index) {
  const r = readingOf(book);
  const badge = r.state === "finished"
    ? `<span class="book3d__badge">Finished</span>`
    : `<span class="book3d__progress" style="--p:${r.progress}"></span>`;
  return `
    <li class="rack__item" style="--i:${index}">
      <a class="book3d" href="#/book/${book.id}" data-book="${book.id}" style="${coverStyle(book)}"
         aria-label="${esc(book.title)} by ${esc(book.author)} — ${statusLabel(book)}">
        <span class="book3d__face book3d__front">${renderCover(book, { size: "lg" })}${badge}</span>
        <span class="book3d__face book3d__edge" aria-hidden="true"></span>
        <span class="book3d__face book3d__top" aria-hidden="true"></span>
        <span class="book3d__face book3d__spine" aria-hidden="true"></span>
        <span class="book3d__face book3d__back" aria-hidden="true"></span>
      </a>
    </li>`;
}

/** A book spine on the Act 2 bookcase. Links straight into the book. */
import { esc, hashOf } from "../core/dom.js";
import { coverStyle } from "./cover.js";
import { readingOf } from "../core/store.js";
import { statusLabel } from "./book3d.js";

export function renderSpine(book) {
  const h = hashOf(book.id);
  const width = 24 + (h % 4) * 4;          // 24–36px
  const height = 72 + ((h >> 3) % 5) * 6;  // 72–96% of the cell
  const lean = book.lean || (h % 9 === 0 ? -6 : 0);
  const r = readingOf(book);
  return `
    <li class="spine-slot" style="--sw:${width}px">
      <a class="spine${r.state !== "none" ? ` is-${r.state}` : ""}" href="#/book/${book.id}"
         style="${coverStyle(book)};--sh:${height}%;--lean:${lean}deg"
         aria-label="${esc(book.title)} by ${esc(book.author)} — ${statusLabel(book)}" title="${esc(book.title)}">
        <span class="spine__title">${esc(book.title)}</span>
      </a>
    </li>`;
}

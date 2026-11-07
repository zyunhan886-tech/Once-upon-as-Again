/** A book spine on the Act 2 bookcase. Links straight into the book. */
import { esc, hashOf } from "../core/dom.js";
import { coverStyle } from "./cover.js";
import { readingOf } from "../core/store.js";

export function renderSpine(book) {
  const h = hashOf(book.id);
  const width = 24 + (h % 4) * 4;          // 24–36px
  const height = 72 + ((h >> 3) % 5) * 6;  // 72–96% of the cell
  const lean = book.lean || (h % 9 === 0 ? -6 : 0);
  const r = readingOf(book);
  const status = r.state === "finished" ? "finished" : r.state === "reading" ? `reading, ${Math.round(r.progress * 100)}%` : "not started";
  return `
    <li class="spine-slot">
      <a class="spine${r.state !== "none" ? ` is-${r.state}` : ""}" href="#/book/${book.id}"
         style="${coverStyle(book)};--sw:${width}px;--sh:${height}%;--lean:${lean}deg"
         aria-label="${esc(book.title)} by ${esc(book.author)} — ${status}" title="${esc(book.title)}">
        <span class="spine__title">${esc(book.title)}</span>
      </a>
    </li>`;
}

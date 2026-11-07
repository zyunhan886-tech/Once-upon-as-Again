/** A taped Discover note: a line from a book that links to its first page. */
import { esc } from "../core/dom.js";
import { genreById } from "../data/genres.js";

const ICONS = {
  scifi: '<circle cx="17" cy="17" r="5"/><ellipse cx="17" cy="17" rx="14" ry="5.5" transform="rotate(-20 17 17)"/>',
  fantasy: '<path d="M22 6a10 10 0 1 0 6 16A12 12 0 0 1 22 6z"/><path d="M4 30l5-9 5 9M14 30l5-11 5 11"/>',
  mystery: '<circle cx="14" cy="14" r="8"/><path d="M20 20l9 9"/>',
  romance: '<circle cx="13" cy="17" r="7"/><circle cx="21" cy="17" r="7"/>',
  historical: '<path d="M4 12L17 5l13 7z"/><path d="M8 14v12M14 14v12M20 14v12M26 14v12M4 29h26"/>',
  horror: '<path d="M8 30V17l9-8 9 8v13z"/><path d="M15 30v-6h4v6"/><circle cx="27" cy="7" r="3"/>',
  adventure: '<path d="M3 24q4-3 8 0t8 0 8 0 8 0"/><path d="M15 21V6l9 15z"/>',
  literary: '<path d="M3 24h28"/><circle cx="22" cy="17" r="4"/><path d="M6 30v-4M10 30v-3M14 30v-5"/>',
};

const TILTS = [-0.9, 0.7, -0.4, 1, -0.7, 0.5];

export function renderNote(book, index) {
  const g = genreById[book.genre];
  return `
    <li class="notes__item">
      <a class="note" href="#/book/${book.id}"
         style="--note-bg:${g.note};--tilt:${TILTS[index % TILTS.length]}deg;--i:${index}">
        <span class="note__top">
          <svg class="note__icon" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true" focusable="false">${ICONS[g.id]}</svg>
          <span class="note__genre">${esc(g.name)}</span>
        </span>
        <span class="note__quote">${esc(book.quote)}</span>
        <span class="note__meta">
          <span class="note__source"><strong>${esc(book.title)}</strong>${esc(book.author)}</span>
          <span class="note__go" aria-hidden="true">Read page one →</span>
        </span>
      </a>
    </li>`;
}

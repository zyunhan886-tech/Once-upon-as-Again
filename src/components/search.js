/**
 * Search — a modal <dialog> over any Act 2 scene.
 *
 * Finds books in the whole catalogue (src/data/books.js) by title, author,
 * genre, year or a word from the quote. Books not on the shelf yet can be added
 * from here; a book added but not started can be taken back off ("Undo").
 * Opening a book (cover or title) goes to its first page, as everywhere else.
 *
 * Open with the masthead button, any [data-action="search"], "/" or ⌘K / Ctrl+K.
 */
import { esc } from "../core/dom.js";
import { BOOKS, bookById } from "../data/books.js";
import { genreById } from "../data/genres.js";
import { readingOf, addToShelf, removeFromShelf } from "../core/store.js";
import { statusLabel } from "./book3d.js";
import { renderCover } from "./cover.js";

/** Lower-case, strip accents, straighten apostrophes — "Brontë" matches "bronte". */
const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’‘]/g, "'").toLowerCase();

const INDEX = BOOKS.map((book) => ({
  book,
  title: fold(book.title),
  author: fold(book.author),
  genre: fold(genreById[book.genre].name),
  year: String(book.year),
  quote: fold(book.quote),
}));

/** Every term must match somewhere; title hits rank above author, genre and quote hits. */
function score(entry, terms) {
  let total = 0;
  for (const t of terms) {
    if (entry.title.startsWith(t) || entry.title.includes(" " + t)) total += 8;
    else if (entry.title.includes(t)) total += 5;
    else if (entry.author.includes(t)) total += 4;
    else if (entry.genre.includes(t)) total += 3;
    else if (entry.year === t) total += 3;
    else if (entry.quote.includes(t)) total += 1;
    else return 0;
  }
  return total;
}

/** Empty query → the books not on the shelf yet (plus any the reader just touched, so rows don't jump away). */
export function find(query, keep = new Set()) {
  const terms = fold(query).trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return INDEX.filter((e) => readingOf(e.book).state === "none" || keep.has(e.book.id)).map((e) => e.book);
  return INDEX
    .map((e) => [e, score(e, terms)])
    .filter(([, s]) => s > 0)
    .sort((a, b) => b[1] - a[1] || a[0].book.title.localeCompare(b[0].book.title))
    .map(([e]) => e.book);
}

function action(book) {
  const state = readingOf(book).state;
  const title = esc(book.title);
  if (state === "none") {
    return `<button class="btn btn--small" type="button" data-add="${book.id}" aria-label="Add ${title} to your shelf">Add to shelf</button>`;
  }
  if (state === "shelved") {
    return `<button class="btn btn--quiet btn--small" type="button" data-remove="${book.id}" aria-pressed="true" aria-label="${title} is on your shelf — undo">On your shelf · Undo</button>`;
  }
  return `<a class="text-link search__continue" href="#/book/${book.id}">Continue →</a>`;
}

function row(book) {
  const g = genreById[book.genre];
  return `
    <li class="search__result" data-book="${book.id}">
      <a class="search__cover" href="#/book/${book.id}" tabindex="-1" aria-hidden="true">${renderCover(book, { size: "sm" })}</a>
      <div class="search__info">
        <p class="search__title"><a href="#/book/${book.id}">${esc(book.title)}</a></p>
        <p class="search__meta">${esc(book.author)} · ${esc(g.name)} · ${book.year}</p>
        <p class="search__state">${statusLabel(book)}</p>
      </div>
      <div class="search__action">${action(book)}</div>
    </li>`;
}

export function createSearch({ dialog }) {
  const input = dialog.querySelector("#search-input");
  const list = dialog.querySelector("#search-results");
  const status = dialog.querySelector("#search-status");
  const root = document.documentElement;
  let touched = new Set(); // books added/undone since the dialog opened

  function render() {
    const q = input.value;
    const books = find(q, touched);
    list.innerHTML = books.map(row).join("");
    if (!q.trim()) {
      const left = books.filter((b) => readingOf(b).state === "none").length;
      status.textContent = books.length
        ? `${left} ${left === 1 ? "book" : "books"} not on your shelf yet`
        : "Every book in the catalogue is on your shelf.";
    } else {
      status.textContent = books.length
        ? `${books.length} ${books.length === 1 ? "match" : "matches"} for “${q.trim()}”`
        : `Nothing matches “${q.trim()}”. Try a title, an author or a genre.`;
    }
  }

  function open(query = "") {
    if (dialog.open) { input.focus(); return; }
    input.value = query;
    touched = new Set();
    render();
    dialog.showModal();
    root.classList.add("has-dialog");
    input.focus();
    input.select();
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  dialog.addEventListener("close", () => root.classList.remove("has-dialog"));
  // Esc closes — handled here too, since browsers may skip the built-in cancel for script-opened dialogs.
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); close(); }
  });
  dialog.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
  input.addEventListener("input", render);

  // Click outside the panel (on the backdrop) closes.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
    if (e.target.closest("[data-search-close]")) close();
    // Opening a book: let the router navigate, and get out of its way.
    if (e.target.closest('a[href^="#/"]')) close();
  });

  // Add / undo — redraw the list and keep focus on the same book's button.
  list.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    const remove = e.target.closest("[data-remove]");
    if (!add && !remove) return;
    const book = bookById[(add || remove).dataset[add ? "add" : "remove"]];
    const shelf = genreById[book.genre].name;
    touched.add(book.id);
    if (add) addToShelf(book); else removeFromShelf(book);
    render();
    status.textContent = add ? `Added “${book.title}” to your ${shelf} shelf.` : `Took “${book.title}” off your shelf.`;
    list.querySelector(`[data-book="${book.id}"] .search__action :is(button, a)`)?.focus();
  });

  // Keyboard: "/" or ⌘K / Ctrl+K opens, unless the reader is typing somewhere.
  document.addEventListener("keydown", (e) => {
    const typing = e.target.closest?.("input, textarea, select, [contenteditable]");
    const mod = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
    if (mod || (e.key === "/" && !typing)) {
      if (root.dataset.scene === "intro") return;
      e.preventDefault();
      open();
    }
  });

  return { open, close, render };
}

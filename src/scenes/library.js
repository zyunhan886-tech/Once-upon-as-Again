/**
 * Act 2 — the hub. Left: an eight-cell bookcase (spine → book, cell → shelf).
 * Right: Discover notes, filtered by the "Taste" select.
 */
import { qs, esc, focusHeading } from "../core/dom.js";
import { isStatic } from "../core/motion.js";
import { GENRES } from "../data/genres.js";
import { booksIn } from "../data/books.js";
import { readingOf, lastOpened } from "../core/store.js";
import { renderSpine } from "../components/spine.js";
import { renderNote } from "../components/note.js";

export function createLibrary({ root }) {
  const bookcase = qs("#bookcase", root);
  const notes = qs("#notes", root);
  const select = qs("#genre-select", root);
  const count = qs("#notes-count", root);
  const resume = qs("#continue-note", root);
  let taste = "all";

  select.insertAdjacentHTML("beforeend", GENRES.map((g) => `<option value="${g.id}">${esc(g.name)}</option>`).join(""));
  select.addEventListener("change", () => { taste = select.value; renderNotes(); });

  function renderBookcase() {
    bookcase.innerHTML = GENRES.map((g, i) => {
      const books = booksIn(g.id);
      const onRack = books.filter((b) => readingOf(b).state !== "none").length;
      return `
        <section class="cell" aria-labelledby="cell-${g.id}">
          <header class="cell__head">
            <a class="cell__link" id="cell-${g.id}" href="#/shelf/${g.id}">
              <span class="cell__no">${String(i + 1).padStart(2, "0")}</span>
              <span class="cell__name">${esc(g.name)}</span>
            </a>
            <span class="cell__count">${onRack}/${books.length}</span>
          </header>
          <ul class="cell__books">${books.map(renderSpine).join("")}</ul>
          <span class="cell__hint" aria-hidden="true">Open shelf →</span>
        </section>`;
    }).join("");
  }

  function renderNotes() {
    const list = taste === "all" ? GENRES.map((g) => booksIn(g.id)[0]) : booksIn(taste);
    notes.innerHTML = list.map(renderNote).join("");
    const name = GENRES.find((g) => g.id === taste)?.name;
    count.textContent = taste === "all" ? `${list.length} lines, one from every shelf` : `${list.length} lines from ${name}`;
  }

  function renderResume() {
    const book = lastOpened();
    resume.innerHTML = book
      ? `Continue where you left off: <a class="text-link" href="#/book/${book.id}">${esc(book.title)}</a>`
      : "Tap a spine to read its first page, or a shelf name to walk along it.";
  }

  return {
    enter() {
      document.title = "Library — Once Upon an Again";
      select.value = taste;
      renderBookcase();
      renderNotes();
      renderResume();
      if (!isStatic()) focusHeading(qs("#library-title", root));
    },
  };
}

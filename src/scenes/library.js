/**
 * Act 2 — the hub. Left: an eight-cell bookcase (spine → book, cell → shelf)
 * holding only the books on the reader's shelf; a bay scrolls sideways when its
 * books don't fit. Right: Discover notes, filtered by the "Taste" select.
 */
import { qs, esc, focusHeading } from "../core/dom.js";
import { isStatic } from "../core/motion.js";
import { GENRES } from "../data/genres.js";
import { booksIn } from "../data/books.js";
import { isOnShelf, lastOpened } from "../core/store.js";
import { bindDragScroll } from "../core/dragscroll.js";
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
      const books = booksIn(g.id).filter(isOnShelf);
      return `
        <section class="cell" aria-labelledby="cell-${g.id}">
          <header class="cell__head">
            <a class="cell__link" id="cell-${g.id}" href="#/shelf/${g.id}">
              <span class="cell__no">${String(i + 1).padStart(2, "0")}</span>
              <span class="cell__name">${esc(g.name)}</span>
            </a>
            <span class="cell__count">${books.length} ${books.length === 1 ? "book" : "books"}</span>
          </header>
          ${books.length
            ? `<ul class="cell__books" aria-label="${esc(g.name)} — on your shelf">${books.map(renderSpine).join("")}</ul>`
            : `<p class="cell__empty">Nothing here yet — use Search to add a book.</p>`}
          <span class="cell__hint" aria-hidden="true">Open shelf →</span>
        </section>`;
    }).join("");
  }

  // Bays scroll sideways (trackpad, touch, or mouse drag); a soft fade marks the side with more books.
  function bindBays() {
    for (const bay of bookcase.querySelectorAll(".cell__books")) {
      bindDragScroll(bay);
      const edges = () => {
        const max = bay.scrollWidth - bay.clientWidth;
        bay.classList.toggle("has-more-right", bay.scrollLeft < max - 2);
        bay.classList.toggle("has-more-left", bay.scrollLeft > 2);
      };
      bay.addEventListener("scroll", edges, { passive: true });
      edges();
    }
  }

  // The gaps between spines still open the genre shelf, like the rest of the bay.
  bookcase.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.target.closest(".spine") || !event.target.closest(".cell__books")) return;
    event.target.closest(".cell").querySelector(".cell__link").click();
  });

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

  function render() {
    renderBookcase();
    bindBays();
    renderNotes();
    renderResume();
  }

  return {
    enter() {
      document.title = "Library — Once Upon an Again";
      select.value = taste;
      render();
      if (!isStatic()) focusHeading(qs("#library-title", root));
    },
    /** Shelf changed (e.g. a book added from Search): redraw in place, keep focus. */
    refresh: render,
  };
}

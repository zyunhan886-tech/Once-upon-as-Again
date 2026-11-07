/** Reader — page one of a book, as an open spread. */
import { qs, esc, focusHeading } from "../core/dom.js";
import { isStatic } from "../core/motion.js";
import { genreById } from "../data/genres.js";
import { bookById } from "../data/books.js";
import { readingOf, markOpened, setFinished } from "../core/store.js";
import { renderCover } from "../components/cover.js";

export function createReader({ root, back }) {
  let book = null;
  const el = (id) => qs(`#${id}`, root);
  const finishBtn = el("reader-finish");

  function renderStatus() {
    const r = readingOf(book);
    const done = r.state === "finished";
    el("reader-status").textContent = done ? "Finished — it stays on your shelf." : `On your shelf · ${Math.max(1, Math.round(r.progress * 100))}% read`;
    finishBtn.textContent = done ? "Mark as still reading" : "Mark as finished";
    finishBtn.setAttribute("aria-pressed", String(done));
  }

  finishBtn.addEventListener("click", () => {
    if (!book) return;
    setFinished(book, readingOf(book).state !== "finished");
    renderStatus();
  });
  qs('[data-action="back"]', root).addEventListener("click", () => back());

  return {
    canEnter: ({ id }) => Boolean(bookById[id]),
    enter({ id }) {
      book = bookById[id];
      const g = genreById[book.genre];
      markOpened(book); // reading page one puts the book on the rack
      document.title = `${book.title} — MendReading`;

      el("reader-cover").innerHTML = renderCover(book, { size: "sm" });
      el("reader-genre").textContent = `${g.name} · ${book.year}`;
      el("reader-title").textContent = book.title;
      el("reader-author").textContent = book.author;
      el("reader-quote").textContent = `“${book.quote}”`;
      el("reader-chapter").textContent = book.chapter;
      el("reader-text").innerHTML = book.text.map((p) => `<p>${esc(p)}</p>`).join("");
      const more = el("reader-more");
      more.href = `#/shelf/${g.id}`;
      more.textContent = `${g.name} shelf →`;
      renderStatus();

      if (!isStatic()) focusHeading(el("reader-title"));
    },
  };
}

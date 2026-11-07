/**
 * Reading progress store.
 * Seeded statuses come from data/books.js; anything the visitor does
 * (adding a book from Search, opening it, marking it finished) is layered on
 * top and saved in localStorage. Static capture links run with persistence off
 * so every capture shows exactly the seeded demo data.
 *
 * States: none      — in the catalogue only (find it in Search)
 *         shelved   — on the shelf, not started
 *         reading   — on the shelf, progress 0–1
 *         finished  — on the shelf, done
 * Every change dispatches "reading:change" on document so open scenes can redraw.
 */
import { BOOKS } from "../data/books.js";

const KEY = "onceuponanagain:reading:v1";
const NONE = Object.freeze({ state: "none", progress: 0 });

let saved = {};
let persist = true;

export function initStore({ useSaved }) {
  persist = useSaved;
  saved = {};
  if (!useSaved) return;
  try {
    saved = JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    saved = {};
  }
}

function write(book) {
  document.dispatchEvent(new CustomEvent("reading:change", { detail: { id: book && book.id } }));
  if (!persist) return;
  try {
    localStorage.setItem(KEY, JSON.stringify(saved));
  } catch {
    /* storage unavailable — progress lives for this visit only */
  }
}

export function readingOf(book) {
  return saved[book.id] || book.reading || NONE;
}

export const isOnShelf = (book) => readingOf(book).state !== "none";

/** Search → "Add to shelf": on the shelf, not started yet. */
export function addToShelf(book) {
  if (isOnShelf(book)) return;
  saved[book.id] = { state: "shelved", progress: 0, at: Date.now() };
  write(book);
}

/** Undo an add. Only a book nobody has started can go back to the catalogue. */
export function removeFromShelf(book) {
  if (readingOf(book).state !== "shelved") return;
  saved[book.id] = { state: "none", progress: 0 };
  write(book);
}

/** Opening a book puts it on the rack as "reading" (page one counts). */
export function markOpened(book) {
  const current = readingOf(book);
  const next = current.state === "none" || current.state === "shelved" ? { state: "reading", progress: 0.02 } : { ...current };
  saved[book.id] = { ...next, at: Date.now() };
  write(book);
}

export function setFinished(book, finished) {
  const prev = readingOf(book);
  saved[book.id] = finished
    ? { state: "finished", progress: 1, at: Date.now() }
    : { state: "reading", progress: prev.progress >= 1 ? 0.9 : prev.progress, at: Date.now() };
  write(book);
}

export function lastOpened() {
  let best = null;
  for (const book of BOOKS) {
    const r = saved[book.id];
    if (r && r.at && r.state !== "none" && (!best || r.at > best.at)) best = { book, at: r.at };
  }
  return best ? best.book : null;
}

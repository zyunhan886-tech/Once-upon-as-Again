/**
 * Reading progress store.
 * Seeded statuses come from data/books.js; anything the visitor does
 * (opening a book, marking it finished) is layered on top and saved in
 * localStorage. Static capture links run with persistence off so every
 * capture shows exactly the seeded demo data.
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

function write() {
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

export const isOnRack = (book) => readingOf(book).state !== "none";

/** Opening a book puts it on the rack as "reading" (page one counts). */
export function markOpened(book) {
  const current = readingOf(book);
  const next = current.state === "none" ? { state: "reading", progress: 0.02 } : { ...current };
  saved[book.id] = { ...next, at: Date.now() };
  write();
}

export function setFinished(book, finished) {
  const prev = readingOf(book);
  saved[book.id] = finished
    ? { state: "finished", progress: 1, at: Date.now() }
    : { state: "reading", progress: prev.progress >= 1 ? 0.9 : prev.progress, at: Date.now() };
  write();
}

export function lastOpened() {
  let best = null;
  for (const book of BOOKS) {
    const r = saved[book.id];
    if (r && r.at && (!best || r.at > best.at)) best = { book, at: r.at };
  }
  return best ? best.book : null;
}

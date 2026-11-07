# UX - Once Upon an Again

A reading-habit app in two acts. Pure HTML, CSS and native ES modules: no npm, no build step.

```bash
python3 -m http.server 8000      # then open http://localhost:8000/
```
> ES modules need a server; opening `index.html` via `file://` will not work.

## Scenes and routes

| Route            | Scene     | What it is |
|------------------|-----------|------------|
| `#/`             | intro     | **Act 1.** The closed book turns open, the question appears, then "Open my bookshelf" |
| `#/library`      | library   | **Act 2 (main hub).** Left: an 8-bay wooden bookcase with the books on your shelf (a bay scrolls sideways when it's full). Right: Discover notes + Taste select |
| `#/shelf/:genre` | shelf     | One genre: the huge genre title above a scrollable row of 3D books on your shelf, plus genre tabs |
| `#/book/:id`     | reader    | Page one of a book: open spread, "Mark as finished" |
| *(dialog)*       | search    | **Search** (the field beside "Discover" on the library, or `/`, ⌘K / Ctrl+K on any Act 2 page): find any book in the catalogue by title, author, genre or year and **Add to shelf** |

Ways in: spine → book · bookcase cell / shelf name → genre shelf · note → book · tabs → other genre · search → add, or open page one.

**The catalogue and your shelf.** `src/data/books.js` holds 42 books. 26 start on the shelf (seeded as reading or finished); 16 are in the
catalogue only and are found through Search. A book's state is `none` (catalogue only) → `shelved` (added, not started) → `reading` → `finished`.
Opening a book's first page counts as starting it. "Undo" in Search takes back a book that was added but not started.
Everything the visitor does is saved in `localStorage`; any change fires `reading:change` and the open scene redraws in place.

## Capture links (frozen, never auto-advance, always seeded demo data)

```
?state=closed   ?state=opening   ?state=open   ?state=bookshelf
?state=shelf&genre=scifi          ?state=reader&book=time-machine
?state=search                     ?state=search&q=austen        (library with Search open)
```
Genre ids: `scifi fantasy mystery romance historical horror adventure literary`

## Code layout

```
index.html                 semantic shell; one <section data-scene-root> per scene
styles.css                 CSS entry: @imports in cascade order
app.js                     JS entry: store → scenes → router, capture links

src/
  core/
    router.js              hash router (#/…), history depth for "Back", refresh() on data change
    store.js               reading status (none / shelved / reading / finished): seeded data + localStorage; fires reading:change
    dragscroll.js          mouse-drag scrolling for horizontal scrollers (rack, bookcase bays)
    motion.js              reduced-motion timing, static-capture flag, timelines
    dom.js                 qs / esc / hash helpers
  data/
    genres.js              8 genres: name, tagline, accent, note tint
    books.js               42 public-domain books: real cover, quote, chapter, page-one text; seeded status for the 26 on the shelf
  components/              pure functions: data → HTML string
    cover.js               the book's real cover image (no generated art)
    spine.js               bookcase spine
    book3d.js              six-face 3D book for the rack
    note.js                taped Discover note
    rack.js                genre-shelf row: native horizontal scroll + mouse drag, wheel, ←/→ paging, centred-book caption
    search.js              Search dialog: accent-insensitive catalogue search, Add to shelf / Undo
  scenes/                  each exports create*(deps) → { enter(params, ctx), leave?, canEnter?, refresh? }
    intro.js  library.js  shelf.js  reader.js

styles/
  tokens.css               :root colour / radius / type / geometry / motion tokens
  base.css                 reset, type primitives, scene switching (html[data-scene])
  components/              controls, masthead, cover-art, spine, book3d, note, search
  scenes/                  intro, library, shelf, reader
  motion.css               is-static freeze + prefers-reduced-motion (loaded last)
```

State lives on `<html>`: `data-scene` picks the visible scene; `data-intro` holds the Act 1 phase
(`closed | opening | open | closing`); `.is-static` freezes motion for capture links.

**Adding a book:** only books with a real cover are listed; covers and opening pages come from Standard Ebooks (standardebooks.org — the cover is `…/downloads/cover.jpg`, the text is `…/text/single-page`). Put a 2:3 JPEG at `assets/covers/<book-id>.jpg` (≈480×720; originals live in `cover/`), then append the book to `src/data/books.js` with a `genre` id and `cover: { src, tone }` (add `reading: { state, progress }` to seed it onto the shelf; leave it out to keep it in the catalogue for Search) — `tone` is the image's average colour, darkened, used for the 3D book sides. Its spine (a slice of the cover art), note and reader page follow automatically.
**Adding a genre:** add it to `src/data/genres.js` and add an icon in `src/components/note.js`.

## Credits

| Asset | Source | Licence |
|---|---|---|
| Book covers (`cover/`, `assets/covers/`) | [Standard Ebooks](https://standardebooks.org) — each book's `…/downloads/cover.jpg` (public-domain paintings, cover design by Standard Ebooks) | CC0 / public domain |
| Opening pages and quotes (`src/data/books.js`) | Public-domain texts; the 23 books added later (7 science fiction + the 16 catalogue books) were taken verbatim from Standard Ebooks' `…/text/single-page`; openings over ~1,000 characters are cut at a sentence and end with “…” | Public domain |
| Wood texture (`assets/textures/dark-wood.jpg`, and `dark-wood-vertical.jpg`, the same image rotated 90°) | ["Dark Wood"](https://polyhaven.com/a/dark_wood) by Dario Barresi, Dimitrios Savva and Rico Cilliers, Poly Haven — a photographed, scanned material | CC0 |

The bookcase itself is not an image: it is built in CSS (`styles/scenes/library.css`) on top of the photographed wood texture.

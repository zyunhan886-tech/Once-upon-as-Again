# MendReading

A reading-habit app in two acts. Pure HTML, CSS and native ES modules: no npm, no build step.

```bash
python3 -m http.server 8000      # then open http://localhost:8000/
```
> ES modules need a server; opening `index.html` via `file://` will not work.

## Scenes and routes

| Route            | Scene     | What it is |
|------------------|-----------|------------|
| `#/`             | intro     | **Act 1.** The closed book turns open, the question appears, then "Open my bookshelf" |
| `#/library`      | library   | **Act 2 (main hub).** Left: 8-cell bookcase. Right: Discover notes + Taste select |
| `#/shelf/:genre` | shelf     | One genre: the huge genre title behind a 3D rack of the books you're reading or have finished, plus unopened books and genre tabs |
| `#/book/:id`     | reader    | Page one of a book: open spread, "Mark as finished" |

Ways in: spine → book · bookcase cell / shelf name → genre shelf · note → book · tabs → other genre.
Opening a book adds it to its genre's rack; progress is saved in `localStorage`.

## Capture links (frozen, never auto-advance, always seeded demo data)

```
?state=closed   ?state=opening   ?state=open   ?state=bookshelf
?state=shelf&genre=scifi          ?state=reader&book=time-machine
```
Genre ids: `scifi fantasy mystery romance historical horror adventure literary`

## Code layout

```
index.html                 semantic shell; one <section data-scene-root> per scene
styles.css                 CSS entry: @imports in cascade order
app.js                     JS entry: store → scenes → router, capture links

src/
  core/
    router.js              hash router (#/…), history depth for "Back"
    store.js               reading status: seeded data + localStorage overrides
    motion.js              reduced-motion timing, static-capture flag, timelines
    dom.js                 qs / esc / hash helpers
  data/
    genres.js              8 genres: name, tagline, cover palette, note tint
    books.js               32 public-domain books: quote, chapter, page-one text, seeded status
  components/              pure functions: data → HTML string
    cover.js               generated cover art (SVG motif per genre + real-text title)
    spine.js               bookcase spine
    book3d.js              six-face 3D book for the rack
    note.js                taped Discover note
  scenes/                  each exports create*(deps) → { enter(params, ctx), leave?, canEnter? }
    intro.js  library.js  shelf.js  reader.js

styles/
  tokens.css               :root colour / radius / type / geometry / motion tokens
  base.css                 reset, type primitives, scene switching (html[data-scene])
  components/              controls, masthead, cover-art, spine, book3d, note
  scenes/                  intro, library, shelf, reader
  motion.css               is-static freeze + prefers-reduced-motion (loaded last)
```

State lives on `<html>`: `data-scene` picks the visible scene; `data-intro` holds the Act 1 phase
(`closed | opening | open | closing`); `.is-static` freezes motion for capture links.

**Adding a book:** append it to `src/data/books.js` with a `genre` id. Its cover, spine, note and reader page are generated automatically.
**Adding a genre:** add it to `src/data/genres.js` and add a motif in `src/components/cover.js` plus an icon in `src/components/note.js`.
# UX-MendReading

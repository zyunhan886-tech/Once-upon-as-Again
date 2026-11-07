/**
 * Generated cover art: an abstract print in the genre's palette, plus the
 * title and author as real HTML text. Same book → same cover, always.
 */
import { esc, hashOf } from "../core/dom.js";
import { genreById } from "../data/genres.js";

/* Each motif draws into a 100×150 viewBox. v ∈ 0..3 varies the composition. */
const MOTIFS = {
  scifi(v) {
    const cx = 32 + v * 12, cy = 92 - v * 6;
    return `
      <circle class="m-acc" cx="${cx}" cy="${cy}" r="${17 + v * 2}"/>
      <ellipse class="m-line" cx="${cx}" cy="${cy}" rx="38" ry="8" transform="rotate(-16 ${cx} ${cy})"/>
      <circle class="m-dot" cx="80" cy="70" r="1.3"/><circle class="m-dot" cx="16" cy="128" r="1"/>
      <circle class="m-dot" cx="88" cy="132" r="0.8"/><circle class="m-dot" cx="58" cy="138" r="0.9"/>`;
  },
  fantasy(v) {
    const mx = 68 - v * 9;
    let trees = "";
    for (let i = 0; i < 8; i++) {
      const x = i * 14 - 4 + ((v * 5) % 9);
      const peak = 96 + ((i * 37 + v * 11) % 24);
      trees += `<path class="m-deep" d="M${x} 150 L${x + 9} ${peak} L${x + 18} 150Z"/>`;
    }
    return `<circle class="m-acc" cx="${mx}" cy="70" r="15"/><circle class="m-bg" cx="${mx + 6}" cy="66" r="13"/>${trees}`;
  },
  mystery(v) {
    const x = 32 + (v - 1.5) * 6;
    let rain = "";
    for (let i = 0; i < 12; i++) rain += `<line class="m-thin" x1="${6 + i * 8}" y1="60" x2="${2 + i * 8}" y2="${100 + ((i * 29 + v * 7) % 50)}"/>`;
    return `${rain}<path class="m-line" d="M${x} 150 V102 a18 18 0 0 1 36 0 V150"/>
      <circle class="m-acc" cx="${x + 18}" cy="120" r="3.6"/><path class="m-acc" d="M${x + 16.2} 121 h3.6 l1.4 9 h-6.4z"/>`;
  },
  romance(v) {
    const y = 96 - v * 3;
    return `<circle class="m-acc" cx="${40 + v * 2}" cy="${y}" r="20"/>
      <circle class="m-line" cx="${61 + v * 2}" cy="${y}" r="20"/>
      <line class="m-line" x1="14" y1="134" x2="86" y2="134"/>`;
  },
  historical(v) {
    let cols = "";
    for (let i = 0; i < 4; i++) cols += `<rect class="m-soft" x="${23 + i * 16}" y="100" width="6" height="38"/>`;
    return `<circle class="m-acc" cx="${50 + (v - 1.5) * 14}" cy="66" r="9"/>
      <path class="m-line" d="M16 98 L50 78 L84 98 Z"/>${cols}
      <line class="m-line" x1="12" y1="140" x2="88" y2="140"/>`;
  },
  horror(v) {
    const hx = 50 + (v - 1.5) * 8;
    return `<circle class="m-line" cx="${hx + 26}" cy="64" r="9"/>
      <path class="m-deep-strong" d="M${hx - 22} 150 V112 L${hx} 92 L${hx + 22} 112 V150Z"/>
      <rect class="m-acc" x="${hx - 3}" y="118" width="6" height="9"/>
      <path class="m-thin" d="M${hx - 34} 150 C ${hx - 36} 128, ${hx - 30} 112, ${hx - 40} 98 M${hx - 35} 120 l -8 -6"/>
      <line class="m-line" x1="0" y1="150" x2="100" y2="150"/>`;
  },
  adventure(v) {
    const sx = 48 + (v - 1.5) * 10;
    const waves = [110, 121, 132, 143]
      .map((y) => `<path class="m-line" d="M-6 ${y} q 9 -5 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0"/>`)
      .join("");
    return `<path class="m-acc" d="M${sx - 18} 102 a18 18 0 0 1 36 0 Z"/>
      <line class="m-line" x1="0" y1="102" x2="100" y2="102"/>${waves}
      <path class="m-ink" d="M${24 + v * 3} 100 l 0 -16 l 9 16 z"/>`;
  },
  literary(v) {
    let grass = "";
    for (let i = 0; i < 18; i++) grass += `<line class="m-thin" x1="${8 + i * 5}" y1="150" x2="${7 + i * 5 + (i % 3)}" y2="${128 + ((i * 13 + v * 5) % 14)}"/>`;
    return `<circle class="m-acc" cx="${70 - v * 10}" cy="98" r="7"/>
      <line class="m-line" x1="10" y1="118" x2="90" y2="118"/>${grass}`;
  },
};

export function paletteFor(book) {
  const g = genreById[book.genre];
  const v = hashOf(book.id) % 4;
  return { v, bg: g.palette.bg[v % 2], ink: g.palette.ink, accent: g.palette.accent };
}

export function coverStyle(book) {
  const p = paletteFor(book);
  return `--c-bg:${p.bg};--c-ink:${p.ink};--c-acc:${p.accent}`;
}

/** Cover markup. `size` only changes the type scale via a modifier class. */
export function renderCover(book, { size = "md" } = {}) {
  const p = paletteFor(book);
  const art = MOTIFS[book.genre](p.v);
  return `
    <span class="cover-art cover-art--${size}" style="${coverStyle(book)}">
      <svg class="cover-art__img" viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${art}</svg>
      <span class="cover-art__title">${esc(book.title)}</span>
      <span class="cover-art__author">${esc(book.author)}</span>
    </span>`;
}

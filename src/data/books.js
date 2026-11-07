/**
 * Sample library — all public-domain works, so the first page can be shown in full.
 * Only books with a real cover image belong here: no placeholder art.
 *
 *   quote    → the line shown on a Discover note
 *   chapter  → heading on the reader's right page
 *   text     → the opening paragraph(s): "page one"
 *   cover    → real cover image (required) + its average tone (3D sides, spine fallback)
 *   reading  → seeded reading status for the demo (store.js may override it)
 */
export const BOOKS = [
  /* ── Science Fiction ───────────────────────────── */
  {
    id: "time-machine", genre: "scifi", title: "The Time Machine", author: "H. G. Wells", year: 1895,
    cover: { src: "assets/covers/time-machine.jpg", tone: "#34302b" },
    chapter: "Chapter I · Introduction",
    quote: "It is a law of nature we overlook, that intellectual versatility is the compensation for change, danger, and trouble.",
    text: ["The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses."],
    reading: { state: "reading", progress: 0.42 },
  },
  {
    id: "frankenstein", genre: "scifi", title: "Frankenstein", author: "Mary Shelley", year: 1818,
    cover: { src: "assets/covers/frankenstein.jpg", tone: "#3f221e" },
    chapter: "Letter I · To Mrs. Saville, England",
    quote: "Beware; for I am fearless, and therefore powerful.",
    text: [
      "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.",
      "I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight.",
    ],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "war-of-the-worlds", genre: "scifi", title: "The War of the Worlds", author: "H. G. Wells", year: 1898,
    cover: { src: "assets/covers/war-of-the-worlds.jpg", tone: "#503f25" },
    chapter: "Book I · The Eve of the War",
    quote: "This world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own.",
    text: ["No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own; that as men busied themselves about their various concerns they were scrutinised and studied, perhaps almost as narrowly as a man with a microscope might scrutinise the transient creatures that swarm and multiply in a drop of water."],
    reading: { state: "reading", progress: 0.18 },
  },

  /* ── Fantasy ────────────────────────────────────── */
  {
    id: "alice", genre: "fantasy", title: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", year: 1865,
    cover: { src: "assets/covers/alice.jpg", tone: "#473a2a" },
    chapter: "Chapter I · Down the Rabbit-Hole",
    quote: "It’s no use going back to yesterday, because I was a different person then.",
    text: ["Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”"],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "wizard-of-oz", genre: "fantasy", title: "The Wonderful Wizard of Oz", author: "L. Frank Baum", year: 1900,
    cover: { src: "assets/covers/wizard-of-oz.jpg", tone: "#6b655e" },
    chapter: "Chapter I · The Cyclone",
    quote: "There is no place like home.",
    text: ["Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer’s wife. Their house was small, for the lumber to build it had to be carried by wagon many miles."],
    reading: { state: "reading", progress: 0.63 },
  },
  {
    id: "peter-pan", genre: "fantasy", title: "Peter Pan", author: "J. M. Barrie", year: 1911,
    cover: { src: "assets/covers/peter-pan.jpg", tone: "#4c5143" },
    chapter: "Chapter I · Peter Breaks Through",
    quote: "To die will be an awfully big adventure.",
    text: ["All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this."],
    reading: { state: "reading", progress: 0.12 },
  },

  /* ── Mystery & Thriller ─────────────────────────── */
  {
    id: "hound", genre: "mystery", title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", year: 1902,
    cover: { src: "assets/covers/hound.jpg", tone: "#726962" },
    chapter: "Chapter I · Mr. Sherlock Holmes",
    quote: "The world is full of obvious things which nobody by any chance ever observes.",
    text: [
      "Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table. I stood upon the hearth-rug and picked up the stick which our visitor had left behind him the night before.",
      "It was a fine, thick piece of wood, bulbous-headed, of the sort which is known as a “Penang lawyer.”",
    ],
    reading: { state: "reading", progress: 0.55 },
  },
  {
    id: "study-in-scarlet", genre: "mystery", title: "A Study in Scarlet", author: "Arthur Conan Doyle", year: 1887,
    cover: { src: "assets/covers/study-in-scarlet.jpg", tone: "#494740" },
    chapter: "Part I · Chapter I · Mr. Sherlock Holmes",
    quote: "It is a capital mistake to theorize before you have all the evidence. It biases the judgment.",
    text: ["In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to Netley to go through the course prescribed for surgeons in the army."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "sign-of-four", genre: "mystery", title: "The Sign of the Four", author: "Arthur Conan Doyle", year: 1890,
    cover: { src: "assets/covers/sign-of-four.jpg", tone: "#5d5e59" },
    chapter: "Chapter I · The Science of Deduction",
    quote: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    text: ["Sherlock Holmes took his bottle from the corner of the mantel-piece, and his hypodermic syringe from its neat morocco case. With his long, white, nervous fingers he adjusted the delicate needle, and rolled back his left shirt-cuff."],
    reading: { state: "finished", progress: 1 },
  },

  /* ── Romance ────────────────────────────────────── */
  {
    id: "pride-and-prejudice", genre: "romance", title: "Pride and Prejudice", author: "Jane Austen", year: 1813,
    cover: { src: "assets/covers/pride-and-prejudice.jpg", tone: "#4f442f" },
    chapter: "Chapter I",
    quote: "I declare after all there is no enjoyment like reading!",
    text: [
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.",
    ],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "jane-eyre", genre: "romance", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847,
    cover: { src: "assets/covers/jane-eyre.jpg", tone: "#292b29" },
    chapter: "Chapter I",
    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    text: ["There was no possibility of taking a walk that day."],
    reading: { state: "reading", progress: 0.71 },
  },

  /* ── Historical Fiction ─────────────────────────── */
  {
    id: "tale-of-two-cities", genre: "historical", title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859,
    cover: { src: "assets/covers/tale-of-two-cities.jpg", tone: "#322d27" },
    chapter: "Book I · Chapter I · The Period",
    quote: "It is a far, far better thing that I do, than I have ever done.",
    text: ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."],
    reading: { state: "reading", progress: 0.34 },
  },

  /* ── Horror ─────────────────────────────────────── */
  {
    id: "dracula", genre: "horror", title: "Dracula", author: "Bram Stoker", year: 1897,
    cover: { src: "assets/covers/dracula.jpg", tone: "#292a29" },
    chapter: "Chapter I · Jonathan Harker’s Journal",
    quote: "We learn from failure, not from success!",
    text: ["3 May. Bistritz.—Left Munich at 8:35 P. M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late."],
    reading: { state: "reading", progress: 0.48 },
  },

  /* ── Adventure ──────────────────────────────────── */
  {
    id: "treasure-island", genre: "adventure", title: "Treasure Island", author: "Robert Louis Stevenson", year: 1883,
    cover: { src: "assets/covers/treasure-island.jpg", tone: "#685e59" },
    chapter: "Part I · Chapter I · The Old Sea-dog at the “Admiral Benbow”",
    quote: "Fifteen men on the dead man’s chest— Yo-ho-ho, and a bottle of rum!",
    text: ["Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace 17— and go back to the time when my father kept the “Admiral Benbow” inn."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "robinson-crusoe", genre: "adventure", title: "Robinson Crusoe", author: "Daniel Defoe", year: 1719,
    cover: { src: "assets/covers/robinson-crusoe.jpg", tone: "#635d51" },
    chapter: "Chapter I · Start in Life",
    quote: "Thus fear of danger is ten thousand times more terrifying than danger itself.",
    text: ["I was born in the year 1632, in the city of York, of a good family, though not of that country, my father being a foreigner of Bremen, who settled first at Hull."],
    reading: { state: "reading", progress: 0.38 },
  },
  {
    id: "around-the-world", genre: "adventure", title: "Around the World in Eighty Days", author: "Jules Verne", year: 1872,
    cover: { src: "assets/covers/around-the-world.jpg", tone: "#474c40" },
    chapter: "Chapter I",
    quote: "Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens.",
    text: ["Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens, the house in which Sheridan died in 1814."],
    reading: { state: "reading", progress: 0.82 },
  },

  /* ── Literary Fiction ───────────────────────────── */
  {
    id: "gatsby", genre: "literary", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925,
    cover: { src: "assets/covers/gatsby.jpg", tone: "#0c3548" },
    chapter: "Chapter I",
    quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    text: [
      "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.",
      "“Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”",
    ],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "moby-dick", genre: "literary", title: "Moby-Dick", author: "Herman Melville", year: 1851,
    cover: { src: "assets/covers/moby-dick.jpg", tone: "#4c462a" },
    chapter: "Chapter I · Loomings",
    quote: "It is not down in any map; true places never are.",
    text: ["Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation."],
    reading: { state: "reading", progress: 0.21 },
  },
  {
    id: "dorian-gray", genre: "literary", title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890,
    cover: { src: "assets/covers/dorian-gray.jpg", tone: "#453a2a" },
    chapter: "Chapter I",
    quote: "The only way to get rid of a temptation is to yield to it.",
    text: ["The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn."],
    reading: { state: "reading", progress: 0.57 },
  },
];

export const bookById = Object.fromEntries(BOOKS.map((b) => [b.id, b]));
export const booksIn = (genreId) => BOOKS.filter((b) => b.genre === genreId);

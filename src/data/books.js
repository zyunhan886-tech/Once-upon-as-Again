/**
 * Sample library — all public-domain works, so the first page can be shown in full.
 *
 *   quote    → the line shown on a Discover note
 *   chapter  → heading on the reader's right page
 *   text     → the opening paragraph(s): "page one"
 *   reading  → seeded reading status for the demo (store.js may override it)
 */
export const BOOKS = [
  /* ── Science Fiction ───────────────────────────── */
  {
    id: "time-machine", genre: "scifi", title: "The Time Machine", author: "H. G. Wells", year: 1895,
    chapter: "Chapter I · Introduction",
    quote: "It is a law of nature we overlook, that intellectual versatility is the compensation for change, danger, and trouble.",
    text: ["The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses."],
    reading: { state: "reading", progress: 0.42 },
  },
  {
    id: "frankenstein", genre: "scifi", title: "Frankenstein", author: "Mary Shelley", year: 1818,
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
    chapter: "Book I · The Eve of the War",
    quote: "This world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own.",
    text: ["No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own; that as men busied themselves about their various concerns they were scrutinised and studied, perhaps almost as narrowly as a man with a microscope might scrutinise the transient creatures that swarm and multiply in a drop of water."],
    reading: { state: "reading", progress: 0.18 },
  },
  {
    id: "twenty-thousand-leagues", genre: "scifi", title: "Twenty Thousand Leagues Under the Sea", author: "Jules Verne", year: 1870,
    chapter: "Part I · Chapter I · A Shifting Reef",
    quote: "The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon.",
    text: ["The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon, which doubtless no one has yet forgotten."],
  },

  /* ── Fantasy ───────────────────────────────────── */
  {
    id: "alice", genre: "fantasy", title: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", year: 1865,
    chapter: "Chapter I · Down the Rabbit-Hole",
    quote: "It’s no use going back to yesterday, because I was a different person then.",
    text: ["Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”"],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "wizard-of-oz", genre: "fantasy", title: "The Wonderful Wizard of Oz", author: "L. Frank Baum", year: 1900,
    chapter: "Chapter I · The Cyclone",
    quote: "There is no place like home.",
    text: ["Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer’s wife. Their house was small, for the lumber to build it had to be carried by wagon many miles."],
    reading: { state: "reading", progress: 0.63 },
  },
  {
    id: "peter-pan", genre: "fantasy", title: "Peter Pan", author: "J. M. Barrie", year: 1911,
    chapter: "Chapter I · Peter Breaks Through",
    quote: "To die will be an awfully big adventure.",
    text: ["All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this."],
  },
  {
    id: "wind-in-the-willows", genre: "fantasy", title: "The Wind in the Willows", author: "Kenneth Grahame", year: 1908,
    chapter: "Chapter I · The River Bank",
    quote: "There is nothing—absolutely nothing—half so much worth doing as simply messing about in boats.",
    text: ["The Mole had been working very hard all the morning, spring-cleaning his little home."],
    reading: { state: "reading", progress: 0.27 },
  },

  /* ── Mystery & Thriller ────────────────────────── */
  {
    id: "hound", genre: "mystery", title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", year: 1902,
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
    chapter: "Part I · Chapter I · Mr. Sherlock Holmes",
    quote: "It is a capital mistake to theorize before you have all the evidence. It biases the judgment.",
    text: ["In the year 1878 I took my degree of Doctor of Medicine of the University of London, and proceeded to Netley to go through the course prescribed for surgeons in the army."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "sign-of-four", genre: "mystery", title: "The Sign of the Four", author: "Arthur Conan Doyle", year: 1890,
    chapter: "Chapter I · The Science of Deduction",
    quote: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    text: ["Sherlock Holmes took his bottle from the corner of the mantel-piece, and his hypodermic syringe from its neat morocco case. With his long, white, nervous fingers he adjusted the delicate needle, and rolled back his left shirt-cuff."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "thirty-nine-steps", genre: "mystery", title: "The Thirty-Nine Steps", author: "John Buchan", year: 1915,
    chapter: "Chapter I · The Man Who Died",
    quote: "I returned from the City about three o’clock on that May afternoon pretty well disgusted with life.",
    text: ["I returned from the City about three o’clock on that May afternoon pretty well disgusted with life."],
  },

  /* ── Romance ───────────────────────────────────── */
  {
    id: "pride-and-prejudice", genre: "romance", title: "Pride and Prejudice", author: "Jane Austen", year: 1813,
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
    chapter: "Chapter I",
    quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    text: ["There was no possibility of taking a walk that day."],
    reading: { state: "reading", progress: 0.71 },
  },
  {
    id: "persuasion", genre: "romance", title: "Persuasion", author: "Jane Austen", year: 1817,
    chapter: "Chapter I",
    quote: "You pierce my soul. I am half agony, half hope.",
    text: ["Sir Walter Elliot, of Kellynch Hall, in Somersetshire, was a man who, for his own amusement, never took up any book but the Baronetage."],
  },
  {
    id: "sense-and-sensibility", genre: "romance", title: "Sense and Sensibility", author: "Jane Austen", year: 1811,
    chapter: "Chapter I",
    quote: "The more I know of the world, the more am I convinced that I shall never see a man whom I can really love.",
    text: ["The family of Dashwood had long been settled in Sussex. Their estate was large, and their residence was at Norland Park, in the centre of their property, where, for many generations, they had lived in so respectable a manner as to engage the general good opinion of their surrounding acquaintance."],
    reading: { state: "reading", progress: 0.09 },
  },

  /* ── Historical Fiction ────────────────────────── */
  {
    id: "tale-of-two-cities", genre: "historical", title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859,
    chapter: "Book I · Chapter I · The Period",
    quote: "It is a far, far better thing that I do, than I have ever done.",
    text: ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."],
    reading: { state: "reading", progress: 0.34 },
  },
  {
    id: "scarlet-letter", genre: "historical", title: "The Scarlet Letter", author: "Nathaniel Hawthorne", year: 1850,
    chapter: "Chapter I · The Prison-Door",
    quote: "No man, for any considerable period, can wear one face to himself and another to the multitude.",
    text: ["A throng of bearded men, in sad-coloured garments and grey steeple-crowned hats, intermixed with women, some wearing hoods, and others bareheaded, was assembled in front of a wooden edifice, the door of which was heavily timbered with oak, and studded with iron spikes."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "three-musketeers", genre: "historical", title: "The Three Musketeers", author: "Alexandre Dumas", year: 1844,
    chapter: "Chapter I · The Three Presents of D’Artagnan the Elder",
    quote: "All for one, one for all, that is our device.",
    text: ["On the first Monday of the month of April, 1625, the market town of Meung, in which the author of Romance of the Rose was born, appeared to be in as perfect a state of revolution as if the Huguenots had just made a second La Rochelle of it."],
  },
  {
    id: "ivanhoe", genre: "historical", title: "Ivanhoe", author: "Walter Scott", year: 1819,
    chapter: "Chapter I",
    quote: "In that pleasant district of merry England which is watered by the river Don, there extended in ancient times a large forest.",
    text: ["In that pleasant district of merry England which is watered by the river Don, there extended in ancient times a large forest, covering the greater part of the beautiful hills and valleys which lie between Sheffield and the pleasant town of Doncaster."],
  },

  /* ── Horror ────────────────────────────────────── */
  {
    id: "dracula", genre: "horror", title: "Dracula", author: "Bram Stoker", year: 1897,
    chapter: "Chapter I · Jonathan Harker’s Journal",
    quote: "We learn from failure, not from success!",
    text: ["3 May. Bistritz.—Left Munich at 8:35 P. M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late."],
    reading: { state: "reading", progress: 0.48 },
  },
  {
    id: "jekyll-and-hyde", genre: "horror", title: "Strange Case of Dr Jekyll and Mr Hyde", author: "Robert Louis Stevenson", year: 1886,
    chapter: "Story of the Door",
    quote: "Man is not truly one, but truly two.",
    text: ["Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "house-of-usher", genre: "horror", title: "The Fall of the House of Usher", author: "Edgar Allan Poe", year: 1839,
    chapter: "A Tale",
    quote: "During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens…",
    text: ["During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country; and at length found myself, as the shades of the evening drew on, within view of the melancholy House of Usher."],
  },
  {
    id: "turn-of-the-screw", genre: "horror", title: "The Turn of the Screw", author: "Henry James", year: 1898,
    chapter: "Prologue",
    quote: "The story had held us, round the fire, sufficiently breathless.",
    text: ["The story had held us, round the fire, sufficiently breathless, but except the obvious remark that it was gruesome, as, on Christmas Eve in an old house, a strange tale should essentially be, I remember no comment uttered till somebody happened to say that it was the only case he had met in which such a visitation had fallen on a child."],
    reading: { state: "reading", progress: 0.15 },
  },

  /* ── Adventure ─────────────────────────────────── */
  {
    id: "treasure-island", genre: "adventure", title: "Treasure Island", author: "Robert Louis Stevenson", year: 1883,
    chapter: "Part I · Chapter I · The Old Sea-dog at the “Admiral Benbow”",
    quote: "Fifteen men on the dead man’s chest— Yo-ho-ho, and a bottle of rum!",
    text: ["Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace 17— and go back to the time when my father kept the “Admiral Benbow” inn."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "robinson-crusoe", genre: "adventure", title: "Robinson Crusoe", author: "Daniel Defoe", year: 1719,
    chapter: "Chapter I · Start in Life",
    quote: "Thus fear of danger is ten thousand times more terrifying than danger itself.",
    text: ["I was born in the year 1632, in the city of York, of a good family, though not of that country, my father being a foreigner of Bremen, who settled first at Hull."],
    reading: { state: "reading", progress: 0.38 },
  },
  {
    id: "around-the-world", genre: "adventure", title: "Around the World in Eighty Days", author: "Jules Verne", year: 1872,
    chapter: "Chapter I",
    quote: "Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens.",
    text: ["Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens, the house in which Sheridan died in 1814."],
    reading: { state: "reading", progress: 0.82 },
  },
  {
    id: "call-of-the-wild", genre: "adventure", title: "The Call of the Wild", author: "Jack London", year: 1903,
    chapter: "Chapter I · Into the Primitive",
    quote: "Buck did not read the newspapers, or he would have known that trouble was brewing.",
    text: ["Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego."],
  },

  /* ── Literary Fiction ──────────────────────────── */
  {
    id: "gatsby", genre: "literary", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925,
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
    chapter: "Chapter I · Loomings",
    quote: "It is not down in any map; true places never are.",
    text: ["Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation."],
    reading: { state: "reading", progress: 0.21 },
  },
  {
    id: "dorian-gray", genre: "literary", title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890,
    chapter: "Chapter I",
    quote: "The only way to get rid of a temptation is to yield to it.",
    text: ["The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn."],
    reading: { state: "reading", progress: 0.57 },
  },
  {
    id: "little-women", genre: "literary", title: "Little Women", author: "Louisa May Alcott", year: 1868,
    chapter: "Chapter I · Playing Pilgrims",
    quote: "I’m not afraid of storms, for I’m learning how to sail my ship.",
    text: ["“Christmas won’t be Christmas without any presents,” grumbled Jo, lying on the rug."],
  },
];

export const bookById = Object.fromEntries(BOOKS.map((b) => [b.id, b]));
export const booksIn = (genreId) => BOOKS.filter((b) => b.genre === genreId);

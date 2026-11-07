/**
 * Sample library — all public-domain works, so the first page can be shown in full.
 * Only books with a real cover image belong here: no placeholder art.
 * A book without `reading` is in the catalogue but not on the reader's shelf yet —
 * it shows up in Search (src/components/search.js) until it is added.
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

  {
    id: "invisible-man", genre: "scifi", title: "The Invisible Man", author: "H. G. Wells", year: 1897,
    cover: { src: "assets/covers/invisible-man.jpg", tone: "#6e716c" },
    chapter: "Chapter I · The Strange Man’s Arrival",
    quote: "An invisible man is a man of power.",
    text: ["The stranger came early in February, one wintry day, through a biting wind and a driving snow, the last snowfall of the year, over the down, walking from Bramblehurst railway station, and carrying a little black portmanteau in his thickly gloved hand. He was wrapped up from head to foot, and the brim of his soft felt hat hid every inch of his face but the shiny tip of his nose; the snow had piled itself against his shoulders and chest, and added a white crest to the burden he carried. He staggered into the Coach and Horses more dead than alive, and flung his portmanteau down. “A fire,” he cried, “in the name of human charity! A room and a fire!” He stamped and shook the snow from off himself in the bar, and followed Mrs. Hall into her guest parlour to strike his bargain. And with that much introduction, that and a couple of sovereigns flung upon the table, he took up his quarters in the inn."],
    reading: { state: "reading", progress: 0.65 },
  },
  {
    id: "doctor-moreau", genre: "scifi", title: "The Island of Doctor Moreau", author: "H. G. Wells", year: 1896,
    cover: { src: "assets/covers/doctor-moreau.jpg", tone: "#545b59" },
    chapter: "Chapter I · In the Dingey of the Lady Vain",
    quote: "The study of nature makes a man at last as remorseless as nature.",
    text: ["I do not propose to add anything to what has already been written concerning the loss of the Lady Vain. As everyone knows, she collided with a derelict when ten days out from Callao. The longboat, with seven of the crew, was picked up eighteen days after by H.M. gunboat Myrtle, and the story of their terrible privations has become quite as well known as the far more horrible Medusa case. But I have to add to the published story of the Lady Vain another, possibly as horrible and far stranger. It has hitherto been supposed that the four men who were in the dingey perished, but this is incorrect. I have the best of evidence for this assertion: I was one of the four men."],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "first-men-in-the-moon", genre: "scifi", title: "The First Men in the Moon", author: "H. G. Wells", year: 1901,
    cover: { src: "assets/covers/first-men-in-the-moon.jpg", tone: "#272e32" },
    chapter: "Chapter I · Mr. Bedford Meets Mr. Cavor at Lympne",
    quote: "So utterly at variance is Destiny with all the little plans of men.",
    text: ["As I sit down to write here amidst the shadows of vine-leaves under the blue sky of southern Italy, it comes to me with a certain quality of astonishment that my participation in these amazing adventures of Mr. Cavor was, after all, the outcome of the purest accident. It might have been anyone. I fell into these things at a time when I thought myself removed from the slightest possibility of disturbing experiences. I had gone to Lympne because I had imagined it the most uneventful place in the world. “Here, at any rate,” said I, “I shall find peace and a chance to work!”", "And this book is the sequel. So utterly at variance is Destiny with all the little plans of men."],
    reading: { state: "reading", progress: 0.3 },
  },
  {
    id: "food-of-the-gods", genre: "scifi", title: "The Food of the Gods", author: "H. G. Wells", year: 1904,
    cover: { src: "assets/covers/food-of-the-gods.jpg", tone: "#42372c" },
    chapter: "Book I · The Dawn of the Food",
    quote: "Tomorrow, whether we live or die, growth will conquer through us.",
    text: ["In the middle years of the nineteenth century there first became abundant in this strange world of ours a class of men, men tending for the most part to become elderly, who are called, and who are very properly called, but who dislike extremely to be called—“scientists.” They dislike that word so much that from the columns of Nature, which was from the first their distinctive and characteristic paper, it is as carefully excluded as if it were—that other word which is the basis of all really bad language in this country. But the Great Public and its Press know better, and “scientists” they are, and when they emerge to any sort of publicity, “distinguished scientists” and “eminent scientists” and “well-known scientists” is the very least we call them."],
    reading: { state: "reading", progress: 0.08 },
  },
  {
    id: "world-set-free", genre: "scifi", title: "The World Set Free", author: "H. G. Wells", year: 1914,
    cover: { src: "assets/covers/world-set-free.jpg", tone: "#413730" },
    chapter: "Prelude · The Sun Snarers",
    quote: "Man is the tool-using, fire-making animal.",
    text: ["The history of mankind is the history of the attainment of external power. Man is the tool-using, fire-making animal. From the outset of his terrestrial career we find him supplementing the natural strength and bodily weapons of a beast by the heat of burning and the rough implement of stone. So he passed beyond the ape. From that he expands. Presently he added to himself the power of the horse and the ox, he borrowed the carrying strength of water and the driving force of the wind, he quickened his fire by blowing, and his simple tools, pointed first with copper and then with iron, increased and varied and became more elaborate and efficient. He sheltered his heat in houses and made his way easier by paths and roads. He complicated his social relationships and increased his efficiency by the division of labour. He began to store up knowledge. Contrivance followed contrivance, each making it possible for a man to do more. Always down the lengthening record, save for a setback ever and again, he is doing more. …"],
    reading: { state: "finished", progress: 1 },
  },
  {
    id: "journey-to-the-center", genre: "scifi", title: "Journey to the Center of the Earth", author: "Jules Verne", year: 1864,
    cover: { src: "assets/covers/journey-to-the-center.jpg", tone: "#524237" },
    chapter: "Chapter I · The Professor and His Family",
    quote: "Descend, bold traveller, into the crater of the Jökull of Snæfells … and you will attain the centre of the earth.",
    text: ["On the 24th of May, 1863, my uncle, Professor Liedenbrock, rushed into his little house, No. 19 Königstrasse, one of the oldest streets in the oldest portion of the city of Hamburg.", "Martha must have concluded that she was very much behindhand, for the dinner had only just been put into the oven."],
    reading: { state: "reading", progress: 0.5 },
  },
  {
    id: "lost-world", genre: "scifi", title: "The Lost World", author: "Arthur Conan Doyle", year: 1912,
    cover: { src: "assets/covers/lost-world.jpg", tone: "#3e4c4e" },
    chapter: "Chapter I · There Are Heroisms All Round Us",
    quote: "There are heroisms all round us waiting to be done.",
    text: ["Mr. Hungerton, her father, really was the most tactless person upon earth—a fluffy, feathery, untidy cockatoo of a man, perfectly good-natured, but absolutely centered upon his own silly self. If anything could have driven me from Gladys, it would have been the thought of such a father-in-law. I am convinced that he really believed in his heart that I came round to the Chestnuts three days a week for the pleasure of his company, and very especially to hear his views upon bimetallism, a subject upon which he was by way of being an authority."],
    reading: { state: "finished", progress: 1 },
  },

  {
    id: "princess-of-mars", genre: "scifi", title: "A Princess of Mars", author: "Edgar Rice Burroughs", year: 1917,
    cover: { src: "assets/covers/princess-of-mars.jpg", tone: "#7f5942" },
    chapter: "Chapter I · On the Arizona Hills",
    quote: "I am a very old man; how old I do not know.",
    text: ["I am a very old man; how old I do not know. Possibly I am a hundred, possibly more; but I cannot tell because I have never aged as other men, nor do I remember any childhood. So far as I can recollect I have always been a man, a man of about thirty. I appear today as I did forty years and more ago, and yet I feel that I cannot go on living forever; that some day I shall die the real death from which there is no resurrection. I do not know why I should fear death, I who have died twice and am still alive; but yet I have the same horror of it as you who have never died, and it is because of this terror of death, I believe, that I am so convinced of my mortality."],
  },
  {
    id: "earth-to-the-moon", genre: "scifi", title: "From the Earth to the Moon", author: "Jules Verne", year: 1865,
    cover: { src: "assets/covers/earth-to-the-moon.jpg", tone: "#747568" },
    chapter: "Chapter I · The Gun Club",
    quote: "The Yankees, the first mechanicians in the world, are born engineers, just as Italians are musicians and Germans metaphysicians.",
    text: ["During the Federal war in the United States a new and very influential club was established in the city of Baltimore, Maryland. It is well known with what energy the military instinct was developed amongst that nation of shipowners, shopkeepers, and mechanics. Mere tradesmen jumped their counters to become extempore captains, colonels, and generals without having passed the Military School at West Point; they soon rivalled their colleagues of the old continent, and, like them, gained victories by dint of lavishing bullets, millions, and men."],
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

  {
    id: "wind-in-the-willows", genre: "fantasy", title: "The Wind in the Willows", author: "Kenneth Grahame", year: 1908,
    cover: { src: "assets/covers/wind-in-the-willows.jpg", tone: "#63553b" },
    chapter: "Chapter I · The River Bank",
    quote: "Believe me, my young friend, there is nothing—absolute nothing—half so much worth doing as simply messing about in boats.",
    text: ["The Mole had been working very hard all the morning, spring-cleaning his little home. First with brooms, then with dusters; then on ladders and steps and chairs, with a brush and a pail of whitewash; till he had dust in his throat and eyes, and splashes of whitewash all over his black fur, and an aching back and weary arms. Spring was moving in the air above and in the earth below and around him, penetrating even his dark and lowly little house with its spirit of divine discontent and longing. It was small wonder, then, that he suddenly flung down his brush on the floor, said, “Bother!” and “O blow!” and also “Hang spring-cleaning!” and bolted out of the house without even waiting to put on his coat. …"],
  },
  {
    id: "looking-glass", genre: "fantasy", title: "Through the Looking-Glass", author: "Lewis Carroll", year: 1871,
    cover: { src: "assets/covers/looking-glass.jpg", tone: "#3d3529" },
    chapter: "Chapter I · Looking-Glass House",
    quote: "Why, sometimes I’ve believed as many as six impossible things before breakfast.",
    text: ["One thing was certain, that the white kitten had had nothing to do with it:—it was the black kitten’s fault entirely. For the white kitten had been having its face washed by the old cat for the last quarter of an hour (and bearing it pretty well, considering); so you see that it couldn’t have had any hand in the mischief."],
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

  {
    id: "thirty-nine-steps", genre: "mystery", title: "The Thirty-Nine Steps", author: "John Buchan", year: 1915,
    cover: { src: "assets/covers/thirty-nine-steps.jpg", tone: "#483f37" },
    chapter: "Chapter I · The Man Who Died",
    quote: "I returned from the city about three o’clock on that May afternoon pretty well disgusted with life.",
    text: ["I returned from the city about three o’clock on that May afternoon pretty well disgusted with life. I had been three months in the Old Country, and was fed up with it. If anyone had told me a year ago that I would have been feeling like that I should have laughed at him; but there was the fact. The weather made me liverish, the talk of the ordinary Englishman made me sick. I couldn’t get enough exercise, and the amusements of London seemed as flat as soda-water that has been standing in the sun. “Richard Hannay,” I kept telling myself, “you have got into the wrong ditch, my friend, and you had better climb out.”"],
  },
  {
    id: "moonstone", genre: "mystery", title: "The Moonstone", author: "Wilkie Collins", year: 1868,
    cover: { src: "assets/covers/moonstone.jpg", tone: "#5d4837" },
    chapter: "Prologue · The Storming of Seringapatam (1799)",
    quote: "I declare, on my word of honour, that what I am now about to write is, strictly and literally, the truth.",
    text: ["I address these lines—written in India—to my relatives in England.", "My object is to explain the motive which has induced me to refuse the right hand of friendship to my cousin, John Herncastle. The reserve which I have hitherto maintained in this matter has been misinterpreted by members of my family whose good opinion I cannot consent to forfeit. I request them to suspend their decision until they have read my narrative. And I declare, on my word of honour, that what I am now about to write is, strictly and literally, the truth."],
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

  {
    id: "persuasion", genre: "romance", title: "Persuasion", author: "Jane Austen", year: 1817,
    cover: { src: "assets/covers/persuasion.jpg", tone: "#453f30" },
    chapter: "Chapter I",
    quote: "I can listen no longer in silence. I must speak to you by such means as are within my reach.",
    text: ["Sir Walter Elliot, of Kellynch Hall, in Somersetshire, was a man who, for his own amusement, never took up any book but the Baronetage; there he found occupation for an idle hour, and consolation in a distressed one; there his faculties were roused into admiration and respect, by contemplating the limited remnant of the earliest patents; there any unwelcome sensations, arising from domestic affairs changed naturally into pity and contempt as he turned over the almost endless creations of the last century; and there, if every other leaf were powerless, he could read his own history with an interest which never failed. This was the page at which the favourite volume always opened:"],
  },
  {
    id: "sense-and-sensibility", genre: "romance", title: "Sense and Sensibility", author: "Jane Austen", year: 1811,
    cover: { src: "assets/covers/sense-and-sensibility.jpg", tone: "#453721" },
    chapter: "Chapter I",
    quote: "The more I know of the world, the more am I convinced that I shall never see a man whom I can really love.",
    text: ["The family of Dashwood had long been settled in Sussex. Their estate was large, and their residence was at Norland Park, in the centre of their property, where, for many generations, they had lived in so respectable a manner as to engage the general good opinion of their surrounding acquaintance. The late owner of this estate was a single man, who lived to a very advanced age, and who for many years of his life, had a constant companion and housekeeper in his sister. But her death, which happened ten years before his own, produced a great alteration in his home; for to supply her loss, he invited and received into his house the family of his nephew Mr. Henry Dashwood, the legal inheritor of the Norland estate, and the person to whom he intended to bequeath it. …"],
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

  {
    id: "three-musketeers", genre: "historical", title: "The Three Musketeers", author: "Alexandre Dumas", year: 1844,
    cover: { src: "assets/covers/three-musketeers.jpg", tone: "#251b0e" },
    chapter: "Chapter I · The Three Presents of d’Artagnan the Elder",
    quote: "All for one, one for all—that is our motto, is it not?",
    text: ["On the first Monday of the month of April, 1625, the market town of Meung, in which the author of Romance of the Rose was born, appeared to be in as perfect a state of revolution as if the Huguenots had just made a second La Rochelle of it. Many citizens, seeing the women flying toward the High Street, leaving their children crying at the open doors, hastened to don the cuirass, and supporting their somewhat uncertain courage with a musket or a partisan, directed their steps toward the hostelry of the Jolly Miller, before which was gathered, increasing every minute, a compact group, vociferous and full of curiosity."],
  },
  {
    id: "ivanhoe", genre: "historical", title: "Ivanhoe", author: "Walter Scott", year: 1819,
    cover: { src: "assets/covers/ivanhoe.jpg", tone: "#342c21" },
    chapter: "Chapter I",
    quote: "In that pleasant district of merry England which is watered by the river Don, there extended in ancient times a large forest …",
    text: ["In that pleasant district of merry England which is watered by the river Don, there extended in ancient times a large forest, covering the greater part of the beautiful hills and valleys which lie between Sheffield and the pleasant town of Doncaster. The remains of this extensive wood are still to be seen at the noble seats of Wentworth, of Warncliffe Park, and around Rotherham. Here haunted of yore the fabulous Dragon of Wantley; here were fought many of the most desperate battles during the Civil Wars of the Roses; and here also flourished in ancient times those bands of gallant outlaws, whose deeds have been rendered so popular in English song."],
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

  {
    id: "jekyll-and-hyde", genre: "horror", title: "Strange Case of Dr Jekyll and Mr Hyde", author: "Robert Louis Stevenson", year: 1886,
    cover: { src: "assets/covers/jekyll-and-hyde.jpg", tone: "#322a25" },
    chapter: "Story of the Door",
    quote: "Man is not truly one, but truly two.",
    text: ["Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable. At friendly meetings, and when the wine was to his taste, something eminently human beaconed from his eye; something indeed which never found its way into his talk, but which spoke not only in these silent symbols of the after-dinner face, but more often and loudly in the acts of his life. He was austere with himself; drank gin when he was alone, to mortify a taste for vintages; and though he enjoyed the theatre, had not crossed the doors of one for twenty years. But he had an approved tolerance for others; sometimes wondering, almost with envy, at the high pressure of spirits involved in their misdeeds; …"],
  },
  {
    id: "turn-of-the-screw", genre: "horror", title: "The Turn of the Screw", author: "Henry James", year: 1898,
    cover: { src: "assets/covers/turn-of-the-screw.jpg", tone: "#515244" },
    chapter: "Prologue",
    quote: "If the child gives the effect another turn of the screw, what do you say to two children—?",
    text: ["The story had held us, round the fire, sufficiently breathless, but except the obvious remark that it was gruesome, as, on Christmas Eve in an old house, a strange tale should essentially be, I remember no comment uttered till somebody happened to say that it was the only case he had met in which such a visitation had fallen on a child. The case, I may mention, was that of an apparition in just such an old house as had gathered us for the occasion—an appearance, of a dreadful kind, to a little boy sleeping in the room with his mother and waking her up in the terror of it; waking her not to dissipate his dread and soothe him to sleep again, but to encounter also, herself, before she had succeeded in doing so, the same sight that had shaken him. …"],
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

  {
    id: "call-of-the-wild", genre: "adventure", title: "The Call of the Wild", author: "Jack London", year: 1903,
    cover: { src: "assets/covers/call-of-the-wild.jpg", tone: "#524947" },
    chapter: "Chapter I · Into the Primitive",
    quote: "Buck did not read the newspapers, or he would have known that trouble was brewing …",
    text: ["Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tidewater dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they wanted were heavy dogs, with strong muscles by which to toil, and furry coats to protect them from the frost."],
  },
  {
    id: "king-solomons-mines", genre: "adventure", title: "King Solomon’s Mines", author: "H. Rider Haggard", year: 1885,
    cover: { src: "assets/covers/king-solomons-mines.jpg", tone: "#35392b" },
    chapter: "Chapter I · I Meet Sir Henry Curtis",
    quote: "It is a curious thing that at my age—fifty-five last birthday—I should find myself taking up a pen to try to write a history.",
    text: ["It is a curious thing that at my age—fifty-five last birthday—I should find myself taking up a pen to try to write a history. I wonder what sort of a history it will be when I have finished it, if ever I come to the end of the trip! I have done a good many things in my life, which seems a long one to me, owing to my having begun work so young, perhaps. At an age when other boys are at school I was earning my living as a trader in the old Colony. I have been trading, hunting, fighting, or mining ever since. And yet it is only eight months ago that I made my pile. It is a big pile now that I have got it—I don’t yet know how big—but I do not think I would go through the last fifteen or sixteen months again for it; no, not if I knew that I should come out safe at the end, pile and all. But then I am a timid man, and dislike violence; …"],
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
  {
    id: "little-women", genre: "literary", title: "Little Women", author: "Louisa May Alcott", year: 1868,
    cover: { src: "assets/covers/little-women.jpg", tone: "#5e442d" },
    chapter: "Part I · Chapter I · Playing Pilgrims",
    quote: "I’m not afraid of storms, for I’m learning how to sail my ship.",
    text: ["“Christmas won’t be Christmas without any presents,” grumbled Jo, lying on the rug.", "“It’s so dreadful to be poor!” sighed Meg, looking down at her old dress."],
  },
  {
    id: "middlemarch", genre: "literary", title: "Middlemarch", author: "George Eliot", year: 1871,
    cover: { src: "assets/covers/middlemarch.jpg", tone: "#453f30" },
    chapter: "Book I · Miss Brooke · Chapter I",
    quote: "Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress.",
    text: ["Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress. Her hand and wrist were so finely formed that she could wear sleeves not less bare of style than those in which the Blessed Virgin appeared to Italian painters; and her profile as well as her stature and bearing seemed to gain the more dignity from her plain garments, which by the side of provincial fashion gave her the impressiveness of a fine quotation from the Bible—or from one of our elder poets—in a paragraph of today’s newspaper. She was usually spoken of as being remarkably clever, but with the addition that her sister Celia had more common sense. Nevertheless, Celia wore scarcely more trimmings; and it was only to close observers that her dress differed from her sister’s, and had a shade of coquetry in its arrangements; …"],
  },
];

export const bookById = Object.fromEntries(BOOKS.map((b) => [b.id, b]));
export const booksIn = (genreId) => BOOKS.filter((b) => b.genre === genreId);

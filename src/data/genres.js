/**
 * The eight shelves. Each genre owns an accent (spine bands, 3D book trim)
 * and a paper tint for Discover notes.
 */
export const GENRES = [
  {
    id: "scifi",
    name: "Science Fiction",
    tagline: "Futures imagined long before they arrived.",
    accent: "#D9A35B",
    note: "#DEE0DA",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    tagline: "Doors that open onto other worlds.",
    accent: "#D8C68E",
    note: "#E1E3D2",
  },
  {
    id: "mystery",
    name: "Mystery & Thriller",
    tagline: "Every clue is already on the page.",
    accent: "#B8402F",
    note: "#E6DCD3",
  },
  {
    id: "romance",
    name: "Romance",
    tagline: "Two people, one long misunderstanding.",
    accent: "#E7B9A4",
    note: "#EBDAD6",
  },
  {
    id: "historical",
    name: "Historical Fiction",
    tagline: "The past, told as if it were still happening.",
    accent: "#D9B26B",
    note: "#E9E0CB",
  },
  {
    id: "horror",
    name: "Horror",
    tagline: "Best read with the lights on.",
    accent: "#9E2421",
    note: "#E2DDD8",
  },
  {
    id: "adventure",
    name: "Adventure",
    tagline: "Pack lightly. The map is unfinished.",
    accent: "#E39A45",
    note: "#DCE3DF",
  },
  {
    id: "literary",
    name: "Literary Fiction",
    tagline: "Sentences worth slowing down for.",
    accent: "#B5482F",
    note: "#EDE6D8",
  },
];

export const genreById = Object.fromEntries(GENRES.map((g) => [g.id, g]));
export const genreIndex = (id) => GENRES.findIndex((g) => g.id === id);

/**
 * The eight shelves. Each genre owns its cover palette (used by covers,
 * spines and 3D books) and a paper tint for Discover notes.
 */
export const GENRES = [
  {
    id: "scifi",
    name: "Science Fiction",
    tagline: "Futures imagined long before they arrived.",
    palette: { bg: ["#1B2740", "#2A3B5A"], ink: "#E9DFC9", accent: "#D9A35B" },
    note: "#DEE0DA",
  },
  {
    id: "fantasy",
    name: "Fantasy",
    tagline: "Doors that open onto other worlds.",
    palette: { bg: ["#2C3A2B", "#3E4C34"], ink: "#E8DFC6", accent: "#D8C68E" },
    note: "#E1E3D2",
  },
  {
    id: "mystery",
    name: "Mystery & Thriller",
    tagline: "Every clue is already on the page.",
    palette: { bg: ["#1A1A19", "#2B2926"], ink: "#E6DED0", accent: "#B8402F" },
    note: "#E6DCD3",
  },
  {
    id: "romance",
    name: "Romance",
    tagline: "Two people, one long misunderstanding.",
    palette: { bg: ["#6A2C38", "#86464C"], ink: "#F1E2D6", accent: "#E7B9A4" },
    note: "#EBDAD6",
  },
  {
    id: "historical",
    name: "Historical Fiction",
    tagline: "The past, told as if it were still happening.",
    palette: { bg: ["#5A4630", "#6F5A3E"], ink: "#EFE3C8", accent: "#D9B26B" },
    note: "#E9E0CB",
  },
  {
    id: "horror",
    name: "Horror",
    tagline: "Best read with the lights on.",
    palette: { bg: ["#0E0E0F", "#1F1617"], ink: "#D9D2C6", accent: "#9E2421" },
    note: "#E2DDD8",
  },
  {
    id: "adventure",
    name: "Adventure",
    tagline: "Pack lightly. The map is unfinished.",
    palette: { bg: ["#1E4752", "#2D5B5E"], ink: "#F0E4CC", accent: "#E39A45" },
    note: "#DCE3DF",
  },
  {
    id: "literary",
    name: "Literary Fiction",
    tagline: "Sentences worth slowing down for.",
    palette: { bg: ["#E6DCC8", "#D6C9AE"], ink: "#2A2620", accent: "#B5482F" },
    note: "#EDE6D8",
  },
];

export const genreById = Object.fromEntries(GENRES.map((g) => [g.id, g]));
export const genreIndex = (id) => GENRES.findIndex((g) => g.id === id);

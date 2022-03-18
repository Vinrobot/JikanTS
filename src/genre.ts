// Interfaces
import { Anime, Manga } from "./interfaces/genre/Genre";

// Utils
import { api } from "./utils";

/**
 * Fetches Anime items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const anime = async (genreId: number, page: number = 1) => {
  return await api<Anime>(`/genre/anime/${genreId}/${page}`);
};

/**
 * Fetches Manga items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const manga = async (genreId: number, page: number = 1) => {
  return await api<Manga>(`/genre/manga/${genreId}/${page}`);
};

export default {
  anime,
  manga
};

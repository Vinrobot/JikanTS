// Interfaces
import { Anime, Manga } from "./interfaces/genre/Genre";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches Anime items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const anime = async (genreId: number, page: number = 1) => {
  try {
    const result = await api(`/genre/anime/${genreId}/${page}`);

    return result as Anime;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches Manga items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const manga = async (genreId: number, page: number = 1) => {
  try {
    const result = await api(`/genre/manga/${genreId}/${page}`);

    return result as Manga;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  anime,
  manga
};

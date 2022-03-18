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
export async function anime(genreId: number, page = 1) {
  return await api<Anime>(`/genre/anime/${genreId}/${page}`);
}

/**
 * Fetches Manga items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
export async function manga(genreId: number, page = 1) {
  return await api<Manga>(`/genre/manga/${genreId}/${page}`);
}

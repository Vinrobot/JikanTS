// Interfaces
import { AnimeList, AnimeListTypes } from "./interfaces/user/AnimeList";
import { Friends } from "./interfaces/user/Friends";
import { History, Types } from "./interfaces/user/History";
import { MangaList, MangaListTypes } from "./interfaces/user/MangaList";
import { Profile } from "./interfaces/user/Profile";

// Utils
import { api } from "./utils";

/**
 * Fetches the specified user animelist
 *
 * @param username - Username on MyAnimeList
 * @param type - The type to search for
 * @param page - The page number
 */
export async function animeList(
  username: string,
  type: AnimeListTypes = "all",
  page = 1
): Promise<AnimeList> {
  return await api<AnimeList>(`/user/${username}/animelist/${type}/${page}`);
}

/**
 * Fetches the specified user friends
 *
 * @param username - Username on MyAnimeList
 * @param page - The page number
 */
export async function friends(username: string, page = 1): Promise<Friends> {
  return await api<Friends>(`/user/${username}/friends/${page}`);
}

/**
 * Fetches the specified user history
 *
 * @param username - Username on MyAnimeList
 * @param type - Anime, Manga or Both
 */
export async function history(
  username: string,
  type: Types = "both"
): Promise<History> {
  switch (type) {
    case "both":
      return await api<History>(`/user/${username}/history`);
    case "anime":
      return await api<History>(`/user/${username}/history/anime`);
    case "manga":
      return await api<History>(`/user/${username}/history/manga`);
  }
}

/**
 * Fetches the specified user mangalist
 *
 * @param username - Username on MyAnimeList
 * @param type - The type to search for
 * @param page - The page number
 */
export async function mangaList(
  username: string,
  type: MangaListTypes = "all",
  page = 1
) {
  return await api<MangaList>(`/user/${username}/mangalist/${type}/${page}`);
}

/**
 * Fetches the specified user profile
 *
 * @param username - Username on MyAnimeList
 */
export async function profile(username: string) {
  return await api<Profile>(`/user/${username}`);
}

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
const animeList = async (
  username: string,
  type: AnimeListTypes = "all",
  page: number = 1
) => {
  return await api<AnimeList>(`/user/${username}/animelist/${type}/${page}`);
};

/**
 * Fetches the specified user friends
 *
 * @param username - Username on MyAnimeList
 * @param page - The page number
 */
const friends = async (username: string, page: number = 1) => {
  return await api<Friends>(`/user/${username}/friends/${page}`);
};

/**
 * Fetches the specified user history
 *
 * @param username - Username on MyAnimeList
 * @param type - Anime, Manga or Both
 */
const history = async (username: string, type: Types = "both") => {
  if (type === "anime") {
    return await api<History>(`/user/${username}/history/anime`);
  }

  if (type === "both") {
    return await api<History>(`/user/${username}/history`);
  }

  if (type === "manga") {
    return await api<History>(`/user/${username}/history/manga`);
  }
};

/**
 * Fetches the specified user mangalist
 *
 * @param username - Username on MyAnimeList
 * @param type - The type to search for
 * @param page - The page number
 */
const mangaList = async (
  username: string,
  type: MangaListTypes = "all",
  page: number = 1
) => {
  return await api<MangaList>(`/user/${username}/mangalist/${type}/${page}`);
};

/**
 * Fetches the specified user profile
 *
 * @param username - Username on MyAnimeList
 */
const profile = async (username: string) => {
  return await api<Profile>(`/user/${username}`);
};

export default {
  animeList,
  friends,
  history,
  mangaList,
  profile
};

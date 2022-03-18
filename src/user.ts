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
  const result = await api(`/user/${username}/animelist/${type}/${page}`);

  return result as AnimeList;
};

/**
 * Fetches the specified user friends
 *
 * @param username - Username on MyAnimeList
 * @param page - The page number
 */
const friends = async (username: string, page: number = 1) => {
  const result = await api(`/user/${username}/friends/${page}`);

  return result as Friends;
};

/**
 * Fetches the specified user history
 *
 * @param username - Username on MyAnimeList
 * @param type - Anime, Manga or Both
 */
const history = async (username: string, type: Types = "both") => {
  if (type === "anime") {
    const anime = await api(`/user/${username}/history/anime`);

    return anime as History;
  }

  if (type === "both") {
    const both = await api(`/user/${username}/history`);

    return both as History;
  }

  if (type === "manga") {
    const manga = await api(`/user/${username}/history/manga`);

    return manga as History;
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
  const result = await api(`/user/${username}/mangalist/${type}/${page}`);

  return result as MangaList;
};

/**
 * Fetches the specified user profile
 *
 * @param username - Username on MyAnimeList
 */
const profile = async (username: string) => {
  const result = await api(`/user/${username}`);

  return result as Profile;
};

export default {
  animeList,
  friends,
  history,
  mangaList,
  profile
};

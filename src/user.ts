// Interfaces
import { AnimeList, AnimeListTypes } from "./interfaces/user/AnimeList";
import { Friends } from "./interfaces/user/Friends";
import { History, Types } from "./interfaces/user/History";
import { MangaList, MangaListTypes } from "./interfaces/user/MangaList";
import { Profile } from "./interfaces/user/Profile";

// Utils
import { api, Logger, queue } from "./utils";

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
  try {
    const result = await queue.add(
      async () => await api(`/user/${username}/animelist/${type}/${page}`)
    );

    return result as AnimeList;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches the specified user friends
 *
 * @param username - Username on MyAnimeList
 * @param page - The page number
 */
const friends = async (username: string, page: number = 1) => {
  try {
    const result = await queue.add(
      async () => await api(`/user/${username}/friends/${page}`)
    );

    return result as Friends;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches the specified user history
 *
 * @param username - Username on MyAnimeList
 * @param type - Anime, Manga or Both
 */
const history = async (username: string, type: Types = "both") => {
  try {
    if (type === "anime") {
      const anime = await queue.add(
        async () => await api(`/user/${username}/history/anime`)
      );

      return anime as History;
    }

    if (type === "both") {
      const both = await queue.add(
        async () => await api(`/user/${username}/history`)
      );

      return both as History;
    }

    if (type === "manga") {
      const manga = await queue.add(
        async () => await api(`/user/${username}/history/manga`)
      );

      return manga as History;
    }
  } catch (error) {
    Logger.error(error);
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
  try {
    const result = await queue.add(
      async () => await api(`/user/${username}/mangalist/${type}/${page}`)
    );

    return result as MangaList;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches the specified user profile
 *
 * @param username - Username on MyAnimeList
 */
const profile = async (username: string) => {
  try {
    const result = await queue.add(
      async () => await api(`/user/${username}`)
    );

    return result as Profile;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  animeList,
  friends,
  history,
  mangaList,
  profile
};

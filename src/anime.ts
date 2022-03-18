// Interfaces
import { AnimeById } from "./interfaces/anime/ById";
import { CharactersStaff } from "./interfaces/anime/CharactersStaff";
import { Episodes } from "./interfaces/anime/Episodes";
import { Forum } from "./interfaces/anime/Forum";
import { MoreInfo } from "./interfaces/anime/MoreInfo";
import { News } from "./interfaces/anime/News";
import { Recommendations } from "./interfaces/anime/Recommendations";
import { Reviews } from "./interfaces/anime/Reviews";
import { Stats } from "./interfaces/anime/Stats";
import { UserUpdates } from "./interfaces/anime/UserUpdates";
import { Videos } from "./interfaces/anime/Videos";

// Utils
import { api } from "./utils";

/**
 * Fetches the anime with the given ID
 *
 * @param id - The anime id
 */
const byId = async (id: number) => {
  return await api<AnimeById>(`/anime/${id}`);
};

/**
 * Fetches the list of characters & staff members of the anime
 *
 * @param id - The anime id
 */
const charactersStaff = async (id: number) => {
  return await api<CharactersStaff>(`/anime/${id}/characters_staff`);
};

/**
 * Fetches the list of episodes of the anime
 *
 * @param id - The anime id
 * @param page - The page number
 */
const episodes = async (id: number, page: number = 1) => {
  return await api<Episodes>(`/anime/${id}/episodes/${page}`);
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The anime id
 */
const forum = async (id: number) => {
  return await api<Forum>(`/anime/${id}/forum`);
};

/**
 * Fetches more info related to the item
 *
 * @param id - The anime id
 */
const moreInfo = async (id: number) => {
  return await api<MoreInfo>(`/anime/${id}/moreinfo`);
};

/**
 * Fetches news related to the item
 *
 * @param id - The anime id
 */
const news = async (id: number) => {
  return await api<News>(`/anime/${id}/news`);
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The anime id
 */
const pictures = async (id: number) => {
  return await api<unknown>(`/anime/${id}/pictures`);
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The anime id
 */
const recommendations = async (id: number) => {
  return await api<Recommendations>(`/anime/${id}/recommendations`);
};

/**
 * Fetches reviews written by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
  return await api<Reviews>(`/anime/${id}/reviews/${page}`);
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The anime id
 */
const stats = async (id: number) => {
  return await api<Stats>(`/anime/${id}/stats`);
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
  return await api<UserUpdates>(`/anime/${id}/userupdates/${page}`);
};

/**
 * Fetches PV & episodes (if any) related to the item
 *
 * @param id - The anime id
 */
const videos = async (id: number) => {
  return await api<Videos>(`/anime/${id}/videos`);
};

export default {
  byId,
  charactersStaff,
  episodes,
  forum,
  moreInfo,
  news,
  pictures,
  recommendations,
  reviews,
  stats,
  userUpdates,
  videos
};

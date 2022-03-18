// Interfaces
import { Characters } from "./interfaces/manga/Characters";
import { News } from "./interfaces/manga/News";
import { Reviews } from "./interfaces/manga/Reviews";
import { Stats } from "./interfaces/manga/Stats";
import { UserUpdates } from "./interfaces/manga/UserUpdates";

// Utils
import { api } from "./utils";

/**
 * Fetches the list of characters & staff members of the manga
 *
 * @param id - The manga id
 */
const characters = async (id: number) => {
  return await api<Characters>(`/manga/${id}/characters`);
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The manga id
 */
const forum = async (id: number) => {
  return await api<unknown>(`/manga/${id}/forum`);
};

/**
 * Fetches more info related to the item
 *
 * @param id - The manga id
 */
const moreInfo = async (id: number) => {
  return await api<unknown>(`/manga/${id}/moreinfo`);
};

/**
 * Fetches news related to the item
 *
 * @param id - The manga id
 */
const news = async (id: number) => {
  return await api<News>(`/manga/${id}/news`);
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The manga id
 */
const pictures = async (id: number) => {
  return await api<unknown>(`/manga/${id}/pictures`);
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The manga id
 */
const recommendations = async (id: number) => {
  return await api<unknown>(`/manga/${id}/recommendations`);
};

/**
 * Fetches reviews written by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
  return await api<Reviews>(`/manga/${id}/reviews/${page}`);
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The manga id
 */
const stats = async (id: number) => {
  return await api<Stats>(`/manga/${id}/stats`);
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
  return await api<UserUpdates>(`/manga/${id}/userupdates/${page}`);
};

export default {
  characters,
  forum,
  moreInfo,
  news,
  pictures,
  recommendations,
  reviews,
  stats,
  userUpdates
};

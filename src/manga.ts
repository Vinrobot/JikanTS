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
  const result = await api(`/manga/${id}/characters`);

  return result as Characters;
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The manga id
 */
const forum = async (id: number) => {
  const result = await api(`/manga/${id}/forum`);

  return result;
};

/**
 * Fetches more info related to the item
 *
 * @param id - The manga id
 */
const moreInfo = async (id: number) => {
  const result = await api(`/manga/${id}/moreinfo`);

  return result;
};

/**
 * Fetches news related to the item
 *
 * @param id - The manga id
 */
const news = async (id: number) => {
  const result = await api(`/manga/${id}/news`);

  return result as News;
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The manga id
 */
const pictures = async (id: number) => {
  const result = await api(`/manga/${id}/pictures`);

  return result;
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The manga id
 */
const recommendations = async (id: number) => {
  const result = await api(`/manga/${id}/recommendations`);

  return result;
};

/**
 * Fetches reviews written by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
  const result = await api(`/manga/${id}/reviews/${page}`);

  return result as Reviews;
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The manga id
 */
const stats = async (id: number) => {
  const result = await api(`/manga/${id}/stats`);

  return result as Stats;
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
  const result = await api(`/manga/${id}/userupdates/${page}`);

  return result as UserUpdates;
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

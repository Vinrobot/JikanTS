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
  const result = await api(`/anime/${id}`);

  return result as AnimeById;
};

/**
 * Fetches the list of characters & staff members of the anime
 *
 * @param id - The anime id
 */
const charactersStaff = async (id: number) => {
  const result = await api(`/anime/${id}/characters_staff`);

  return result as CharactersStaff;
};

/**
 * Fetches the list of episodes of the anime
 *
 * @param id - The anime id
 * @param page - The page number
 */
const episodes = async (id: number, page: number = 1) => {
  const result = await api(`/anime/${id}/episodes/${page}`);

  return result as Episodes;
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The anime id
 */
const forum = async (id: number) => {
  const result = await api(`/anime/${id}/forum`);

  return result as Forum;
};

/**
 * Fetches more info related to the item
 *
 * @param id - The anime id
 */
const moreInfo = async (id: number) => {
  const result = await api(`/anime/${id}/moreinfo`);

  return result as MoreInfo;
};

/**
 * Fetches news related to the item
 *
 * @param id - The anime id
 */
const news = async (id: number) => {
  const result = await api(`/anime/${id}/news`);

  return result as News;
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The anime id
 */
const pictures = async (id: number) => {
  const result = await api(`/anime/${id}/pictures`);

  return result;
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The anime id
 */
const recommendations = async (id: number) => {
  const result = await api(`/anime/${id}/recommendations`);

  return result as Recommendations;
};

/**
 * Fetches reviews written by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
  const result = await api(`/anime/${id}/reviews/${page}`);

  return result as Reviews;
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The anime id
 */
const stats = async (id: number) => {
  const result = await api(`/anime/${id}/stats`);

  return result as Stats;
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
  const result = await api(`/anime/${id}/userupdates/${page}`);

  return result as UserUpdates;
};

/**
 * Fetches PV & episodes (if any) related to the item
 *
 * @param id - The anime id
 */
const videos = async (id: number) => {
  const result = await api(`/anime/${id}/videos`);

  return result as Videos;
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

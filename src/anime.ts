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
export async function byId(id: number) {
  return await api<AnimeById>(`/anime/${id}`);
}

/**
 * Fetches the list of characters & staff members of the anime
 *
 * @param id - The anime id
 */
export async function charactersStaff(id: number) {
  return await api<CharactersStaff>(`/anime/${id}/characters_staff`);
}

/**
 * Fetches the list of episodes of the anime
 *
 * @param id - The anime id
 * @param page - The page number
 */
export async function episodes(id: number, page = 1) {
  return await api<Episodes>(`/anime/${id}/episodes/${page}`);
}

/**
 * Fetches forum topics related to the item
 *
 * @param id - The anime id
 */
export async function forum(id: number) {
  return await api<Forum>(`/anime/${id}/forum`);
}

/**
 * Fetches more info related to the item
 *
 * @param id - The anime id
 */
export async function moreInfo(id: number) {
  return await api<MoreInfo>(`/anime/${id}/moreinfo`);
}

/**
 * Fetches news related to the item
 *
 * @param id - The anime id
 */
export async function news(id: number) {
  return await api<News>(`/anime/${id}/news`);
}

/**
 * Fetches pictures related to the item
 *
 * @param id - The anime id
 */
export async function pictures(id: number) {
  return await api(`/anime/${id}/pictures`);
}

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The anime id
 */
export async function recommendations(id: number) {
  return await api<Recommendations>(`/anime/${id}/recommendations`);
}

/**
 * Fetches reviews written by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
export async function reviews(id: number, page = 1) {
  return await api<Reviews>(`/anime/${id}/reviews/${page}`);
}

/**
 * Fetches statistical information related to the item
 *
 * @param id - The anime id
 */
export async function stats(id: number) {
  return await api<Stats>(`/anime/${id}/stats`);
}

/**
 * Fetches latest list updates made by users
 *
 * @param id - The anime id
 * @param page - The page number
 */
export async function userUpdates(id: number, page = 1) {
  return await api<UserUpdates>(`/anime/${id}/userupdates/${page}`);
}

/**
 * Fetches PV & episodes (if any) related to the item
 *
 * @param id - The anime id
 */
export async function videos(id: number) {
  return await api<Videos>(`/anime/${id}/videos`);
}

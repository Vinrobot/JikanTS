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
export async function characters(id: number) {
  return await api<Characters>(`/manga/${id}/characters`);
}

/**
 * Fetches forum topics related to the item
 *
 * @param id - The manga id
 */
export async function forum(id: number) {
  return await api(`/manga/${id}/forum`);
}

/**
 * Fetches more info related to the item
 *
 * @param id - The manga id
 */
export async function moreInfo(id: number) {
  return await api(`/manga/${id}/moreinfo`);
}

/**
 * Fetches news related to the item
 *
 * @param id - The manga id
 */
export async function news(id: number) {
  return await api<News>(`/manga/${id}/news`);
}

/**
 * Fetches pictures related to the item
 *
 * @param id - The manga id
 */
export async function pictures(id: number) {
  return await api(`/manga/${id}/pictures`);
}

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The manga id
 */
export async function recommendations(id: number) {
  return await api(`/manga/${id}/recommendations`);
}

/**
 * Fetches reviews written by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
export async function reviews(id: number, page = 1) {
  return await api<Reviews>(`/manga/${id}/reviews/${page}`);
}

/**
 * Fetches statistical information related to the item
 *
 * @param id - The manga id
 */
export async function stats(id: number) {
  return await api<Stats>(`/manga/${id}/stats`);
}

/**
 * Fetches latest list updates made by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
export async function userUpdates(id: number, page = 1) {
  return await api<UserUpdates>(`/manga/${id}/userupdates/${page}`);
}

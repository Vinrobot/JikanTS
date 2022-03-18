// Interfaces
import { Season, Seasons } from "./interfaces/season/Season";
import { SeasonArchive } from "./interfaces/season/SeasonArchive";
import { SeasonLater } from "./interfaces/season/SeasonLater";

// Utils
import { api } from "./utils";

/**
 * Fetches anime of the specified season
 *
 * @param year - The wanted year
 * @param season - The wanted season
 */
export async function anime(year: number, season: Seasons) {
  return await api<Season>(`/season/${year}/${season}`);
}

/**
 * Feteches all the years & their respective seasons that can be parsed from MyAnimeList
 */
export async function archive() {
  return await api<SeasonArchive>("/season/archive");
}

/**
 * Fetches anime that have been announced for the upcoming seasons
 */
export async function later() {
  return await api<SeasonLater>("/season/later");
}

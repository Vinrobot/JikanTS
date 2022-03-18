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
const anime = async (year: number, season: Seasons) => {
  const result = await api(`/season/${year}/${season}`);

  return result as Season;
};

/**
 * Feteches all the years & their respective seasons that can be parsed from MyAnimeList
 */
const archive = async () => {
  const result = await api("/season/archive");

  return result as SeasonArchive;
};

/**
 * Fetches anime that have been announced for the upcoming seasons
 */
const later = async () => {
  const result = await api("/season/later");

  return result as SeasonLater;
};

export default {
  anime,
  archive,
  later
};

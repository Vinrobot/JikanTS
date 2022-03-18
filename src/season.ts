// Interfaces
import { Season, Seasons } from "./interfaces/season/Season";
import { SeasonArchive } from "./interfaces/season/SeasonArchive";
import { SeasonLater } from "./interfaces/season/SeasonLater";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches anime of the specified season
 *
 * @param year - The wanted year
 * @param season - The wanted season
 */
const anime = async (year: number, season: Seasons) => {
  try {
    const result = await queue.add(
      async () => await api(`/season/${year}/${season}`)
    );

    return result as Season;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Feteches all the years & their respective seasons that can be parsed from MyAnimeList
 */
const archive = async () => {
  try {
    const result = await queue.add(async () => await api("/season/archive"));

    return result as SeasonArchive;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches anime that have been announced for the upcoming seasons
 */
const later = async () => {
  try {
    const result = await queue.add(async () => await api("/season/later"));

    return result as SeasonLater;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  anime,
  archive,
  later
};

// Interfaces
import { Days, Schedule } from "./interfaces/schedule/Schedule";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches anime schedule of the week or specified day
 */
const anime = async (day: Days = "monday") => {
  try {
    const result = await queue.add(async () => await api(`/schedule/${day}`));

    return result as Schedule;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  anime
};

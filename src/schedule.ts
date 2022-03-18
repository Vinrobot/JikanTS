// Interfaces
import { Days, Schedule } from "./interfaces/schedule/Schedule";

// Utils
import { api } from "./utils";

/**
 * Fetches anime schedule of the week or specified day
 */
const anime = async (day: Days = "monday") => {
  const result = await api(`/schedule/${day}`);

  return result as Schedule;
};

export default {
  anime
};

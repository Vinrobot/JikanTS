// Interfaces
import { Days, Schedule } from "./interfaces/schedule/Schedule";

// Utils
import { api } from "./utils";

/**
 * Fetches anime schedule of the week or specified day
 */
const anime = async (day: Days = "monday") => {
  return await api<Schedule>(`/schedule/${day}`);
};

export default {
  anime
};

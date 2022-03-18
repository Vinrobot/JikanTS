// Interfaces
import { Periods, Status, Types } from "./interfaces/meta/Meta";

// Utils
import { api } from "./utils";

/**
 * Requests related to meta information regarding the Jikan REST Instance
 *
 * @param type - The type you're searching for
 * @param period - The period you're searching for
 * @param offset - 1,000 requests are shown per page, you can use the offset to show more
 */
export async function requests(
  type: Types = "anime",
  period: Periods = "monthly",
  offset = 1000
) {
  return await api(`/meta/requests/${type}/${period}/${offset}`);
}

/**
 * Fetches the status of the Jikan REST API
 */
export async function status() {
  return await api<Status>("/meta/status");
}

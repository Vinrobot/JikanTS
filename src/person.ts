// Utils
import { api } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
export async function pictures(id: number) {
  return await api(`/person/${id}/pictures`);
}

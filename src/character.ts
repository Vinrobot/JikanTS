// Interfaces
import { Pictures } from "./interfaces/character/Pictures";

// Utils
import { api } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The character id
 */
export async function pictures(id: number) {
  return await api<Pictures>(`/character/${id}/pictures`);
}

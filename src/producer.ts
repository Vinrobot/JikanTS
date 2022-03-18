// Interfaces
import { Producer } from "./interfaces/producer/Producer";

// Utils
import { api } from "./utils";

/**
 * Fetches anime by the specified Producer/Studio/Licensor
 *
 * @param id - The producer id
 */
export async function get(id: number, page = 1) {
  return await api<Producer>(`/producer/${id}/${page}`);
}

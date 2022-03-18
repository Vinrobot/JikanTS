// Interfaces
import { Magazine } from "./interfaces/magazine/Magazine";

// Utils
import { api } from "./utils";

/**
 * Fetches manga by the specified Magazine/Serializer/Publisher
 *
 * @param id - The magazine id
 */
export async function get(id: number, page = 1) {
  return await api<Magazine>(`/magazine/${id}/${page}`);
}

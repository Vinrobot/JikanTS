// Interfaces
import { Producer } from "./interfaces/producer/Producer";

// Utils
import { api } from "./utils";

/**
 * Fetches anime by the specified Producer/Studio/Licensor
 *
 * @param id - The producer id
 */
const get = async (id: number, page: number = 1) => {
  return await api<Producer>(`/producer/${id}/${page}`);
};

export default {
  get
};

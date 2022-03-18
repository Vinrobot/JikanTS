// Interfaces
import { Producer } from "./interfaces/producer/Producer";

// Utils
import { api, Logger } from "./utils";

/**
 * Fetches anime by the specified Producer/Studio/Licensor
 *
 * @param id - The producer id
 */
const get = async (id: number, page: number = 1) => {
  try {
    const result = await api(`/producer/${id}/${page}`);

    return result as Producer;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  get
};

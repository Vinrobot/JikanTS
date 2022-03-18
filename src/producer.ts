// Interfaces
import { Producer } from "./interfaces/producer/Producer";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches anime by the specified Producer/Studio/Licensor
 *
 * @param id - The producer id
 */
const get = async (id: number, page: number = 1) => {
  try {
    const result = await queue.add(
      async () => await api(`/producer/${id}/${page}`)
    );

    return result as Producer;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  get
};

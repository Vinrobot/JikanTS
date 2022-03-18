// Interfaces
import { Pictures } from "./interfaces/character/Pictures";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The character id
 */
const pictures = async (id: number) => {
  try {
    const result = await queue.add(
      async () => await api(`/character/${id}/pictures`)
    );

    return result as Pictures;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  pictures
};

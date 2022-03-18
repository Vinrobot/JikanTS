// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
  try {
    const result = await queue.add(
      async () => await api(`/person/${id}/pictures`)
    );

    return result;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  pictures
};

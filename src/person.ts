// Utils
import { api, Logger } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
  try {
    const result = await api(`/person/${id}/pictures`);

    return result;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  pictures
};

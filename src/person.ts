// Utils
import { api } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
  const result = await api(`/person/${id}/pictures`);

  return result;
};

export default {
  pictures
};

// Utils
import { api } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
  return await api<unknown>(`/person/${id}/pictures`);
};

export default {
  pictures
};

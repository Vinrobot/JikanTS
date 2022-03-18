// Interfaces
import { Pictures } from "./interfaces/character/Pictures";

// Utils
import { api } from "./utils";

/**
 * Fetches pictures related to the item
 *
 * @param id - The character id
 */
const pictures = async (id: number) => {
  return await api<Pictures>(`/character/${id}/pictures`);
};

export default {
  pictures
};

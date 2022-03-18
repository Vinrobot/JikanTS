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
  const result = await api(`/character/${id}/pictures`);

  return result as Pictures;
};

export default {
  pictures
};

// Interfaces
import { Magazine } from "./interfaces/magazine/Magazine";

// Utils
import { api } from "./utils";

/**
 * Fetches manga by the specified Magazine/Serializer/Publisher
 *
 * @param id - The magazine id
 */
const get = async (id: number, page: number = 1) => {
  const result = await api(`/magazine/${id}/${page}`);

  return result as Magazine;
};

export default {
  get
};

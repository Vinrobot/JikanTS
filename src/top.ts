// Interfaces
import { Result, SubTypes, Types } from "./interfaces/top/Top";

// Utils
import { api } from "./utils";

/**
 * Fetches top items on MyAnimeList
 *
 * @param type - Top items of this type
 * @param page - The Top page on MyAnimeList is paginated offers 50 items per page
 * @param subType - Top items of this subtype
 */
const items = async (
  type: Types = "anime",
  page: number = 1,
  subType?: SubTypes
) => {
  let url = `/top/${type}/${page}`;
  if (subType) {
    url += `/${subType}`;
  }

  const result = await api(url);

  return result as Result;
};

export default {
  items
};

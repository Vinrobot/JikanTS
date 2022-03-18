// Interfaces
import { Filters, Search, SearchTypes } from "./interfaces/search/Search";

// Utils
import { api, baseUrl, Logger, queue } from "./utils";

/**
 * Search method
 *
 * @param query - The query you want to search
 * @param type - Specify where to search
 * @param page - The page number of the results
 * @param filters - The list of filters to add
 */
const search = async (
  query: string,
  type: SearchTypes,
  page: number = 1,
  filters?: Filters
) => {
  try {
    const url = new URL(`/search/${type}?q=${query}&page=${page}`, baseUrl);

    if (filters) {
      if (filters.end_date) {
        filters.end_date = new Date(filters.end_date).toISOString();
      }

      if (filters.start_date) {
        filters.start_date = new Date(filters.start_date).toISOString();
      }

      Object.entries(filters).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const { body } = await queue.add(
      async () => await api(`${url.pathname}${url.search}`)
    );

    return body as Search;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  search
};

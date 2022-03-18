import PMemoize from "p-memoize";
import PQueue from "p-queue";
import LRU from "quick-lru";

export const BASE_URL = "https://api.jikan.moe/v3";

const QUEUE: PQueue = new PQueue({ concurrency: 2 });

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(BASE_URL + url, {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "JikanClient@1.0.0",
    },
    method: "GET",
    mode: "cors",
  });
  return (await response.json()) as T;
}

const cachedFetchJson = PMemoize(fetchJson, {
  cache: new LRU({
    maxSize: 1000,
  }),
});

export async function api<T>(url: string): Promise<T> {
  return await QUEUE.add(async () => await cachedFetchJson<T>(url));
}

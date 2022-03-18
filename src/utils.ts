// Imports
import fetch from "cross-fetch";
import PMemoize from "p-memoize";
import PQueue from "p-queue";
import LRU from "quick-lru";

// package.json
import pkg from "../package.json";

// Constants
export const baseUrl = "https://api.jikan.moe/v3";
export const queue = new PQueue({ concurrency: 2 });

async function fetchJson<T = any>(url: string): Promise<T> {
  const request: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": `${pkg.name} / ${pkg.version} (${pkg.repository.url})`
    },
    method: "GET",
    mode: "cors"
  };
  const response = await fetch(baseUrl + url, request);
  return (await response.json()) as T;
}

// Memoized http client
const cachedFetchJson = PMemoize(fetchJson, {
  cache: new LRU({
    maxSize: 1000
  })
});

export async function api<T>(url: string): Promise<T> {
  return await queue.add(async () => await cachedFetchJson<T>(url));
}

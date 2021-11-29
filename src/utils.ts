// Imports
import fetch from "cross-fetch";
import PMemoize from "p-memoize";
import PQueue from "p-queue";
import pino from "pino";
import LRU from "quick-lru";

// package.json
import pkg from "../package.json";

// Constants
export const baseUrl = "https://api.jikan.moe/v3";
export const queue = new PQueue({ concurrency: 2 });

async function fetchJson<T = any>(url: string): Promise<{ body: T }> {
  const request: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": `${pkg.name} / ${pkg.version} (${pkg.repository.url})`
    },
    method: "GET",
    mode: "cors"
  };
  const response = await fetch(baseUrl + url, request);
  const json = (await response.json()) as T;
  return { body: json };
}

// Memoized http client
export const api = PMemoize(fetchJson, { cache: new LRU({ maxSize: 1000 }) });

// Fast JSON logger
export const Logger = pino({
  name: "jikants",
  prettyPrint: true
});

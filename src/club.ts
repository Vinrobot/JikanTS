// Interfaces
import { Info, Members } from "./interfaces/club/Club";

// Utils
import { api } from "./utils";

export async function info(id: number) {
  return await api<Info>(`/club/${id}`);
}

export async function members(id: number, page = 1) {
  return await api<Members>(`/club/${id}/members/${page}`);
}

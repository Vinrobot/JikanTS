// Interfaces
import { Info, Members } from "./interfaces/club/Club";

// Utils
import { api } from "./utils";

const info = async (id: number) => {
  return await api<Info>(`/club/${id}`);
};

const members = async (id: number, page: number = 1) => {
  return await api<Members>(`/club/${id}/members/${page}`);
};

export default {
  info,
  members
};

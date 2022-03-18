// Interfaces
import { Info, Members } from "./interfaces/club/Club";

// Utils
import { api } from "./utils";

const info = async (id: number) => {
  const result = await api(`/club/${id}`);

  return result as Info;
};

const members = async (id: number, page: number = 1) => {
  const result = await api(`/club/${id}/members/${page}`);

  return result as Members;
};

export default {
  info,
  members
};

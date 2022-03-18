// Interfaces
import { Info, Members } from "./interfaces/club/Club";

// Utils
import { api, Logger } from "./utils";

const info = async (id: number) => {
  try {
    const result = await api(`/club/${id}`);

    return result as Info;
  } catch (error) {
    Logger.error(error);
  }
};

const members = async (id: number, page: number = 1) => {
  try {
    const result = await api(`/club/${id}/members/${page}`);

    return result as Members;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  info,
  members
};

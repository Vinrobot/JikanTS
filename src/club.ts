// Interfaces
import { Info, Members } from "./interfaces/club/Club";

// Utils
import { api, Logger, queue } from "./utils";

const info = async (id: number) => {
  try {
    const { body } = await queue.add(async () => await api(`/club/${id}`));

    return body as Info;
  } catch (error) {
    Logger.error(error);
  }
};

const members = async (id: number, page: number = 1) => {
  try {
    const { body } = await queue.add(
      async () => await api(`/club/${id}/members/${page}`)
    );

    return body as Members;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  info,
  members
};

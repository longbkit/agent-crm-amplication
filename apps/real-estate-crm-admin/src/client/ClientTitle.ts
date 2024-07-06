import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "id";

export const ClientTitle = (record: TClient): string => {
  return record.id?.toString() || String(record.id);
};

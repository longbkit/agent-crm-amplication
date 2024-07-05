import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "name";

export const PropertyTitle = (record: TProperty): string => {
  return record.name?.toString() || String(record.id);
};

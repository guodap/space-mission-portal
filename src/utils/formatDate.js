import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../constants/constants";

/**
 * Converts a timestamp to a date of "D MMMM, YYYY" format.
 * @param {string} timestamp - The timestamp to convert. A string representing a date or time (e.g., "2024-06-28", "2024-06-28T12:00:00").
 * @return {string} The date in "D MMMM, YYYY" format.
 */
export const convertTimestampToDate = (timestamp) => {
  if (!timestamp || typeof timestamp !== "string") return "";

  const parsedTimestamp = dayjs(timestamp);
  if (!parsedTimestamp.isValid()) return "";

  return parsedTimestamp.format(DEFAULT_DATE_FORMAT);
};

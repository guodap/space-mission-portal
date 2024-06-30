import axios from "axios";

import {
  API_URL,
  SUCCESS_LABEL,
  FAILURE_LABEL,
  ERROR_MESSAGE_FETCH_FAILED,
} from "../constants/constants";
/**
 * Retrieves, formats required launch data from the provided URL and adds fallback values.
 * @return {Promise<Array<object>>} An array of formatted launch data objects.
 */
export const getFormattedLaunchData = async () => {
  const launchData = await getData(API_URL);

  const filteredLaunchData = launchData.map(
    ({
      id = "",
      name = "",
      details = "",
      date_local = "",
      links = {},
      success = "",
    } = {}) => ({
      id,
      name,
      description: details,
      date: date_local,
      imagePath: links?.patch?.small,
      link: links?.webcast,
      status: success ? SUCCESS_LABEL : FAILURE_LABEL,
    })
  );

  return filteredLaunchData;
};

/**
 * Fetches data from an API endpoint.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise<Array<object>>} - A promise that resolves to the data fetched from the API endpoint or an empty array if the request fails.
 * @throws {Error} - Throws an error if the request fails.
 */
const getData = async (url) => {
  if (typeof url !== "string" || !url.trim()) return [];

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw new Error(ERROR_MESSAGE_FETCH_FAILED(url, e));
  }
};

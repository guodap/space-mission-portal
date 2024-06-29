import axios from "axios";

/**
 * Fetches data from an API endpoint.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise<Array<object>>} - A promise that resolves to the data fetched from the API endpoint or an empty array if the request fails.
 * @throws {Error} - Throws an error if the request fails.
 */
export const getData = async (url) => {
  if (typeof url !== "string" || !url.trim()) return [];

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw new Error(`Failed to fetch data from ${url}: ${e}`);
  }
};

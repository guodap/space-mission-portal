import axios from "axios";

export const getData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    console.log(`An error occurred while getting data from ${url}: ${e}`);
    throw e;
  }
};

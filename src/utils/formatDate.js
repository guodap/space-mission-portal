import dayjs from "dayjs";

const DEFAULT_DATE_FORMAT = "D MMMM, YYYY";

export const timestampToDate = (timestamp, format = DEFAULT_DATE_FORMAT) => {
  try {
    const date = dayjs(timestamp);
    return date.format(format);
  } catch (e) {
    console.log(
      `An error occurred while converting timestamp ${timestamp} to date of format ${format}: ${e}`
    );
    return null;
  }
};

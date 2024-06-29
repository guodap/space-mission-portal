import { convertTimestampToDate } from "../../utils/formatDate";

describe("convertTimestampToDate", () => {
  test("should return the formatted date string", () => {
    const timestamp = 1627776000000;
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toBe("1 August, 2021");
  });

  test("should handle a timestamp with a different time zone", () => {
    const timestamp = Date.UTC(2021, 6, 1); // July 1, 2021 in UTC
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toBe("1 July, 2021");
  });

  test("should handle a valid timestamp from the future", () => {
    const timestamp = Date.now() + 1000 * 60 * 60 * 24; // one day from now
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toMatch("30 June, 2024");
  });

  test("should handle a valid timestamp from the past", () => {
    const timestamp = Date.now() - 1000 * 60 * 60 * 24; // one day ago
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toMatch("28 June, 2024");
  });

  test("should handle a timestamp with a different date format", () => {
    const timestamp = 1627776000000; // July 1, 2021
    const formattedDate = convertTimestampToDate(timestamp, "MM/DD/YYYY");
    expect(formattedDate).toBe("1 August, 2021");
  });

  test("should handle an invalid timestamp", () => {
    const timestamp = "invalid timestamp";
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toBe("");
  });
});

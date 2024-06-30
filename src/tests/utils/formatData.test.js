import convertTimestampToDate from "../../utils/formatDate";

describe("convertTimestampToDate", () => {
  test("should return the formatted date string", () => {
    const timestamp = "2020-03-06T23:50:31-05:00";
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toBe("6 March, 2020");
  });

  test("should handle an invalid timestamp", () => {
    const timestamp = "invalid timestamp";
    const formattedDate = convertTimestampToDate(timestamp);
    expect(formattedDate).toBe("");
  });
});

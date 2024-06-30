import { sortByTimestamp } from "../../utils/sortData";

describe("sortByTimestamp", () => {
  test.skip("should sort data in descending order by default", () => {
    const data = [
      { date_local: "2020-03-06T23:50:31-05:00" },
      { date_local: "2020-03-08T23:50:31-05:00" },
      { date_local: "2020-03-07T23:50:31-05:00" },
    ];
    const sortedData = sortByTimestamp(data);
    expect(sortedData).toEqual([
      { date_local: "2021-07-01" },
      { date_local: "2021-06-01" },
      { date_local: "2021-05-01" },
    ]);
  });

  test.skip("should sort data in ascending order if order is 'ascending'", () => {
    const data = [
      { date_local: "2021-07-01" },
      { date_local: "2021-06-01" },
      { date_local: "2021-05-01" },
    ];
    const sortedData = sortByTimestamp(data, "ascending");
    expect(sortedData).toEqual([
      { date_local: "2021-05-01" },
      { date_local: "2021-06-01" },
      { date_local: "2021-07-01" },
    ]);
  });

  test("should return an empty array if data is not an array or is empty", () => {
    expect(sortByTimestamp()).toEqual([]);
    expect(sortByTimestamp([])).toEqual([]);
    expect(sortByTimestamp([], "ascending")).toEqual([]);
  });

  test("should handle invalid date formats", () => {
    const data = [{ date_local: "invalid date" }, { date_local: "2021-07-01" }];
    const sortedData = sortByTimestamp(data);
    expect(sortedData).toEqual([
      { date_local: "invalid date" },
      { date_local: "2021-07-01" },
    ]);
  });
});

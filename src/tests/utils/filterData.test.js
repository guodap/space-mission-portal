import { filterItemsByName } from "../../utils/filterData";

describe("filterItemsByName function", () => {
  test("should return an empty array if data is not an array", () => {
    const nonArrayData = "not an array";
    const searchTerm = "b";
    const filteredData = filterItemsByName(nonArrayData, searchTerm);
    expect(filteredData).toEqual([]);
  });

  test("should return an empty array if searchTerm is not a string", () => {
    const data = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
    const nonStringSearchTerm = 123;
    const filteredData = filterItemsByName(data, nonStringSearchTerm);
    expect(filteredData).toEqual([]);
  });
  test("should return an empty array if data is empty", () => {
    const emptyData = [];
    const searchTerm = "b";
    const filteredData = filterItemsByName(emptyData, searchTerm);
    expect(filteredData).toEqual([]);
  });

  test("should filter out results where name is not a string", () => {
    const data = [{ name: 0 }, { name: [] }, { name: "Charlie" }];
    const searchTerm = "char";
    const filteredData = filterItemsByName(data, searchTerm);
    expect(filteredData).toEqual([{ name: "Charlie" }]);
  });

  test("should return an empty array if searchTerm matches no items", () => {
    const data = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
    const searchTerm = "dave";
    const filteredData = filterItemsByName(data, searchTerm);
    expect(filteredData).toEqual([]);
  });

  test("should filter data by name correctly in the happy path (case insensitive)", () => {
    const data = [{ name: "Alice" }, { name: "BoB" }, { name: "Charlie" }];
    const searchTerm = "b";
    const filteredData = filterItemsByName(data, searchTerm);
    expect(filteredData).toEqual([{ name: "BoB" }]);
  });

  test("should return all items if searchTerm matches all items", () => {
    const data = [{ name: "Alice" }, { name: "Alex" }, { name: "Adam" }];
    const searchTerm = "a";
    const filteredData = filterItemsByName(data, searchTerm);
    expect(filteredData).toEqual(data);
  });
});

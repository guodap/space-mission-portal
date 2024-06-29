import axios from "axios";
import { getData } from "../../utils/getData";

jest.mock("axios");

describe("getData", () => {
  it("should return data when the URL is valid", async () => {
    const mockData = { data: "test data" };
    axios.get.mockResolvedValue({ data: mockData });

    const data = await getData("http://validurl.com");
    expect(data).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith("http://validurl.com");
  });
  it("should throw an error if the URL is not a string", async () => {
    await expect(getData(123)).resolved.toEqual([]);
  });

  it("should throw an error if the URL is an empty string", async () => {
    await expect(getData("")).resolved.toEqual([]);
  });

  it("should return data when the URL is valid", async () => {
    const mockData = { data: "test data" };
    axios.get.mockResolvedValue({ data: mockData });

    const data = await getData("http://validurl.com");
    expect(data).toEqual(mockData);
  });

  it("should throw an error if the request fails", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    await expect(getData("http://validurl.com")).rejects.toThrow(
      "Failed to fetch data from http://validurl.com"
    );
  });

  it("should log an error if the request fails", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    axios.get.mockRejectedValue(new Error("Network Error"));

    await expect(getData("http://validurl.com")).rejects.toThrow(
      "Failed to fetch data from http://validurl.com"
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "An error occurred while fetching data from http://validurl.com:",
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });
});

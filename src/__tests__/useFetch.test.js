import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";
import useFetch from "../Hooks/useFetch";

describe("Async app functionality", () => {
  // Setup fetch functionality before each test
  beforeAll(() => {
    global.fetch = fetch;
  });
  // Clear fetch mock functionality after each test
  afterAll(() => {
    fetchMock.restore();
  });

  it("Should return the correct information upon initial execution", () => {
    const { result } = renderHook(() => useFetch("test.com"));
    expect(result.current).toEqual([null, true, false]);
  });

  it("Should return data with a successful request", async () => {
    fetchMock.mock("test1.com", {
      returnedData: "foo",
    });
    let response;
    await act(async () => {
      const { result } = renderHook(() => useFetch("test1.com"));
      response = result;
    });
    // First loading is false
    expect(response.all[0]).toEqual([null, false, false]);
    // then loading is true
    expect(response.all[1]).toEqual([null, true, false]);
    // Finally response is returned
    expect(response.current).toEqual([
      {
        returnedData: "foo",
      },
      false,
      false,
    ]);
  });

  it("Should return error as true if fetch request fails", async () => {
    fetchMock.mock("test2.com", 500);
    let response;
    await act(async () => {
      const { result } = renderHook(() => useFetch("test2.com"));
      response = result;
    });
    // First loading is false
    expect(response.all[0]).toEqual([null, false, false]);
    // then loading is true
    expect(response.all[1]).toEqual([null, true, false]);
    // Finally hasError is true
    expect(response.current).toEqual([null, false, true]);
  });
});

import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";
import useFetch from "../Hooks/useFetch";

beforeAll(() => {
  global.fetch = fetch;
});
afterAll(() => {
  fetchMock.restore();
});

it("Should return the correct information upon initial execution", () => {
  const { result } = renderHook(() => useFetch("test.com"));
  expect(result.current).toEqual([null, true, false]);
});

it("Should return data with a successful request", async () => {
  fetchMock.mock("test.com", {
    returnedData: "foo",
  });
  let response;
  await act(async () => {
    const { result } = renderHook(() => useFetch("test.com"));
    response = result;
  });
  expect(response.current).toEqual([
    {
      returnedData: "foo",
    },
    false,
    false,
  ]);
});

it("Should return error as true if api error", async () => {
  fetchMock.mock("test2.com", 500);
  let response;
  await act(async () => {
    const { result } = renderHook(() => useFetch("test2.com"));
    response = result;
  });
  expect(response.current).toEqual([null, false, true]);
});

import { describe, expect, test } from "vite-plus/test";

test("One", () => {
  expect(true).toBe(true);
});

describe("group", () => {
  test("Two", () => {
    expect(true).toBe(true);
  });

  test("Three", () => {
    expect(true).toBe(true);
  });

  test("Four", () => {
    expect(true).toBe(true);
  });

  test("Five", () => {
    expect(true).toBe(true);
  });

  test("Six", () => {
    expect(true).toBe(true);
  });

  test("Seven", () => {
    expect(true).toBe(true);
  });
});

test("Eight", () => {
  expect(true).toBe(true);
});

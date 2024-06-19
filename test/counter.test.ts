import { Counter } from "../src/counter";

test("Test constructor - empty input", () => {
  let counter = new Counter([]);
  expect(counter.count.length).toBe(0);
});

test("Test constructor - null input", () => {
  let counter = new Counter([]);
  expect(counter.count.length).toBe(0);
});

test("Test constructor - average input", () => {
  let counter = new Counter(["a", "b", "b", "c"]);
  expect(counter.count).toStrictEqual([
    { phoneme: "a", numOfAppearance: 0 },
    { phoneme: "b", numOfAppearance: 0 },
    { phoneme: "b", numOfAppearance: 0 },
    { phoneme: "c", numOfAppearance: 0 },
  ]);
});

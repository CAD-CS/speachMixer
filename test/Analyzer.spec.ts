import { Analyzer } from "../src/Analyzer";

let analyzer: Analyzer;

test("Test find - empty word", () => {
  expect(Analyzer.find("", [])).toStrictEqual([]);
});

test("Test find - empty statistics", () => {
  expect(Analyzer.find("a", [])).toStrictEqual([{ value: "a", num: 1 }]);
});

test("Test find - word not found", () => {
  expect(Analyzer.find("a", [{ value: "b", num: 2 }])).toStrictEqual([
    { value: "b", num: 2 },
    { value: "a", num: 1 },
  ]);
});

test("Test find - word found", () => {
  expect(Analyzer.find("a", [{ value: "a", num: 2 }])).toStrictEqual([
    { value: "a", num: 3 },
  ]);
});

test("Test count - empty data", () => {
  expect(Analyzer.count([], [])).toStrictEqual([]);
});

test("Test count - empty statistics", () => {
  expect(Analyzer.count(["a", "b"], [])).toStrictEqual([
    { value: "a", num: 1 / 2 },
    { value: "b", num: 1 / 2 },
  ]);
});

test("Test count - all entries the same", () => {
  expect(Analyzer.count(["a", "a", "a", "a"], [])).toStrictEqual([
    { value: "a", num: 1 },
  ]);
});

test("Test count - all different entries", () => {
  expect(Analyzer.count(["a", "b", "c", "d"], [])).toStrictEqual([
    { value: "a", num: 1 / 4 },
    { value: "b", num: 1 / 4 },
    { value: "c", num: 1 / 4 },
    { value: "d", num: 1 / 4 },
  ]);
});

test("Test count - complex case", () => {
  expect(Analyzer.count(["a", "a", "b", "c"], [])).toStrictEqual([
    { value: "a", num: 2 / 4 },
    { value: "b", num: 1 / 4 },
    { value: "c", num: 1 / 4 },
  ]);

});

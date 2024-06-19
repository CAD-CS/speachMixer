import Parser from "../src/Parser";

const parser = new Parser();
let res: string[];

test("Test parse() - empty", () => {
  res = parser.parse("");
  expect(res).toStrictEqual([]);
});

test("Test parse() - all whitespace", () => {
  res = parser.parse("  ");
  expect(res).toStrictEqual([]);
});

test("Test parse() - start with white space", () => {
  res = parser.parse(" abcd e f gh");
  expect(res).toStrictEqual(["abcd", "e", "f", "gh"]);
});

test("Test parse() - end with white space", () => {
  res = parser.parse("abcd e f gh ");
  expect(res).toStrictEqual(["abcd", "e", "f", "gh"]);
});

test("Test parse() - complex/average case", () => {
  res = parser.parse(" abcd e  f gh ");
  expect(res).toStrictEqual(["abcd", "e", "f", "gh"]);
});

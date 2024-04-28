const { sum } = require("./intro");

test("Sum shuld return sum of two values", () => {
  expect(sum(1, 2)).toBe(3);
});

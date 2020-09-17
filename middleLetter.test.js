import getMiddle from "./middleLetter.js";

test("should return a middle letter if the given word's length is odd", () => {
  expect(getMiddle("testing")).toBe("t");
});

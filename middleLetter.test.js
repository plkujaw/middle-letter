import getMiddle from "./middleLetter.js";

test("should return the middle letter if the given word's length is odd", () => {
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("A")).toBe("A");
});
test("should return the middle 2 letters if the word's length is even", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("middle")).toBe("dd");
  expect(getMiddle("of")).toBe("of");
});

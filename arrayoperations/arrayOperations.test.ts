import {
    squareWithFor,
    squareWithForEach,
    concatenateWithJoin,
    sortArray,
    getFirstTwoElements,
    filterEvenNumbers,
  } from "./arrayOperations";
  
    test("calculate the square of the elements with for", () => {
      const input = [3, 5, 7, 3, 8, 9, 1];
      const expected = [9, 25, 49, 9, 64, 81, 1];
      expect(squareWithFor(input)).toEqual(expected);
    });
  
    test("calculate the square of the elements with forEach", () => {
      const input = [3, 5, 7, 3, 8, 9, 1];
      const expected = [9, 25, 49, 9, 64, 81, 1];
      expect(squareWithForEach(input)).toEqual(expected);
    });
  
    test("concatenate strings with a space", () => {
      const input = ["Arrays", "com", "TypeScript"];
      const expected = "Arrays com TypeScript";
      expect(concatenateWithJoin(input)).toBe(expected);
    });
  
    test("sort the elements of the array", () => {
      const input = ["carro", "boneco", "ave", "lapis"];
      const expected = ["ave", "boneco", "carro", "lapis"];
      expect(sortArray(input)).toEqual(expected);
    });
  
    test("get the first two elements of the array", () => {
      const input = [2, 4, 6, 2, 8, 9, 5];
      const expected = [2, 4];
      expect(getFirstTwoElements(input)).toEqual(expected);
    });
  
    test("filter even numbers of the array", () => {
      const input = [8, 3, 9, 5, 6, 12];
      const expected = [8, 6, 12];
      expect(filterEvenNumbers(input)).toEqual(expected);
    });
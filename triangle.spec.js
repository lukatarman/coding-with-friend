import { Triangle } from "./triangle.js";

describe("Triangle", () => {

  describe("when initialization is successfull", () => {
    let triangle;

    beforeAll(()=> {
      triangle = new Triangle(1, 2, 3);
    });

    it("a valid triangle instance is created", () => {
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("initialization fails", () => {
    let thrownError;

    beforeAll(()=> {
      try {
        new Triangle(-1, 2, 3);
      } catch (error) {
        thrownError = error;
      }
    });

    it("side a is negative and an error is thrown", () => {
      expect(thrownError).toBeInstanceOf(Error);
    });
  });

  describe(".checkIfValidTriangle is called on a triangle with sides 1, 2, 3", () => {
    let result;

    beforeAll(()=> {
      const triangle = new Triangle(1, 2, 3);
      result = triangle.checkIfValidTriangle();
    });

    it("returns true", () => {
      expect(result).toBeTruthy();
    });
  });

  xdescribe(".calculateArea", () => {

  });

  xdescribe(".isRightTriangle", () => {

  });
});

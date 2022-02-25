import { Triangle } from "./triangle.js";

describe("Triangle", () => {
  describe("when initialization is successfull", () => {
    let triangle;

    beforeAll(() => {
      triangle = new Triangle(1, 2, 3);
    });

    it("a valid triangle instance is created", () => {
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("initialization fails", () => {
    describe("when side a is negative", () => {
      let error; // given side a = -1 , side b = 2, side c = 3;

      beforeAll(() => {
        try {
          new Triangle(-1, 2, 3); // when
        } catch (err) {
          error = err;
        }
      });

      // then
      it("will throw an error", () => {
        expect(error).toBeInstanceOf(Error);
      });

      it("the error message is 'side a can not be negative or zero'", () => {
        expect(error.message).toBe("side a can not be negative or zero")
      });
    });

    describe("when side b is negative", () => {
      let error;

      beforeAll(() => {
        try {
          new Triangle(1, -2, 3);
        } catch (err) {
          error = err;
        }
      });

      it("will throw an error", () => {
        expect(error).toBeInstanceOf(Error);
      });

      it("the error message is 'side b can not be negative or zero'", () => {
        expect(error.message).toBe("side b can not be negative or zero")
      });
    });

    describe("when side c is negative", () => {
      let error;

      beforeAll(() => {
        try {
          new Triangle(3, 6, -3);
        } catch(err) {
          error = err;
        }
      });

      it("will throw an error", () => {
        expect(error).toBeInstanceOf(Error);
      });

      it("the error message is 'side c can not be negative or zero'", () => {
        expect(error.message).toBe("side c can not be negative or zero")
      });
    });

    describe("when a + b is smaller than c", () => {
      let error;

      beforeAll(() => {
        try{
          new Triangle(3, 4, 9);
        } catch(err) {
          error = err;
        }
      });

      it("will throw an error", () => {
        expect(error).toBeInstanceOf(Error);
      });

      it("the error message is 'This is an impossible triangle.'", () => {
        expect(error.message).toBe("This is an impossible triangle.");
      });
    });

    describe("when a + c is smaller than b", () => {
      let error;

      beforeAll(() => {
        try{
          new Triangle(3, 9, 4);
        } catch(err) {
          error = err;
        }
      });

      it("will throw an error", () => {
        expect(error).toBeInstanceOf(Error);
      });

      it("the error message is 'This is an impossible triangle.'", () => {
        expect(error.message).toBe("This is an impossible triangle.");
      });
    });

    describe("when b + c is smaller than a", () => {
      let error;

      beforeAll(() => {
        try{
          new Triangle(9, 4, 3);
        } catch(err) {
          error = err;
        }
      });

      it("will throw an error", () => {
        expect(error).toBeInstanceOf(Error);
      });

      it("the error message is 'This is an impossible triangle.'", () => {
        expect(error.message).toBe("This is an impossible triangle.");
      });
    });
  });

  xdescribe(".calculateArea", () => {});

  describe(".isRightTriangle returns true", () => {
    describe("when a^2 + b^2 is the same as c^2 then", () => {
      let result;

      beforeAll(() => {
        const triangle = new Triangle(3, 4, 5);
        result = triangle.isRightTriangle();
      });

      it("returns true", () => {
        expect(result).toBeTrue();
      });
    });

    describe("when a^2 + c^2 is the same as b^2 then", () => {
      let result;

      beforeAll(() => {
        const triangle = new Triangle(3, 5, 4);
        result = triangle.isRightTriangle();
      });

      it("returns true", () => {
        expect(result).toBeTrue();
      });
    });

    describe("when c^2 + b^2 is the same as a^2 then", () => {
      let result;

      beforeAll(() => {
        const triangle = new Triangle(5, 3, 4);
        result = triangle.isRightTriangle();
      });

      it("returns true", () => {
        expect(result).toBeTrue();
      });
    });

    describe(
      "when a^2 + b^2 is not equals c^2 and \n" +
      "when b^2 + c^2 is not equals a^2 and \n" +
      "when a^2 + c^2 is not equals b^2 then \n", () => {
      let result;

      beforeAll(() => {
        const triangle = new Triangle(3, 4, 6);
        result = triangle.isRightTriangle();
      });

      it("returns false", () => {
        expect(result).toBeFalse();
      });
    });
  });
});

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
    describe("when side a is smaller than 1", () => {
      let thrownError;

      beforeAll(() => {
        try {
          new Triangle(0, 2, 3);
        } catch (error) {
          thrownError = error;
        }
      });

      it("throws error", () => {
        expect(thrownError.message).toBe("side a can not be negative or zero");
      });
    });

    describe("when side b is smaller than 1", () => {
      let thrownError;

      beforeAll(() => {
        try {
          new Triangle(1, 0, 3);
        } catch (error) {
          thrownError = error;
        }
      });

      it("throws error", () => {
        expect(thrownError.message).toBe("side b can not be negative or zero");
      });
    });

    describe("when side c is smaller than 1", () => {
      let thrownError;

      beforeAll(() => {
        try {
          new Triangle(1, 2, 0);
        } catch (error) {
          thrownError = error;
        }
      });

      it("throws error", () => {
        expect(thrownError.message).toBe("side c can not be negative or zero");
      });
    });

    describe("sides a and b add up to less than side c", () => {
      let thrownError;

      beforeAll(() => {
        try {
          new Triangle(1, 2, 6);
        } catch (error) {
          thrownError = error;
        }
      });

      it("throws error", () => {
        expect(thrownError.message).toBe(
          "sides a and b added cannot be smaller than side c"
        );
      });
    });

    describe("sides a and c add up to less than side b", () => {
      let thrownError;

      beforeAll(() => {
        try {
          new Triangle(1, 6, 2);
        } catch (error) {
          thrownError = error;
        }
      });

      it("throws error", () => {
        expect(thrownError.message).toBe(
          "sides a and c added cannot be smaller than side b"
        );
      });
    });

    describe("sides b and c add up to less than side a", () => {
      let thrownError;

      beforeAll(() => {
        try {
          new Triangle(6, 1, 2);
        } catch (error) {
          thrownError = error;
        }
      });

      it("throws error", () => {
        expect(thrownError.message).toBe(
          "sides b and c added cannot be smaller than side a"
        );
      });
    });

    describe(
      "when side a is more than 0 and \n" +
        "when side b is more than 0 and \n" +
        "when side c is more than 0 and \n" +
        "when sides a and b added are not smaller than side c \n" +
        "when sides a and c added are not smaller than side b \n" +
        "when sides b and c added are not smaller than side a",
      () => {
        let thrownError;

        beforeAll(() => {
          try {
            new Triangle(1, 2, 3);
          } catch (error) {
            thrownError = error;
          }
        });

        it("initialization does not throw error", () => {
          expect(thrownError).toBeUndefined;
        });
      }
    );
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
        "when a^2 + c^2 is not equals b^2 then \n",
      () => {
        let result;

        beforeAll(() => {
          const triangle = new Triangle(3, 4, 6);
          result = triangle.isRightTriangle();
        });

        it("returns false", () => {
          expect(result).toBeFalse();
        });
      }
    );
  });
});

export class Triangle {
  #a;
  #b;
  #c;
  #s;

  constructor(a, b, c) {
    this.#a = a;
    this.#b = b;
    this.#c = c;
    this.#s = (a + b + c) / 2;

    this.checkIfValidTriangle();
  }

  checkIfValidTriangle() {
    const a = this.#a;
    const b = this.#b;
    const c = this.#c;

    if (a <= 0) throw new Error("side a can not be negative or zero");
    if (b <= 0) throw new Error("side b can not be negative or zero");
    if (c <= 0) throw new Error("side c can not be negative or zero");

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("This is an impossible triangle.");
    }
  }

  calculateArea() {
    const a = this.#a;
    const b = this.#b;
    const c = this.#c;

    let area;

    if (a === b && b === c) {
      console.log("This is an equilateral triangle");
      console.log("Attempting to use equilateral calculation...");
      area = this.#useEquilateralCalcualtion();
    } else if (this.#rightTriangleTest()) {
      console.log("This is a RIGHT triangle");
      console.log("Attempting to use right triangle calculation...");
      area = this.#useRightTriangleCalculation();
    } else if (a === b || b === c) {
      console.log("This is a isosceles triangle");
      console.log("Attempting to use isosceles calculation...");
      area = this.#useIsoscelesCalculation();
    } else if (a !== b && b !== c) {
      console.log("This is a scalene triangle");
      console.log("Attempting to use scalene calculation...");
      area = this.#useScaleneCalculation();
    }

    return area;
  }

  #useEquilateralCalcualtion() {
    console.log("Using equilateral calculation");
    this.testCalc();
    return (Math.sqrt(3) / 4) * Math.pow(this.#a, 2);
  }

  #useRightTriangleCalculation() {
    console.log("Using right triangle calculation");

    const a = this.#a;
    const b = this.#b;
    const c = this.#c;

    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
      return 0.5 * a * b;
    } else if (Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2)) {
      return 0.5 * a * c;
    } else if (Math.pow(c, 2) + Math.pow(b, 2) === Math.pow(a, 2)) {
      return 0.5 * c * b;
    }
  }

  #useIsoscelesCalculation() {
    let a;
    let b;
    if (this.#a === this.#b) {
      console.log("A equals B");
      b = this.#a;
      a = this.#c;
    } else if (this.#a === this.#c) {
      console.log("A equals C");
      b = this.#a;
      a = this.#b;
    } else if (this.#c === this.#b) {
      console.log("C equals B");
      b = this.#c;
      a = this.#a;
    }
    console.log(a, b);
    console.log("Using isosceles calculation");
    return 0.5 * a * Math.sqrt(Math.pow(b, 2) - Math.pow(a, 2) / 4);
  }

  #useScaleneCalculation() {
    console.log("Using scalene calculation");
    return Math.sqrt(
      this.#s * (this.#s - this.#a) * (this.#s - this.#b) * (this.#s - this.#c)
    );
  }

  #rightTriangleTest() {
    const a = this.#a;
    const b = this.#b;
    const c = this.#c;

    if (
      Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
      Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
      Math.pow(c, 2) + Math.pow(b, 2) === Math.pow(a, 2)
    ) {
      return true;
    }
  }
}

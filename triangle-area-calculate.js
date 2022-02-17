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
  }

  calculateArea() {
    const a = this.#a;
    const b = this.#b;
    const c = this.#c;

    let area;

    if (a === b && b === c) {
      console.log("This is an equilateral triangle");
      console.log("Attempting to use equi calculation...");
      area = this.#useEquilateralCalcualtion();
    } else if (a === b || b === c) {
      console.log("This is a isosceles triangle");
      console.log("Attempting to use iso calculation...");
      area = this.#useIsoscelesCalculation();
    } else if (a !== b && b !== c) {
      console.log("This is a scalene triangle");
      console.log("Attempting to use sca calculation...");
      area = this.#useScaleneCalculation();
    }

    console.log(area);
    console.log(a);
    console.log(b);

    return area;
  }

  #useEquilateralCalcualtion() {
    console.log("Using equi calculation");
    this.testCalc();
    return (Math.sqrt(3) / 4) * Math.pow(this.#a, 2);
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
    console.log("Using ISO calculation");
    return 0.5 * a * Math.sqrt(Math.pow(b, 2) - Math.pow(a, 2) / 4);
  }

  #useScaleneCalculation() {
    console.log("Using sca calculation");
    return Math.sqrt(
      this.#s * (this.#s - this.#a) * (this.#s - this.#b) * (this.#s - this.#c)
    );
  }
}

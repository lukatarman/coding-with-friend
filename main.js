import { Triangle } from "./triangle-area-calculate.js";
import { myFunc } from "./test.js";

const sTriangle = new Triangle(3, 6, 7);
const eTriangle = new Triangle(5, 5, 5);
const iTriangle = new Triangle(6, 4, 6);
const rTriangle = new Triangle(5, 3, 4);

console.log(sTriangle.calculateArea());
rTriangle.calculateArea();

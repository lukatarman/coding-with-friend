import { Triangle } from "./triangle.js";

function startTesting() {
  console.log('-------TESTING-START-----');
}

function endTesting() {
  console.log('-------TESTING-END-----');
}

function runTests(...tests) {
  startTesting();
  tests.forEach((t, i) => {
    console.log(`--------TEST-${i + 1}--------`);
    t()
  });
  endTesting();
}

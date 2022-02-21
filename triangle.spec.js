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

function calculateAreaResultTruthyTest() {
  const functionName = 'calculateAreaResultTruthyTest';
  const firstTri = new Triangle(3, 6, 7);

  if (firstTri.calculateArea()) {
    console.log(functionName, ' test passed');
  } else {
    console.log(functionName, ' test failed');
  }
}

function calculateAreaResultFalsyTest() {
  const functionName = 'calculateAreaResultFalsyTest';
  const firstTri = new Triangle(-3, 6, 7);

  if (firstTri.calculateArea()) {
    console.log(functionName, ' test passed');
  } else {
    console.log(functionName, ' test failed');
  }
}


runTests(
  calculateAreaResultTruthyTest,
  calculateAreaResultFalsyTest,
);

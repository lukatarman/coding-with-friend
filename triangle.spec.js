import { Triangle } from "./triangle.js";

function startTesting() {
  console.log("-------TESTING-START-----");
}

function endTesting() {
  console.log("-------TESTING-END-----");
}

function runTests(...tests) {
  startTesting();
  tests.forEach((t, i) => {
    console.log(`--------TEST-${i + 1}--------`);
    console.log(`Function under test: ${t.name}`);
    console.log(`Output: ...`);

    t();

    if (i + 1 < tests.length) console.log("\n");
  });
  endTesting();
}

function calculateAreaResultTruthyTest() {
  const firstTri = new Triangle(100, 6, 7);

  if (firstTri.calculateArea()) {
    console.log("test passed");
  } else {
    console.log("test failed");
  }
}

function calculateAreaResultFalsyTest() {
  const firstTri = new Triangle(4, 6, 7);

  if (firstTri.calculateArea()) {
    console.log("test passed");
  } else {
    console.log("test failed");
  }
}

runTests(calculateAreaResultTruthyTest, calculateAreaResultFalsyTest);

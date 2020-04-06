
const functions = require('./sumifier');

const testResults = {};

test("Testing if 1 + 2 is 3", () => {
  const test_sum__result = functions.sum(1,2);
  testResults.sumResult = test_sum__result;
  expect(test_sum__result).toBe(3);
})

test("Testing randomizer", () =>{
  const test_randomizer__result = functions.randomizer(5);
  testResults.randomizerResult = test_randomizer__result;
  expect(test_randomizer__result).toBeGreaterThanOrEqual(0)
  expect(test_randomizer__result).toBeLessThanOrEqual(10);
})

test("Testing if 4 x 7 is 28", () => {
  const test_prod__result = functions.prod(4,7);
  testResults.prodResults = test_prod__result;
  expect(test_prod__result).toBe(28);
})


afterAll(() => {
  console.log(testResults);
})

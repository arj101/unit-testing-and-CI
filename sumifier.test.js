
const functions = require('./sumifier');



test("Testing if 1 + 2 is 3", () => {
  expect(functions.sum(1,2)).toBe(3);
})

test("Testing randomizer", () =>{
  expect(functions.randomizer(5)).not.toBe(5);

})

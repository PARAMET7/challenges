import { add, subtract, multiply, divide } from "./index.js";

// console.log(test(add)) ====> Add:

test('testing add function, returns 5', () => {
  const r = add(2, 3);
  expect(r).toBe(5);
});

// ====> toBeLessThan():

test('eturns a negative value if the greater argument ', () => {
  const r = add(2, -3);
  expect(r).toBeLessThan(0);
});

// ====> toBeCloseTo():

test('returns a value close to 0.3 if called with add(0.1, 0.2)  ', () => {
  const r = add(0.1, 0.2);
  expect(r).toBeCloseTo(0.3);
});


// console.log(test(subtract)) ====> subtract:

test('returns 10 if called with subtract(15, 5) ', () => {
  const r = subtract(15, 5)
  expect(r).toBe(10)
});

test('returns a negative value if the second argument is greater than the first one  ', () => {
  const r = subtract(5, 15);
  expect(r).toBeLessThan(0);
});

// console.log(test(multiply)) ====> multiply:

test(' returns 8 if called with multiply(2, 4) ', () => {
  const r = multiply(2, 4);
  expect(r).toBe(8);
});

test(' returns a negative value if only the first argument is negative ', () => {
  const r = multiply(-2, 4);
  expect(r).toBeLessThan(0);
});

test(' returns a negative value if only the second argument is negative ', () => {
  const r = multiply(2, -4);
  expect(r).toBeLessThan(0);
});

test('  returns a positive value if called with two negative arguments', () => {
  const r = multiply(-2, -4);
  expect(r).toBeGreaterThan(0);
});

// console.log(test(divide)) ====> divide:

test('returns 3 if called with divide(9, 3)', () => {
  const r = divide(9, 3);
  expect(r).toBe(3);
});

test('returns "You should not do this!" if called with 0 as second argument', () => {
  const r = divide(9, 0);
  expect(r).toBe(("You should not do this!"));
});

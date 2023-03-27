const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('Igualdade de array e object', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  
});
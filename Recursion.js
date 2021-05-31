const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

const Sum = (numbers) => {
  let sum = 0;
  numbers.map((number) => {
    if (typeof number === "number") sum += number;
    else sum += theSum(number);
  });
  return sum;
};
console.log(theSum(numbers));

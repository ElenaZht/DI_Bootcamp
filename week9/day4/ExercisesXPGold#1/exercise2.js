// Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// applying reduce method on two-level array of numbers;
//callback function recieves accumulator, it's initial value is [1, 2]
// and current element, in this case - subarray
// function returnes an array, containing both items from accumulator
// and subarray - [1, 2, 0, 1]
// expression being asigned to some variable returns value equal to accumulator - [1, 2, 0, 1, 2, 3]
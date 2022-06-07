function sum(x, y) {
  return x + y;
}

const square = function (x) {
  return x * x;
};

const cube = (x) => {
  return x * x * x;
};

const PI = 3.14;

module.exports = {
  sum,
  square,
  cube,
  PI,
  student: ["Ali", "Hamid", "Hina"],
};
// module.exports = {
//   sum: sum,
//   square: square,
//   cube: cube,
//   PI: PI,
// };

// module.exports.sum = sum;
// module.exports.square = square;
// module.exports.cube = cube;
// module.exports.PI = PI;

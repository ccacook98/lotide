const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2) { //odd number of elements
    let index = Math.floor(array.length / 2);
    return [array[index]];
  } else if (!(array.length % 2)) { //even number of elements
    let index = (array.length / 2) - 1;
    return [array[index], array[index + 1]];
  }
};

module.exports = middle;

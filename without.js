const without = function(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) { //if arr1 element at index is not contained by arr2
      output.push(arr1[i]);
    }
  }
  return output;
};

module.exports = without;

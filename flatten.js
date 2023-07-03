const flatten = function(array) {
  let output = [];
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      for (let y = 0; y < array[x].length; y++) {
        output.push(array[x][y]);
      }
    } else {
      output.push(array[x]);
    }
  }
  return output;
};

module.exports = flatten;


	

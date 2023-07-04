/*This function accepts an array and a callback function and returns another
 *array containing elements of the input array for which the callback function
 *returns true.*/
const map = function(array, callback) {
  /*Here we're going to stray from the recommended solution a little bit. The
   *instructions recommend creating an empty array and using array.push() to
   *add each result to it. However, it's much quicker to create an array with
   *the required number of elements already in it and simply write each result
   *to its corresponding index in the return array.*/
  const results = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    results[i] = callback(array[i]);
  }
  return results;
};

module.exports = map;






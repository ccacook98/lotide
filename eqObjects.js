const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  //Check the number of keys in each object; return false if they differ
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //Scan over all keys in object 1 checking them for equality with object 2's keys
  for (const key in object1) {
    //Check if the key we're looking at in object 1 is an array and not equal to
    //the corresponding key in object 2
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //If we get here we can safely assume both objects are identical
  return true;
};

module.exports = eqObjects;

const eqObjects = function(object1, object2) {
  //Retrieve lists of the keys present in each object and store them in arrays
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //Proceed only if the lists have the same length
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let i = 0; i < obj1Keys.length; i++) {
    if (object1[obj1Keys[i]] !== object2[obj2Keys[i]]) {
      return false;
    }
  }
  //If we get here we can safely assume both objects are identical
  return true;
};


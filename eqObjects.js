const eqObjects = function(object1, object2) {
  //Retrieve lists of the keys present in each object and store them in arrays
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //Proceed only if the lists have the same length
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //If we get here we can safely assume both objects are identical
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

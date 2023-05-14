const eqObjects = function(object1, object2) {
  //Scan over all keys in object 1 checking them for equality with object 2's keys
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //Repeat the process for object 2. This ensures the two are completely identical.
  for (const key in object2) {
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

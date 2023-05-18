const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`[O] Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`[X] Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length != arr2.length) {
    return false;
  }
  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true; //return true if neither of the above return false
};

const eqObjects = function(object1, object2) {
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
  //Repeat the process for object 2. This ensures the two are completely identical.
  for (const key in object2) {
    //Check if the key we're looking at in object 2 is an array and not equal to
    //the corresponding key in object 2
    if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
	console.log('We should be here');
	return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //If we get here we can safely assume both objects are identical
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

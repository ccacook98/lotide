# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Assertion function that determines if two arrays are identical
* `assertEqual(actual, expected)`: Assertion function that determines if two values are identical
* `assertObjectsEqual(actual, expected)`: Assertion function that determines if two objects are identical
* `countLetters(string)`: Counts the characters in the specified string ignoring spaces
* `countOnly(allItems, itemsToCount)`: Counts occurences of a given list of items
* `eqArrays(array1, array2)`: Determines if two arrays are identical and returns true/false based on the outcome
* `eqObjects(object1, object2)`: Determines if two objects are identical and returns true/false based on the outcome
* `findKeyByValue(object, value)`: Finds the first key in an object that matches the specified value
* `findKey(object, callback)`: Finds the first key in an object for which the given callback function returns true
* `flatten(array)`: Flattens an array containing other arrays into one array
* `head(array)`: Returns the first object in an array
* `letterPositions(string)`: Counts each occurence of each non-space character in a string and returns an array containing the index at which each character was found
* `map(array, callback)`: Iterates over an array executing a callback function on each element and returns an array containing all elements for which the callback returned true.
* `middle(array)`: Returns the middle element(s) of an array
* `tail(array)`: Returns the last element of an array
* `takeUntil(array, callback)`: Returns each element of an array before an element for which the callback function returns false is encountered.
* `without(array1, array2)`: Returns a new array containing all elements of array 1 that are not present in array 2

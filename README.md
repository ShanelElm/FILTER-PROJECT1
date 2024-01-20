# FILTER PROJECT


## Introduction


When you see multiple options available while online shopping, and you want to narrow down the search results; what do you do? Filter out the options, right?  As the name suggests, the filter method will filter out the elements of an array based on the specified test condition. It will go through all the elements and imply the test condition on them. It will then return a new array of elements that will pass the condition.



## Algorithm Description


1. Define the array with elements.

```js
const numArr = [-2, -1, 0, 1, 2, 3]
```

2. Call the filter() method on the array.

```js
// declare a varible with array of numbers
const numArr = [-2, -1, 0, 1, 2, 3]
// use the filter method
const postitiveNums = numArr.filter(function(number){
    return number >=0;
}
```

3. Console the new array

```js
console.log(positiveNums); 
// Output: [0, 1, 2, 3]

```

## Big O Evaluation

### Time and Space Complexity

O: stands for "order of", indicating the upper bound

f(n): represents a function of the input size (n)


The time complexity of the filter function is O(n).

```js
const numArr = [-2, -1, 0, 1, 2, 3]

const postitiveNums = numArr.filter(function(number){
    return number >=0;
}
// N calls the function you pass in



![Selection Sort Animation]
(https://cdn-media-1.freecodecamp.org/images/L12QMT1j9D8t1gr3hUD5nE72YpEsgo3DPowC)



## Citations

FreeCodeCamp - (https://www.freecodecamp.org/news/the-complexity-of-simple-algorithms-and-data-structures-in-javascript-11e25b29de1e/)
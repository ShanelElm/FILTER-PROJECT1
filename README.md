# FILTER PROJECT


## Introduction


When you see multiple options available while online shopping, and you want to narrow down the search results; what do you do? Filter out the options, right?  As the name suggests, the filter method will filter out the elements of an array based on the specified test condition. It will go through all the elements and imply the test condition on them. It will then return a new array of elements that will pass the condition.



## Algorithm Description


### What is the filter method? 

From my understanding the filter method is a function that removes/sorts numbers or object from an array and returns a new one. For an example if I want to show only colors that starts with a G [green, orange, red, grey, gold, yellow] I would use the filter method to only return colors that starts with a G [green, grey, gold].


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

What is Time and Space Complexity?

Time complexity is a measure of how long an algorithm takes to run as the input size grows. It’s typically measured in Big O notation, which describes the worst-case scenario for how long the algorithm takes to run.

Space complexity is a measure of how much memory an algorithm uses as the input size grows. It’s also typically measured in Big O notation, which describes the worst-case scenario for how much memory the algorithm uses.


O: stands for "order of", indicating the upper bound

f(n): represents a function of the input size (n)


The time complexity of the filter function is O(n).

```js
const numArr = [-2, -1, 0, 1, 2, 3]

const postitiveNums = numArr.filter(function(number){
    return number >=0;
}
// N calls the function you pass in

```


![Selection Sort Animation]
(https://cdn-media-1.freecodecamp.org/images/L12QMT1j9D8t1gr3hUD5nE72YpEsgo3DPowC)



## Citations

FreeCodeCamp - (https://www.freecodecamp.org/news/the-complexity-of-simple-algorithms-and-data-structures-in-javascript-11e25b29de1e/)
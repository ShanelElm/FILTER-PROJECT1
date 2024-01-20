
// declare a varible with array of numbers
const numArr = [-2, -1, 0, 1, 2, 3]
// use the filter method
const postitiveNums = numArr.filter(function(number){
    return number >=0;
}
console.log(positiveNums); 

// Output: [0, 1, 2, 3]


let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array = numbers.filter(function(value) {
    return value >= 0; });

console.log(positive_array);

//Output = [0, 1, 5, 12, 19, 20]
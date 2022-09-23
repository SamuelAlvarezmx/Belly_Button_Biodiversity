let numbers = [13, 22, 36, 54, 55];

let evenNumbers = numbers.filter(number => number % 2 == 0);

console.log(evenNumbers);

var numbers = [1, 2, 3, 4 ,5];

var larger = numbers.filter(function(num){

    return num > 1;

});

console.log(larger);

// using the arrow functions

var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

// using the sort function

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);

// slice method slice.(where to start, how many items should hold)

var integers = [0,1,2,3,4,5];

var slice1 = integers.slice(0,2);

// slice to the end of an array you can omit the second argument
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
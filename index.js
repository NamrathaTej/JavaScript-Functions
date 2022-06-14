// Write a function named greet and console.log(something)

function greet() {
  console.log("Hello World!");
}
greet();

// Write a function named greet, which contains a parameter called name, and in the function, there would be console.log("Hi" + name)

let sayHello = function greet(name) {
  console.log("Hello" + " " + name + "!");
};

sayHello("Namratha");

//  Write a function to calculate the sum of  two numbers (there would be 2 parameter in the function)

function sum(num1, num2) {
  let add = num1 + num2;
  return add;
}

console.log(sum(20, 30));

// Write a function to double value of number

function double(n) {
  return n * 2;
}

console.log(double(20));

// forEach()

// Using forEach to console.log the element in the array

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((numbers) => console.log(numbers));

// Using forEach to console.log the element with its index in the array

let number = [1, 2, 3, 4, 5];
number.forEach((number, index) => console.log(number, index));

// Sum array of element using forEach method

function sum(...numb) {
  let total = 0;
  numb.forEach((arr) => {
    total += arr;
  });
  console.log(total);
}
sum(1, 2, 3, 4, 5, 6);

// map()
let numberM = [25, 45, 55, 77, 88, 99, 100];

// Using map() to square each number in the array

const square = numberM.map((item) => item ** 2);
console.log(square);

// Using map() to return new array that contains even number

function EvenNumbers(numberM) {
  let newEvenArray = [];
  numberM.map((item) => {
    if (item % 2 === 0) {
      newEvenArray.push(item);
    }
  });

  return newEvenArray;
}

let result = EvenNumbers(numberM);
console.log(result);

// Using map() to return new array that contains odd number

function OddNumbers(numberM) {
  let newOddArray = [];
  numberM.map((item) => {
    if (item % 2 !== 0) {
      newOddArray.push(item);
    }
  });

  return newOddArray;
}

let results = OddNumbers(numberM);
console.log(results);

// Return a new array contains number less than 10
let input = [1, -4, 12, 0, -3, 29, -150];

// let newArray = input.filter(num => num>10)
//  console.log(newArray);

function greaterThan(arr) {
  let newArrays = [];
  arr.forEach((num) => {
    if (num > 10) {
      newArrays.push(num);
    }
  });
  return newArrays;
}

let newArrays = greaterThan(input);
console.log(newArrays);

// Using filter() to return new array that contains even number
let numA = [25, 45, 55, 77, 88, 99];

let evenArray = numA.filter((n) => n % 2 === 0);
console.log(evenArray);

// Using forEach() to return new array that contains even number

function evenArrayX(arr) {
  let newArray = [];
  arr.forEach((n) => {
    if (n % 2 === 0) {
      newArray.push(n);
    }
  });
  return newArray;
}

let newArrayX = evenArrayX(numA);
console.log(newArrayX);

// Using filter() to return new array that contains odd number

let oddArray = numA.filter((n) => n % 2 !== 0);
console.log(oddArray);

// Using forEach() to return new array that contains odd number

function oddArray1(numA) {
  let newArray = [];
  numA.forEach((n) => {
    if (n % 2 !== 0) {
      newArray.push(n);
    }
  });
  return newArray;
}

let newArray = oddArray1(numA);
console.log(newArray);

// next Question
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// 1. Get characters with mass greater than 100

function getMassGreater(array) {
  let newMass = [];
  array.forEach((item) => {
    if (item.mass > 100) {
      newMass.push(item);
    }
  });
  return newMass;
}

let newMass = getMassGreater(characters);
console.log(newMass);

// Get all male characters

function malecharacters(arr) {
  let newArray = [];
  arr.forEach((item) => {
    if (item.gender === "male") {
      newArray.push(item);
    }
  });
  return newArray;
}

let newArrayA = malecharacters(characters);
console.log(newArrayA);

// 2.  Get characters with height less than 200

function heightGreater(array) {
  const newHeight = [];
  array.forEach((item) => {
    if (item.height < 200) {
      newHeight.push(item);
    }
  });
  return newHeight;
}

let newHeight = heightGreater(characters);
console.log(newHeight);

// Get all female characters

const femaleChar = characters.filter((items) => items.gender === "female");
console.log(femaleChar);

let vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];

// 1. Sort the array in alphabetically

let vegetablesSort = vegetables.sort();
console.log(vegetablesSort);

// 2. What is the length of the array
console.log(vegetables.length);

// Write a function called myVeggieList to console.log() the length of the array
function list(myVeggieList) {
  console.log(myVeggieList.length);
}

list(vegetables);

//  Push one more item to the array called "onion"

vegetables.push("onion");
console.log(vegetables);

//  Write a function using if-else condition to check if the length of the array bigger than 4.

function checkLength(vegetables) {
  if (vegetables.length > 4) {
    console.log("vegetable length is bigger than 4");
  } else {
    console.log("vegetable length is smaller than 4");
  }
}

checkLength(vegetables);

// Using forEach or map to loop and console.log() the item in the array

function loop(vegetables) {
  vegetables.forEach((vegetable) => console.log(vegetable));
}

loop(vegetables);

// console.log the student name
// console.log the student class
// console.log the student age
let student = {
  name: "David Rayy",
  class: "math",
  age: 12,
};

console.log(student.name);
console.log(student.class);
console.log(student.age);

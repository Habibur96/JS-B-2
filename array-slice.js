

const numbers = [10, 12, 13, 15, 17, 20, 25, 28];

// slice 
const sliceNumbers = numbers.slice(3, 7);
console.log(sliceNumbers);
console.log(numbers);

//splice
const spliceNumbers = numbers.splice(3, 7);
console.log(spliceNumbers)
console.log(numbers)

// const numbersSpliced = numbers.splice(3, 7, 10, 12, 13, 14);
// console.log(numbersSpliced);
// console.log(numbers)
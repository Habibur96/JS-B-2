


const anthem = 'Amar sonar bangla ame tomay valobasi';
//sliceing by space
const word = anthem.split(' ');

// slicing by -> a
const withoutA = anthem.split('a');

const smallSlice = anthem.slice(0, 4); // (start , end)

// substr
const anotherPart = anthem.substr(11, 7);

//substring
const anotherAnotherPart = anthem.substring(11, 15);

// concact
const first = 'Amder';
const second = 'City';
//const fullString = first + second;
// console.log(fullString);

const fullString = first.concat(second).concat('abc').concat('RJ Kibria')

//join string

const words = ['a', 'b', 'c', 'd']
const allJoined = words.join('')
const allJoined1 = words.join(' ')
const allJoined2 = words.join(',')
const allJoined3 = words.join(', ')
const allJoined4 = words.join('www')
const allJoined5 = words.join(' www ')
console.log(allJoined1)
console.log(allJoined2)
console.log(allJoined3)
console.log(allJoined4)
console.log(allJoined5)


//console.log(fullString)
//console.log(anotherAnotherPart)
// console.log(anotherPart)
// console.log(word)
// console.log(withoutA)
// console.log(smallSlice)

// sorted numbers
const numbers = [7, 5, 1, 3, 9, 0, 4, 2];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

//sorted string
const friends = ['noyon', 'mahi', 'abir', 'anik', 'kibria', 'rj']
//const sortedfriends = friends.sort();
//console.log(sortedfriends)

// reverse string

//const reversedFriends = friends.reverse();
//console.log(reversedFriends)

// sort_reverse_string
//const sortedReversedFriends = friends.sort().reverse();
//console.log(sortedReversedFriends)


// number sorting (big numbers)
// Note:- Javascript a number sort korar somoy normal sort() dia hobe na sorting function use korte hobe.
const numbers1 = [112, 86, 12, 45, 75, 105];
const sortedNumbers1 = numbers1.sort(function (a, b) {
    return a - b;
})

console.log(sortedNumbers1);

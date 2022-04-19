


function addnumbers(num1, num2) {

    // console.log(arguments[1])
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}

const sum = addnumbers(10, 25, 25, 35, 75);
console.log(sum)

// ==========================================================

function getFullName(firstName, secondName) {
    let fullName = ' ';
    for (const nam of arguments) {
        fullName = fullName + ' ' + nam;
    }
    // const fullName = firstName + ' ' + secondName;
    return fullName;
}

const name = getFullName('Habibur', 'Rahman', 'RJ', 'Kibria', 'Jahid', 'Hasan');
console.log(name);
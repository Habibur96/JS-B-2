const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB cemera flashlight phone',
    'yellow laptop with black cemera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'purple color phone with Laptop'

];


const searching = 'laptop';
//const searching = 'Dell';
///const searching = 'phone';

//indexOff

const outPut = [];

// using indexOff
for (const product of products) {

    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // outPut.push(product);
    }
}

console.log(outPut);

// using includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase()) != -1) {
        // outPut.push(product);
    }
}
console.log(outPut);

//startswith

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase()) != -1) {
        // outPut.push(product);
    }
}
console.log(outPut);

//endswith

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase()) != -1) {
        outPut.push(product);
    }
}

console.log(outPut);

// ==============================Again-Practice======================================

// const products = [
//     'Dell hardcore i29 200GB laptop',
//     'iphone 1TB cemera flashlight phone',
//     'yellow laptop with black cemera',
//     '1X59 Lenovo commercial yoga laptop',
//     'LG supernova laptop',
//     'HTC low price Phone',
//     'purple color phone with Laptop'

// ];

// const seasrching = 'laptop';
// //const seasrching = 'Dell';

// const outPut = [];

// for (const product of products) {
//     if (product.toLowerCase().indexOf(seasrching.toLowerCase()) != -1) {
//         //outPut.push(product);
//     }
// }
// console.log(outPut);

// for (const product of products) {
//     if (product.toLowerCase().includes(seasrching.toLowerCase()) != -1) {
//         //  outPut.push(product)
//     }
// }

// console.log(outPut)

// for (const product of products) {
//     if (product.toLowerCase().startsWith(seasrching.toLowerCase())) {
//         // outPut.push(product);
//     }
// }
// console.log(outPut)

// for (const product of products) {
//     if (product.toUpperCase().endsWith(seasrching.toUpperCase())) {
//         outPut.push(product)
//     }
// }

// console.log(outPut)


const array = [
    { name: "Marco", age: 22 },
    { name: "Anna", age: 24 },
    { name: "Luca", age: 17 },
    { name: "Gianni", age: 53 }
];

// risultato
// [
//     { name: "Luca", age: 17 },
//     { name: "Marco", age: 22 },
//     { name: "Anna", age: 24 },
//     { name: "Gianni", age: 53 }
// ]

array.sort((a, b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 0;
    }
});

console.log(array);

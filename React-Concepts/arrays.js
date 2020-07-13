

map();
const myArray = [1, 2, 3, 4];
myArray.map(i => i + 1) // (4) [2, 3, 4, 5]

filter();
const myArray = [1, 3, 5, 7, 9]
myArray.filter(i => true) // (5) [1, 3, 5, 7, 9]
myArray.filter(i => false) // []
myArray.filter(i => i > 4) // (3) [5, 7, 9]

reduce();

find();

includes();
const newArray = [{id: 1}, {id: 2}, {id: 3}]
newArray[0] // {id: 1}
newArray[2] //{id: 3}

const myArray = [1, 2, 3, 4, 5];
myArray.includes(2, 3) //false
myArray.includes(2, 2) // false
myArray.includes(2, 1)  // true

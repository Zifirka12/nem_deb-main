// Задача 1
let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    
    if (element === 10) {
    break;
    }
    
    console.log(element);
}

//Задача 2
let valueToFind = 4;

let index = arr.indexOf(valueToFind);

console.log(index);

//Задача 3
let ass = [1, 3, 5, 10, 20]
let joinedText = ass.join(" ");
console.log(joinedText)

//Задача 4
let resultArray = [];
for (let i = 0; i < 3; i++) {
    let innerArray = [];
    for (let j = 0; j < 3; j++) {
    innerArray.push(1);
    }
    resultArray.push(innerArray);
}
console.log(resultArray);

//Задача 5 
let ar = [1, 1, 1];
ar.push(2, 2, 2);
console.log(ar);

//Задача 6
let arr1 = [9, 8, 7, 'a', 6, 5];
let filteredArr = arr1.filter(item => typeof item === 'number');
filteredArr.sort((a, b) => a - b);
console.log(filteredArr); 


//Задача 7 в html

//Задача 8
let str = 'abcdef';
let arr2 = str.split('');
arr2.reverse();
let reversedStr = arr2.join('');
console.log(reversedStr);

//Задача 9
const arr3 = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = [...arr[0], ...arr3[1]];
console.log(flattenedArray); 

//Задание 10
const arr4 = [1, 2, 3, 6, 8];
for (let i = 0; i < arr4.length - 1; i++) {
    console.log(arr4[i] + arr4[i + 1]);
}

//Задание 11
function squareNumbers(numbers) {
    return numbers.map(number => number * number);
    }
    const numbers1 = [1, 2, 3, 4, 5];
    const squaredNumbers1 = squareNumbers(numbers1);
    console.log(squaredNumbers1);

//Задание 12
function getStringLengths(strings) {
    return strings.map(str => str.length);
    }
    const strings1 = ["h", "w", "j"];
    const lengths1 = getStringLengths(strings1);
    console.log(lengths1);

//Задание 13
function getNegativeNumbers(arr) {
    return arr.filter(number => number < 0);
    }
    const inputArray = [3, 4, 0, 12];
    const negativeNumbers = getNegativeNumbers(inputArray);
    
    console.log(negativeNumbers); 

//Задание 14
const originalArray = new Array(10).fill().map(() => Math.floor(Math.random() * 11));
const evenNumbers = originalArray.filter(num => num % 2 === 0);
console.log(`Исходный массив: ${originalArray}`);
console.log(`Четные числа: ${evenNumbers}`);

//Задание 15
const randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10 + 1));
const sum = randomArray.reduce((acc, cur) => acc + cur, 0);
const average = sum / randomArray.length;
console.log(`Массив: ${randomArray}`);
console.log(`Среднее арифметическое: ${average}`);
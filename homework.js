//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка обчислює та повертає площу прямокутника висотою

const areaOfRectangle = (a, b) => {
    return a * b;
}
console.log(areaOfRectangle(a, b));
document.write('Площа прямокутника= ' + areaOfRectangle(a, b));

//- створити функцію яка обчислює та повертає площу кола

const areaOfCircle = (r) => {
    let radius = r ** 2;
    return Math.PI * radius;
}
console.log(areaOfCircle(r));
document.write('Площа кола= ' + areaOfCircle(r));

//- створити функцію яка обчислює та повертає площу циліндру

const areaOfCylinder = (r, h) => {
    return 2 * Math.PI * r * h;
}
console.log(areaOfCylinder(r, h));
document.write('Площа циліндра= ' + areaOfCylinder(r, h));

//- створити функцію яка приймає масив та виводить кожен його елемент

let arr3 = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed'];
const elementOfArr =  (arr3) => {
    for (let i = 0; i < arr3.length; i++) {
       document.write(arr3[i]);
    }
}
elementOfArr(arr3);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

const textOfPar =  (text, size) => {
    for (let i = 0; i < size; i++) {
       document.write(`<p>${text}</p>`);
    }
}
textOfPar(text, size);

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulText = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
ulText(text);

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulArg = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
ulArg(text, num);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [false, true, 19, 25, 31, 41, 49, 'Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
const primArray = (arr) => {
    document.write(`<ol>`)
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`);
        }
    document.write(`</ol>`)
}
primArray(arr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr1 = [{id: 1425, name: 'Ivan', age: 16}, {id: 1426, name: 'Gans', age: 19}, {id: 1454, name: 'Vano', age: 25}];
const objDoc = (arr1) => {
    for (const arrElement of arr1) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
objDoc(arr1);

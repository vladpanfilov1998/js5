//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const minNum = (a, b, c) => {
    if (a < b && a < c) {
            document.write(a);
            console.log(a);
    } else if (b < a && b < c) {
            document.write(b);
            console.log(b);
    } else {
            document.write(c);
            console.log(c);
    }
};

minNum(a, b, c);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const maxNum = (a, b, c) => {
    if (a > b && a > c) {
        document.write(a);
        console.log(a);
    } else if (b > a && b > c) {
        document.write(b);
        console.log(b);
    } else {
        document.write(c);
        console.log(c);
    }
};

maxNum(a, b, c);

//- створити функцію яка повертає найбільше число з масиву

const maxFromArray = (numbers) => {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
};

maxFromArray(numbers);

//- створити функцію яка повертає найменьше число з масиву

const minFromArray = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
};

minFromArray(numbers);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sumArr = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

sumArr(nums);

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const avgArr = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum / nums.length;
}

avgArr(nums);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const maxminArray = (nums) => {
    let max = nums[0];
    let min = nums[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
}

maxminArray(nums);

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

const randomArr = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

randomArr(size);

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

const randomLimArr = (length, limit) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * limit));
    }
    return arr;
}

randomLimArr(length, limit);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reversArr = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let arrElement = arr[i];
        newArr.push(arrElement);
    }
    return newArr
}

reversArr(arr);

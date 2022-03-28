// Создайте функцию myMax, которая принимает в аргументе массив чисел и возвращает из 
// этого массива максимальное число.
// Напомню, что аргумент может быть любом типов, в том числе и массивом

function myMax (arr) {
    let maxNum = arr[0]

    for ( i = 0; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i]
        }
    }
    return maxNum
}

console.log(myMax([ 3, 11, 99, 5, 6, 88]))
console.log(myMax([ 6, -8, -2, 1, -6 ]))
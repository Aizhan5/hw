// Пользователь вводит какой высоты должна быть ёлка, вам надо вывести в консоли такую ёлку

// Пример ввода:
// 5

// Вывод:
//      /\
//     /  \
//    /    \
//   /      \
//  /        \

let n = Number(prompt())

let part1 = ''
let part2 = '/'
let part3 = ''
let part4 = '\\'

for (let i = 0; i < n; i++) {
     part1 = ''
     for (j = 0; j < n - i; j++) {
         part1 = part1 + ' '
     }
     part3 = ''
     for (k = 0; k < i * 2; k++) {
         part3 = part3 + ' '
     }
     console.log(part1 + part2 +part3 +part4)
}
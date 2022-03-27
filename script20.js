// Пользователь вводит первое число, затем один из знаков  (+  -  *  / % **)  и в конце второе число. 
// В зависимости от знака выводится результат.
// Пример ввода:
// 3
// +
// 5
// Вывод:
//8


const num1 = parseFloat(prompt('Введите первое число'));
const operator = prompt('Введите операторы: +, -, /, *, %, **')
const num2 = parseFloat(prompt('Введите второе число'));
let result = 0

if (operator == '+') {
    result = num1 + num2
} else if (operator == '-') {
        result = num1 - num2
} else if (operator == '/') {
    result = num1 / num2 
} else if (operator == '*') {
    result = num1 * num2
} else if (operator == '%') {
    result = num1 % num2
} else if (operator == '**') {
    result = num1 ** num2
}
 document.write(num1 + operator + num2 + '=' + result)
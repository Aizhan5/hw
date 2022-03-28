// Создайте html страницу с двумя input, кнопкой "+" и div
// Пользователь вводит числа в эти input, после чего нажимает на кнопку, 
// ваша программа должна посчитать сумму и вывести её в div 

document.addEventListener("DOMContentLoaded", start)

function start() {
    const btn = document.querySelector("button")
    btn.addEventListener("click", sum)
}

function sum () {
    const inpOne = document.getElementById("one")
    const inpTwo = document.getElementById("two")
    const sum = document.querySelector("div")
    sum.textContent = Number(inpOne.value) + Number(inpTwo.value)
}
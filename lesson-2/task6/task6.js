//1. вводимо необхідні дані
let sekNumber = parseInt(prompt('Введіть кількість секунд', '0'))


// 2. Обчислюємо
let hourNumber = sekNumber / 3600
let minetNumber = sekNumber / 60

// 3. Вивід результатів
document.write(`
Кількість годин = ${hourNumber} <br>
кількість хвилин = ${minetNumber}`)
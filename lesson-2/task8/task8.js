//1. вводимо необхідні дані
let randomMonth = 1 + Math.floor(Math.random() * (1 + 12 + 1))
let randomDay = 1 + Math.floor(Math.random() * (0 + 6 + 1))





// 2. Обчислюємо
let sumRandomNumbers = randomMonth + randomDay


// 3. Вивід результатів
document.write(`
Випадковий місяць = ${randomMonth} <br>
Випадковий день = ${randomDay} <br>
Сума місяця і дня = ${sumRandomNumbers} `)
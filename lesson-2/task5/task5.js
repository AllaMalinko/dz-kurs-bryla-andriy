//1. вводимо необхідні дані
let smLenght = parseFloat(prompt('Введіть довжину у сантиметрах', '0'))


// 2. Обчислюємо
let metrLenght = smLenght / 100
let kmLenght = smLenght /1000

// 3. Вивід результатів
document.write(`
Довжина в метрах = ${metrLenght} <br>
Довжина в кілометрах = ${kmLenght}`)
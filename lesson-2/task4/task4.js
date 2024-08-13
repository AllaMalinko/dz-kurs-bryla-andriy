//1. вводимо необхідні дані
let priceProdukt = parseFloat(prompt('Введіть вартість товару', '0.00'))
let numbersProdukt = parseInt(prompt('Введіть кількість товару', '0.00'))



// 2. Обчислюємо
let allMoney = priceProdukt * numbersProdukt
let tax = allMoney * 0.05

// 3. Вивід результатів
document.write(`
Загальна вартість товару = ${allMoney}
Податок = ${tax}`)
//1. вводимо необхідні дані
let firstProductPrice = parseInt(prompt('Введіть першого товару', '0'))
let secondProductPrice = parseInt(prompt('Введіть другого товару', '0'))
let thirdProductPrice = parseInt(prompt('Введіть третього товару', '0'))

let firstProductNumber = parseInt(prompt('Введіть кількість першого товару', '0'))
let secondProductNumber = parseInt(prompt('Введіть кількість другого товару', '0'))
let thirdProductNumber = parseInt(prompt('Введіть кількість третього товару', '0'))


// 2. Обчислюємо
let firstProductSum = firstProductPrice * firstProductNumber
let secondProductSum = secondProductPrice * secondProductNumber
let thirdProductSum = thirdProductPrice * thirdProductNumber
let totalSum = firstProductSum + secondProductSum + thirdProductSum

// 3. Вивід результатів
document.write(`
Сума за перший товар = ${firstProductSum} <br>
Сума за другий товар = ${secondProductSum} <br>
Сума за третій товар = ${thirdProductSum} <br>
Загальна сума чеку = ${totalSum} `)
// 1.Введення даних
let userMonthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12', '1'))

// 2. Обчислення
if (userMonthNumber === 12 || userMonthNumber === 1 || userMonthNumber === 2)
	document.write(`Зима`)
else
if (userMonthNumber === 3 || userMonthNumber === 4 || userMonthNumber === 5)
	document.write(`Весна`)
else
if (userMonthNumber === 6 || userMonthNumber === 7 || userMonthNumber === 8)
	document.write(`Літо`)
else

document.write(`Осінь`)


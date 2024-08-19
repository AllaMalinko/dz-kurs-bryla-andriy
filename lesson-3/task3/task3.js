// 1. Введення даних
let minNumber = 1
let maxNumber = 5
let sadenNumber = minNumber + Math.floor(Math.random()*(maxNumber - minNumber +1))
let firstUserNumber = parseFloat( prompt('Введіть перше число що спало на думку', '0'))

// 2. Обчислення
if (firstUserNumber != sadenNumber)
{
	let secondUserNumber = parseFloat( prompt('Не в гадали. Спробуйте ще раз', '0'))
	if (secondUserNumber !=sadenNumber)
		document.write(`Всі спроби витрачено. Ви не вгадали число. Допобачення`)
	else
	document.write(`Поздоровляємо! Ви вгадали з другої спроби`)
}
else
	document.write(`Поздоровляємо! Ви вгадали з першої спроби`)
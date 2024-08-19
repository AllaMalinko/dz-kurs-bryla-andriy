//1. Введення даних
let priceProduct = parseFloat(prompt('Введіть вартість товару', '0'))
let avalableMoney = parseFloat(prompt('Введіть кількість грошей у гаманці', '0'))

//2. Обчислення

if (priceProduct > avalableMoney)
	document.write(`Не достатньо коштів на рахунку`)
else {
if (priceProduct + 4 < avalableMoney)
	document.write(`У вас є додаткові 4 грн. Придбайте лотерею.`)
else

	document.write(`Ваша покупка оплачена`)
	
}

	

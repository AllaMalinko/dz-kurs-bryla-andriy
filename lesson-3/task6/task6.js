// 1.Введення даних
const firstDay = 'Понеділок'
const secondDay = 'Вівторок'
const thirdDay = 'Середа'
const foursDay = 'Четвер'
const fivesDay = 'П\'ятниця'
const sixDay = 'Субота'
const sevensDay = 'Неділя'
let userDayNumber = parseInt(prompt('Введіть цифру від 1 до 7', '5'))
// 2. Обчислення
if (userDayNumber === 1)
	document.write(`Ваш день ${firstDay}`)
else 
	if (userDayNumber === 2)
		document.write(`Ваш день ${secondDay}`)
	else
	if (userDayNumber === 3)
		document.write(`Ваш день ${thirdDay}`)
	else
	if (userDayNumber === 4)
		document.write(`Ваш день ${foursDay}`)
	else
	if (userDayNumber === 5)
		document.write(`Ваш день ${fivesDay}`)
	else
	if (userDayNumber === 6)
		document.write(`Ваш день ${sixDay}`)
	else
	
	document.write(`Ваш день ${sevensDay}`)



// 1. Введення даних
let userAge = parseInt(prompt('Скільки вам повних років?', '0'))

// 2. Обчислюємо
if (userAge>22 && userAge<65)
	document.write(`Ви працівник. Ідіть і працюїте`)
else {
	if (userAge>17 && userAge<=22)
		document.write(`Ви студент. Ідіть і вчіться`)
	else 
	if (userAge>=6 && userAge<=17)
		document.write(`Ви школяр. Ідіть і вчіться`)
	else
	if(userAge>=0 && userAge<6)
		document.write(`Ви тодлер. Батьки, заберіть дитину від екрану`)
	else
	document.write(`Ви пенсіонер. Спробуйте вижити`)
	
}
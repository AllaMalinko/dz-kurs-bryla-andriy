	//1. вводимо необхідні дані
	let yearOfBirth = parseInt(prompt('Введіть рік народження', '1900'))
	let yearNow = 2024
	

	// 2. Обчислюємо
	let age = yearNow - yearOfBirth

	// 3. Вивід результатів
	document.write(`
	Ваш вік = ${age}`)
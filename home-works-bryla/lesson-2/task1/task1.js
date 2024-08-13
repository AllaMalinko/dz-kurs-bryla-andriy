
		//1. вводимо необхідні дані
		let a = parseFloat(prompt('Введіть а', '0'))
		let b = parseFloat(prompt('Введіть b', '0'))
		let c = parseFloat(prompt('Введіть c', '0'))

		// 2. Обчислюємо
		let s1 = a + 12 + b
		let s2 = Math.sqrt((a + b) / (2 * a))
		let s3 = Math.cbrt((a + b) * c)
		let s4 = Math.sin( a/(- b))

		// 3. Вивід результатів
		document.write(`
		s1 = ${s1} <br>
		s2 = ${s2} <br>
		s3 = ${s3} <br>
		s4 = ${s4}`)

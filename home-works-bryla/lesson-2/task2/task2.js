	//1. вводимо необхідні дані
	let a = parseFloat(prompt('Введіть а', '0'))
	let b = parseFloat(prompt('Введіть b', '0'))
	

	// 2. Обчислюємо
	let s1 = a + b
	let s2 = a * b
	let s3 = a / b

	// 3. Вивід результатів
	document.write(`
	<table border = '2'>
        <tr>
          <th>Перше число</th>
          <td>${a}</td>
        </tr>

        <tr>
          <th>Друге число</th>
          <td>${b}</td>
        </tr>

        <tr>
          <th>Сума</th>
        <td>${s1}</td>
        </tr>
    
        <tr>
          <th>Добуток</th>
          <td>${s2}</td>
        </tr>

        <tr>
          <th>Частка</th>
          <td>${s3}</td>
        </tr>
    </table>`)
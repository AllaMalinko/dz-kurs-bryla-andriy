//1 Введення даних
let firstKidName = prompt('Введіть імя першої дитини', 'Kate')
let sekondKidName = prompt('Введіть імя другої дитини', 'John')
let numberCandyFirstKid = parseFloat(prompt('Введіть кількість цукерок першої дитини', '0'))
let numberCandySecondKid = parseFloat(prompt('Введіть кількість цукерок другої дитини', '0'))

//2 Обчислення
if 
(numberCandyFirstKid > numberCandySecondKid)
document.write (`Більша кількість цукерок у ${firstKidName}`)

else 
  { if 
	(numberCandyFirstKid < numberCandySecondKid)
	document.write (`Більша кількість цукерок у ${sekondKidName}`)
	else
	
	document.write (`Кількість цукерок однакова`)}
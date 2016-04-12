//Calculadora basica

function calculadora(operacion){
	var numberOne = document.calc.numberOne.value;
	var numberTwo = document.calc.numberTwo.value;
	var result = eval(numberOne + operacion + numberTwo);
	document.calc.resultado.value = result;
}



s = document.querySelector('#screen');
clear = document.querySelector('#clear');
clear.addEventListener('click', clearScreen);

function clearScreen() {
	divAll = document.querySelectorAll('div');
	spanAll = document.querySelectorAll('span');
	divLength = divAll.length - 1;
	spanLength = spanAll.length - 1;

	for (x = 0; x <= divLength; x++) {
		document.body.removeChild(divAll[x]);
	}	
	for (x = 0; x <= spanLength; x++) {
		document.body.removeChild(spanAll[x]);
	}
}

numButt = document.querySelector('#numberButtons');
numButt.addEventListener('click', num);

function num(e) {
	if(e.target.value == undefined) return;
	spanElementTotal = document.querySelectorAll('span');
	if (spanElementTotal.length == 0) {
		createSecondNumber();
		span = document.querySelector('span');
		span.innerText += e.target.value;
	}
	if (spanElementTotal.length > 0) {
	spanTotal = document.querySelectorAll('span');
	spanLength = spanTotal.length - 1;

	spanTotal[spanLength].innerText += e.target.value;
	}
}

operButt = document.querySelector('#operationButtons');
operButt.addEventListener('click', operand);

function operand(e) {
	//e.preventDefault();
	if(e.target.value == undefined) return;
	operandText();
	opText.innerText += e.target.value;
	createSecondNumber();
}

function operandText() {
	opText = document.createElement('div');
	opText.setAttribute('id', 'op1');
	document.body.appendChild(opText);
}

function createSecondNumber() {
	secondNumber = document.createElement('span');
	secondNumber.setAttribute('id', 'num2');
	document.body.appendChild(secondNumber);
}

equals = document.querySelector('#equals');
equals.addEventListener('click', calculation);

function calculation() {
	alert('hi there');
}

function calculate(e) {
	switch(e) {
		
		case '+':
			c = a + b;
			return c;
			break;
		case '-':
			c = b - a;
			return c;
			break;
		case '+':
			c = a * b;
			return c;
			break;
		case '+':
			c = a / b;
			return c;
			break;
		default:
			return 'Please enter operation';
	}
}
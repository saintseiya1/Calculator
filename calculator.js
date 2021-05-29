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
		createSecondNumber('numA');
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
	a = document.querySelector('.numA').innerText;
	if(!a) return;
	if(e.target.value == undefined) return;
	operandText();
	opText.innerText += e.target.value;
	createSecondNumber('numB');
	disableOperand();
}

function operandText() {
	opText = document.createElement('span');
	opText.setAttribute('class', 'operand');
	document.body.appendChild(opText);
}

function disableOperand() {
	op = document.querySelectorAll('.operation');
	for (x of op) {
		x.setAttribute('disabled', 'true');
	}
}

function createSecondNumber(string) {
	secondNumber = document.createElement('span');
	secondNumber.setAttribute('class', string);
	document.body.appendChild(secondNumber);
}

equals = document.querySelector('#equals');
equals.addEventListener('click', calculation);

function calculation() {
	a = document.querySelector('.numA').innerText;
	a = parseInt(a);
	b = document.querySelector('.numB').innerText;
	b = parseInt(b);
	op = document.querySelector('.operand').innerText;
	switch(op) {
		case '+':
			c = a + b;
			printResult(c);
			break;
		case '-':
			c = a - b;
			printResult(c);
			break;
		case 'x':
			c = a * b;
			printResult(c);
			break;
		case '/':
			c = a / b;
			printResult(c);
			break;
		default:
			c = 'Please enter operation';
			printResult(c);
	}
	function printResult(out) {
		span = document.createElement('span');
		span.innerText = out;
		document.body.appendChild(span);
	}
}


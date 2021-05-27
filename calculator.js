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
	//e.preventDefault();
	if(e.target.value == undefined) return;
	operandText();
	opText.innerText += e.target.value;
	createSecondNumber('numB');
}

function operandText() {
	opText = document.createElement('div');
	opText.setAttribute('id', 'operand');
	document.body.appendChild(opText);
}

function createSecondNumber(string) {
	secondNumber = document.createElement('span');
	secondNumber.setAttribute('id', string);
	document.body.appendChild(secondNumber);
}

equals = document.querySelector('#equals');
equals.addEventListener('click', calculation);

function calculation() {
	a = document.querySelector('#numA');
	b = document.querySelector('#numB');
	op = document.querySelector('#operand');
	switch(op.innerText) {
		case '+':
		c = parseInt(a.innerText) + parseInt(b.innerText);
		alert(c);
		
		case '-':
			c = b - a;
			return c;
			break;
		case 'x':
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


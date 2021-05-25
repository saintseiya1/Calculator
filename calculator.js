s = document.querySelector('#screen');
on = document.querySelector('#on');
on.addEventListener('click', turnOn);


function turnOn() {
	divAll = document.getElementsByTagName('div');
	spanAll = document.getElementsByTagName('span');
	console.table(divAll);
	console.table(spanAll);
	//document.body.removeChild(divAll[length - 1]);
	/*
	document.body.removeChild(spanAll);
	
	s.innerText = '';
 	s.classList.remove('hide');
 	*/
}

numButt = document.querySelector('#numberButtons');
numButt.addEventListener('click', num);

var count = 0;

function num(e) {
	if(e.target.value == undefined) return;
	spanElementTotal = document.querySelectorAll('span');
	console.log(spanElementTotal);
	if (spanElementTotal.length == 0) {
		createSecondNumber();
		cN = document.querySelector('span');
		cN.innerText += e.target.value;
	}
	if (spanElementTotal.length > 0) {
	cN = document.querySelectorAll('span');
	console.table(cN);
	console.table(count);
	console.table(cN.length);
	cN[count -1].innerText += e.target.value;
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
	++count;
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
inA = document.querySelector('#inputA');
inA.addEventListener('click', enterA);
spA = document.querySelector('#spA');
nb = document.querySelector('#numberButtons');
nb.addEventListener('click', enterNumber);
arrayA = [];

function enterA() {
	spA.classList.add('active');
}

function enterNumber(e) {
	
	textA = e.target.value;
	arrayA.push(textA);
	spA.innerText = arrayA;


}




/*
clear = document.querySelector('#clear');
clear.addEventListener('click', clearScreen);

function clearScreen() {
	spanAll = document.querySelectorAll('span');
	spanLength = spanAll.length - 1;

	for (x = 0; x <= spanLength; x++) {
		document.body.removeChild(spanAll[x]);
	}
	enableOperand();
	showButtons();
}

numButt = document.querySelector('#numberButtons');
numButt.addEventListener('click', num);

function num(e) {
	if(e.target.value == undefined) return;
	nA = document.querySelector('.numA');
	if(!nA) {
		createSecondNumber('numA');
		sA = document.querySelector('.numA');
		sA.innerText += e.target.value;
	} else {
		op = document.querySelector('.operand');
		if(!op) {
			sA = document.querySelector('.numA');
			sA.innerText += e.target.value;
		} else {
			sB = document.querySelector('.numB');
			if(!sB) {
				createSecondNumber('numB');		
				sB = document.querySelector('.numB');		
				sB.innerText += e.target.value;	
			} else {
					sB.innerText += e.target.value;	
			}	
		}
	}
}

operButt = document.querySelector('#operationButtons');
operButt.addEventListener('click', operand);

function operand(e) {
	a = document.querySelector('.numA').innerText;
	if(!a || e.target.value == undefined) return;
	operandText();
	opText.innerText = e.target.value;
}

function operandText() {
	op = document.querySelector('.operand');
	if(!op) {
		opText = document.createElement('span');
		opText.setAttribute('class', 'operand');
		document.body.appendChild(opText);
	}
	return;
}

function disableOperand() {
	op = document.querySelectorAll('.operation');
	for (x of op) {
		x.setAttribute('disabled', 'true');
	}
}

function enableOperand() {
	op = document.querySelectorAll('.operation');
	for (x of op) {
	x.removeAttribute('disabled');	
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
	a = parseFloat(a);
	b = document.querySelector('.numB').innerText;
	b = parseFloat(b);
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
		eqspan = document.createElement('span');
		eqspan.innerText = ' = ' + out;
		document.body.appendChild(eqspan);
		hideButtons();
	}
}

function hideButtons() {
	e = document.querySelector('#equals');
	n = document.querySelectorAll('.number');
	o = document.querySelectorAll('.operation');
	
	e.classList.add('hide');

	for (x of o) {
		x.classList.add('hide');
	}		
	for (x of n) {
		x.classList.add('hide');
	}		
}

function showButtons() {
	e = document.querySelector('#equals');
	n = document.querySelectorAll('.number');
	o = document.querySelectorAll('.operation');
	
	e.classList.remove('hide');

	for (x of o) {
		x.classList.remove('hide');
	}		
	for (x of n) {
		x.classList.remove('hide');
	}	
}
*/

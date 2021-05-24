s = document.querySelector('#screen');
on = document.querySelector('#on');
on.addEventListener('click', turnOn);


function turnOn() {
	s.innerText = '';
 	s.classList.remove('hide');
}

numButt = document.querySelector('#numberButtons');
numButt.addEventListener('click', num);

function num(e) {
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
}

operButt = document.querySelector('#operationButtons');
operButt.addEventListener('click', operand);

function operand(e) {
	e.preventDefault();
	if(e.target.value == undefined) return;
	operandText();
	opText.innerText += e.target.value;
	createSecondNumber();
}

function operandText() {
	opText = document.createElement('span');
	opText.setAttribute('id', 'op1');
	document.body.appendChild(opText);
}

function createSecondNumber() {
	secondNumber = document.createElement('span');
	secondNumber.setAttribute('id', 'num2');
	document.body.appendChild(secondNumber);
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
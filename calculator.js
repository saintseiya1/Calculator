s = document.querySelector('#screen');
on = document.querySelector('#on');
off = document.querySelector('#off');
on.addEventListener('click', turnOn);
off.addEventListener('click', turnOff);

function turnOn() {
	s.innerText = '';
 	s.classList.remove('hide');
}

function turnOff() {
 	s.classList.add('hide');
}

numButt = document.querySelector('#numberButtons');
numButt.addEventListener('click', num);

function num(e) {
	console.table(e);
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
}

operButt = document.querySelector('#operationButtons');
operButt.addEventListener('click', operand);

function operand(e) {
	console.table(e);
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
	calculate();
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
inputA = document.querySelector('#inputA');
inputA.addEventListener('click', activateA);
spA = document.querySelector('#spA');

inputB = document.querySelector('#inputB');
inputB.addEventListener('click', activateB);
spB = document.querySelector('#spB');

nb = document.querySelector('#numberButtons');
nb.addEventListener('click', enterNumber);

ob = document.querySelector('#operationButtons');
ob.addEventListener('click', enterOperand);
spO = document.querySelector('#spO');

cl = document.querySelector('#clear');
cl.addEventListener('click', clearScreen);

bk = document.querySelector('#backspace');
bk.addEventListener('click', backspace);

output = document.querySelector('#output');

function backspace() {
	alert('delete last item');
}

function activateA() {
	spA.classList.add('active');
	inputA.classList.add('highlight');
	spB.classList.remove('active');
	inputB.classList.remove('highlight');
}

function activateB() {
	spB.classList.add('active');
	inputB.classList.add('highlight');
	spA.classList.remove('active');
	inputA.classList.remove('highlight');
}

function isActive() {
	result = document.querySelector('.active');
	return result;
}

function enterNumber(e) {
	activeSpan = isActive();
	if(activeSpan) {
	text = [];
	text.push(e.target.value);
	activeSpan.innerText += text;
	}
}

function enterOperand(e) {
	if(e.target.value == undefined) return;
	spO.innerText = e.target.value;	
}

equals = document.querySelector('#equals');
equals.addEventListener('click', calculation);

function calculation() {
	a = spA.innerText;
	a = parseFloat(a);
	b = spB.innerText;
	b = parseFloat(b);
	op = spO.innerText;
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
		output.innerText = ' = ' + out;
	}
}

function clearScreen() {
	spanAll = document.querySelectorAll('span');
	spanLength = spanAll.length - 1;

	for (x = 0; x <= spanLength; x++) {
		spanAll[x].innerText = '';
	}
}
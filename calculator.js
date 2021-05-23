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
console.table(numButt);
numButt.addEventListener('click', num);

function num(e) {
	console.table(e);
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
}

operButt = document.querySelector('#operationButtons');
console.table(operButt);
operButt.addEventListener('click', operand);

function operand(e) {
	console.table(e);
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
}
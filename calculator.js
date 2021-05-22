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



n = document.querySelector('#numberButtons');
console.table(n);
n.addEventListener('click', num);

function num(e) {
	console.table(e);
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
}
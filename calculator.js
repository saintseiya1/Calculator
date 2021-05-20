s = document.querySelector('#screen');
o = document.querySelector('#on');
o.addEventListener('click', turnOn);

function turnOn() {
alert('hi');
}



n = document.querySelector('#numberButtons');
console.table(n);
n.addEventListener('click', num);

function num(e) {
	console.table(e);
	if(e.target.value == undefined) return;
	s.innerText += e.target.value;
}
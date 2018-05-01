var list = document.getElementById('list');
var add = document.getElementById('addElem');


add.addEventListener('click', function(e) {
	var itemsByTagName = document.getElementsByTagName('li');
	var dlugosc = itemsByTagName.length;
	var element = document.createElement('li');
	element.innerHTML = 'item ' + dlugosc;
	list.appendChild(element); 	
}); 









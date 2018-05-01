var list = document.getElementById('list');
var add = document.getElementById('addElem');


add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  element.innerHTML = 'item';
  var itemsByTagName = document.getElementsByTagName('li'); 
		  
	  
  list.appendChild(element);
  
  /*console.log(itemsByTagName.length) */
  
  /* var dlugosc = document.getElementsByTagName.length;
	console.log(dlugosc)  */
	
	var dlugosc = itemsByTagName.length;
	console.log(dlugosc)
	
}); 










/* function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});
inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
}); */

var pop=document.querySelector(".popop-overlay");
var addpopbutton=document.getElementById("add-button-poppop");

addpopbutton.addEventListener("click",function(){
	pop.style.display="block";
})

var cancelbutton=document.getElementById("cancel-popop")
var addcontent=document.getElementById("add-popop")

cancelbutton.addEventListener("click",function(event){
	event.preventDefault();
	pop.style.display="none";

})

var container=document.querySelector(".container");
var booktitle=document.getElementById("book-name");
var bookaurthor=document.getElementById("book-author");
var bookcontent=document.getElementById("book-content");


addcontent.addEventListener("click",function(event){
	event.preventDefault();
	var newDiv = document.createElement('div');
	newDiv.id = 'myDiv';
	newDiv.className = 'book-container';
	newDiv.innerHTML = `<h2>${booktitle.value}</h2>
			<h5>${bookaurthor.value}</h5>
			<p>${bookcontent.value}</p>
			<button onclick="deletebook(event)">delete</button>`;
	container.append(newDiv);
	pop.style.display="none";


})
function deletebook(event){
	event.target.parentElement.remove();
}
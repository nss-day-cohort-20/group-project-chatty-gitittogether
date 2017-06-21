let myRequest = new XMLHttpRequest();

let checkboxes = document.getElementById("chatBody");

document.getElementById("dark-themed").addEventListener("click", function(){
	checkboxes.classList.toggle("dark-themed");
});

document.getElementById("large-text").addEventListener("click", function(){
	checkboxes.classList.toggle("large-text");
});
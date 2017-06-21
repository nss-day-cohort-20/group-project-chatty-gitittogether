let myRequest = new XMLHttpRequest();

let checkboxes = document.getElementById("chatBody");

document.getElementById("dark-theme").addEventListener("click", function(){
	checkboxes.classList.toggle("dark-theme");
});

document.getElementById("large-text").addEventListener("click", function(){
	checkboxes.classList.toggle("large-text");
});
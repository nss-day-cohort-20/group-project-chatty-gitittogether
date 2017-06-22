let checkboxes = document.getElementById("chatBody");
var darkTheme = document.getElementById("dark-theme");
var largeText =  document.getElementById("large-text");
var clearButton = document.getElementById("clear-btn");

darkTheme.addEventListener("click", function() {
  checkboxes.classList.toggle("dark-theme");
});

largeText.addEventListener("click", function() {
  checkboxes.classList.toggle("large-text");
});


// TODO First, create logic to toggle the button to be disabled on click
clearButton.addEventListener("click", function(){
	checkboxes.classList.toggle("clear-btn");
// TODO Second, hook up the logic to the arrays.
if (//when clicked there is is content then run){

} else {disabled}
});

let loadMessages = function(msg){
    console.log(msg);
}

chatChatChat.loadInitialMessages(loadMessages);






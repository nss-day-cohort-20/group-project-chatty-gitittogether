var darkTheme = document.getElementById("dark-theme");
var largeText =  document.getElementById("large-text");
let outputMessageArea = document.getElementById("message-output")


darkTheme.addEventListener("click", function() {
  outputMessageArea.classList.toggle("dark-theme");
});

largeText.addEventListener("click", function() {
  outputMessageArea.classList.toggle("large-text");
});

// ****************************JS & MB********************************
let messagesHub = function(messagesArr) {
	chatChatChat.addInitialMessages(messagesArr);
	chatChatChat.messagesAddToDOM();
}

let userInput = document.getElementById("message-input");

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    	let inputText = userInput.value;
    	chatChatChat.addNewMsgToArr(inputText);
    }
});

chatChatChat.loadInitialMessages(messagesHub);



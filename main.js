var darkTheme = document.getElementById("dark-theme");
var largeText =  document.getElementById("large-text");
let outputMessageArea = document.getElementById("message-output")
let clearBtn = document.getElementById("clear-btn")
let userInput = document.getElementById("message-input");


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



clearBtn.addEventListener("click", function(){
				if (outputMessageArea.firstChild){
					outputMessageArea.innerHTML = "";
					clearBtn.setAttribute("disabled", true);
				}
})

function clearTextBox(event, inputText) {
  if (inputText !== "") {
    userInput.value = "";
  }
};

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    	let inputText = userInput.value;
    	chatChatChat.addNewMsgToArr(inputText);
    	clearTextBox(inputText);
	}
})
	
chatChatChat.loadInitialMessages(messagesHub);



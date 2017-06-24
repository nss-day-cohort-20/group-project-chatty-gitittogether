let darkTheme = document.getElementById("dark-theme");
let largeText = document.getElementById("large-text");
let clearBtn = document.getElementById("clear-btn");
let outputMessageArea = document.getElementById("message-output")
let userInput = document.getElementById("message-input");

darkTheme.addEventListener("click", function() {
  outputMessageArea.classList.toggle("dark-theme");
});

largeText.addEventListener("click", function() {
  outputMessageArea.classList.toggle("large-text");
});

let messagesHub = function(messagesArr) {
	chatChatChat.addInitialMessages(messagesArr);
	chatChatChat.messagesAddToDOM();
}

clearBtn.addEventListener("click", function(){
	outputMessageArea.innerHTML = "";
	clearBtn.setAttribute("disabled", true);
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
    	clearBtn.disabled = false;
	}
})
	
chatChatChat.loadInitialMessages(messagesHub);
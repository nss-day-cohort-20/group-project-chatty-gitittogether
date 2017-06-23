// let checkboxes = document.getElementById("chatBody");
var darkTheme = document.getElementById("dark-theme");
var largeText = document.getElementById("large-text");
var clearBtn = document.getElementById("clear-btn");
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
    messagesAddToDOM();
}

let messagesAddToDOM = function() {

    allmessages = chatChatChat.getMessages();

    allmessages = allmessages.map(function(currentMessage) {
        let messageHolder = document.createElement("div");
        messageHolder.setAttribute("class", "eachMessage");
        messageHolder.innerHTML = currentMessage.msg;
        outputMessageArea.appendChild(messageHolder)

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "removeMessage");
        deleteBtn.innerHTML = "Delete";

        messageHolder.appendChild(deleteBtn)

        deleteBtn.addEventListener("click", function() {
            outputMessageArea.removeChild(messageHolder)
        })
        clearBtn.addEventListener("click", function() {
            if (outputMessageArea.contains(messageHolder)) {
                outputMessageArea.removeChild(messageHolder)
            } else {
                clearBtn.setAttribute("disabled", "disabled");
            }
            console.log("buttonworks");
        })
    })
}

	allmessages = chatChatChat.getMessages();

	allmessages = allmessages.map(function(currentMessage){
		let messageHolder = document.createElement("div");
		messageHolder.setAttribute("class", "eachMessage");
		messageHolder.innerHTML = currentMessage.msg;
		outputMessageArea.appendChild(messageHolder)

		let deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "removeMessage");
		deleteBtn.innerHTML = "Delete";
});

let userInput = document.getElementById("message-input");

function clearTextBox(event, inputText) {
  if (inputText != "") {
    userInput.value = "";
  }
};

userInput.addEventListener("keypress", function(event) {
    // invokes function to take any keypress to submit the user input to the DOM.
    if (event.key === "Enter") {
        let inputText = userInput.value;
        chatChatChat.addNewMsgToArr(inputText);
        clearTextBox(inputText);
    }
});

console.log(chatChatChat)
chatChatChat.loadInitialMessages(messagesHub);
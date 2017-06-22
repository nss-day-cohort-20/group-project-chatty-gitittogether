let checkboxes = document.getElementById("chatBody");
var darkTheme = document.getElementById("dark-theme");
var largeText =  document.getElementById("large-text");
var clearBtn = document.getElementById("clear-btn");



darkTheme.addEventListener("click", function() {
  checkboxes.classList.toggle("dark-theme");
});

largeText.addEventListener("click", function() {
  checkboxes.classList.toggle("large-text");
});


clearBtn.addEventListener("click", function(){
	clearBtn.classList.toggle("clear-btn");
})

clearBtn.setAttribute("disabled", "disabled");
// clearBtn.removeAttribute("disabled");
// enableBtn.addEventListener("click", function(){

// });

// ****************************JS & MB********************************
let messagesHub = function(messagesArr) {
	chatChatChat.addInitialMessages(messagesArr);
	messagesAddToDOM();
}

let messagesAddToDOM = function() {
	let outputMessageArea = document.getElementById("message-output");
	allmessages = chatChatChat.getMessages();


	allmessages = allmessages.map(function(currentMessage){
		let messageHolder = document.createElement("div");
		messageHolder.setAttribute("class", "eachMessage");
		messageHolder.innerHTML = currentMessage.msg;
		outputMessageArea.appendChild(messageHolder)
	
		let deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "removeMessage");
		deleteBtn.innerHTML = "Delete";

		messageHolder.appendChild(deleteBtn)

		deleteBtn.addEventListener("click", function(){
			outputMessageArea.removeChild(messageHolder)
		})
	})
}	

chatChatChat.loadInitialMessages(messagesHub);



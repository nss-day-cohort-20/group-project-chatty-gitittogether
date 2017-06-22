var chatChatChat = (function(oldChatChatChat) {
	let allMessagesArr = [];
	let outputArea = document.getElementById("message-output");

	oldChatChatChat.addInitialMessages = function(messagesArr) {
		allMessagesArr = messagesArr;
	}

	oldChatChatChat.getMessages = function() {
		return allMessagesArr;
	}

	oldChatChatChat.addNewMsgToArr = function(newMessageItem) {
		allMessagesArr.push(newMessageItem)
		console.log(allMessagesArr)
		let addNewMsg = document.createElement("div");
		addNewMsg.setAttribute("class", "eachMessage");
		addNewMsg.innerHTML = newMessageItem;
		outputArea.appendChild(addNewMsg);

		let deleteBtn = document.createElement("button");
		deleteBtn.setAttribute("class", "removeMessage");
		deleteBtn.innerHTML = "Delete";

		addNewMsg.appendChild(deleteBtn)

		deleteBtn.addEventListener("click", function(){
			outputArea.removeChild(addNewMsg)
		})
		
		clearBtn.addEventListener("click", function(){
		outputArea.removeChild(addNewMsg)
		console.log("buttonworks");
		})
	}

	return oldChatChatChat;


}(chatChatChat|| {}));
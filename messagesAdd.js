var chatChatChat = (function(oldChatChatChat) {
	let allMessagesArr = [];
	let outputArea = document.getElementById("message-output");
	let clearBtn = document.getElementById("clear-btn")

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
			if (outputArea.contains(addNewMsg)){
				outputArea.removeChild(addNewMsg)
			}else{
				clearBtn.setAttribute("disabled", "disabled");
			}
		console.log("buttonworks");
		})
	}

	oldChatChatChat.messagesAddToDOM = function() {
		allmessages = chatChatChat.getMessages();

		allmessages = allmessages.map(function(currentMessage){
			let messageHolder = document.createElement("div");
			messageHolder.setAttribute("class", "eachMessage");
			messageHolder.innerHTML = currentMessage.msg;
			outputArea.appendChild(messageHolder)

			let deleteBtn = document.createElement("button");
			deleteBtn.setAttribute("class", "removeMessage");
			deleteBtn.innerHTML = "Delete";

			messageHolder.appendChild(deleteBtn)

			deleteBtn.addEventListener("click", function(){
				outputArea.removeChild(messageHolder)
			})
			clearBtn.addEventListener("click", function(){
				if (outputArea.contains(messageHolder)){
					outputArea.removeChild(messageHolder)
					console.log("buttonworks");
				}else{
					clearBtn.setAttribute("disabled", "disabled");
				}
			
			})
		})
	}

	return oldChatChatChat;

}(chatChatChat|| {}));
var chatChatChat = (function(oldChatChatChat) {
	let allMessagesArr = [];
	let outputArea = document.getElementById("message-output");

	oldChatChatChat.addInitialMessages = function(messagesArr) {
		allMessagesArr = messagesArr;
	}

	oldChatChatChat.getMessages = function() {
		return allMessagesArr;
	
	}

	return oldChatChatChat;


}(chatChatChat|| {}));
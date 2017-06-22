var chatChatChat = (function(oldChatChatChat){
	let allMessagesArr = [];

	oldChatChatChat.addInitialJson = function(json){
		allMessagesArr = json;
		console.log(allMessagesArr);
	}

	return oldChatChatChat;


}(chatChatChat|| {}));
var chatChatChat = ( function(oldChatChatChat) {

	let myRequest = new XMLHttpRequest();
	myRequest.addEventListener("load", executeIfSuccessful);
	myRequest.open("GET", "messages.json");
	myRequest.send();

	function executeIfSuccessful(messagesArr) {
		var fiveMessages = JSON.parse(event.target.responseText);
		console.log(fiveMessages);
		return fiveMessages;
	}

	return oldChatChatChat;

}(chatChatChat || {}));

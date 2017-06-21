var chatChatChat = ( function(oldChatChatChat) {

	let myRequest = new XMLHttpRequest();
	myRequest.addEventListener("load", executeIfSuccessful);
	myRequest.open("GET", "messages.json");
	myRequest.send();

	let messages = Object.create(null);
	
	function executeIfSuccessful(messagesArr) {
	var fiveMessages = JSON.parse(event.target.responseText);
		// console.log(fiveMessages);
	}

	messages.addMessage = function (){
		
	}
	return oldChatChatChat;

}(chatChatChat || {}));

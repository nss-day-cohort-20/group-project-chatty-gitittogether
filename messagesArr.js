var chatChatChat = (function(oldChatChatChat) {
	let messages = [];

    oldChatChatChat.loadInitialMessages = function(callBack) {
	    let myRequest = new XMLHttpRequest();
	    myRequest.addEventListener("load", function(){
	    	messages = JSON.parse(event.target.responseText);
	    	callBack(messages)	
	    });
	    myRequest.open("GET", "messages.json");
	    myRequest.send();
	}

    oldChatChatChat.loadMessages = function(){
    	console.log(messages);
    	return messages;
    }
   
    return oldChatChatChat;

}(chatChatChat || {}));

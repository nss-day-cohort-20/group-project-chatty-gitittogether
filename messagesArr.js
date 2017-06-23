var chatChatChat = (function(oldChatChatChat) {


  oldChatChatChat.loadInitialMessages = function(callBack) {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", function(){
    	let messages = JSON.parse(event.target.responseText).messages;
    	callBack(messages)
    });
    myRequest.open("GET", "messages.json");
    myRequest.send();
	}

  return oldChatChatChat;

}(chatChatChat || {}));

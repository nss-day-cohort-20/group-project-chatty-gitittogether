let checkboxes = document.getElementById("chatBody");

document.getElementById("dark-theme").addEventListener("click", function() {
  checkboxes.classList.toggle("dark-theme");
});

document.getElementById("large-text").addEventListener("click", function() {
  checkboxes.classList.toggle("large-text");
});

let messagesHub = function(messagesArr) {
  // console.log(messagesArr);
  chatChatChat.addInitialMessages(messagesArr);
}

let messagesAddToDOM = function() {

}


chatChatChat.loadInitialMessages(messagesHub);






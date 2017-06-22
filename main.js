let checkboxes = document.getElementById("chatBody");

document.getElementById("dark-theme").addEventListener("click", function() {
  checkboxes.classList.toggle("dark-theme");
});

document.getElementById("large-text").addEventListener("click", function() {
  checkboxes.classList.toggle("large-text");
});

let loadMessages = function(msg){
    console.log(msg);
}

chatChatChat.loadInitialMessages(loadMessages);

   

        


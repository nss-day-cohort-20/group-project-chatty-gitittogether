var chatChatChat = (function(oldChatChatChat) {
    var userInput = document.getElementById("message-input");
    userInput.addEventListener("keypress", function(event) {
        // invokes function to take any keypress to submit the user input to the DOM.
        if (event.key === "Enter") {
            // userInput.push(allMessagesArr);

            oldChatChatChat.getMessages.push(userInput.value);
            console.log(userInput.value);
        }
    });

    // var userOutput = document.getElementById("message-output")
    // userOutput.target.addEventListener("click", function() {
    //     // takes a click event and clears the DOM
    //     // removes the corresponding message from the private array
    // });


    return oldChatChatChat;

}(chatChatChat || {}));
let checkboxes = document.getElementById("chatBody");
var darkTheme = document.getElementById("dark-theme");
var largeText =  document.getElementById("large-text");
var clearBtn = document.getElementById("clear-btn");



darkTheme.addEventListener("click", function() {
  checkboxes.classList.toggle("dark-theme");
});

largeText.addEventListener("click", function() {
  checkboxes.classList.toggle("large-text");
});

clearBtn.addEventListener("click", function(){
	clearBtn.classList.toggle("clear-btn");
})

clearBtn.setAttribute("disabled", "disabled");
// clearBtn.removeAttribute("disabled");
// enableBtn.addEventListener("click", function(){

// });

let loadMessages = function(msg){
    console.log(msg);
}

chatChatChat.loadInitialMessages(loadMessages);






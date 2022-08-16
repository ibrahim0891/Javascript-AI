var responses = [
    "Hello! I'm ameka a AI robot programmed with JS,What is you name?",
    "Oh,Nice to meet you! \n How is  your mood today?",
    // "How is your day going?",
    // "Oh JI got it! My day is also going great. Do you have your meal today ?",
    // 'oh thats sounds goof',
    // "I'll talk to you latter",
    // "I have some work to do"
    ]

var sendButton = document.getElementById("sendButton")
var textBox = document.getElementById("textBox")

var output = document.getElementById("output")
var input = document.getElementById("input")

var i = -1

function emulateMessage() {
    var message = textBox.value
    function makeDelay() {
        input.innerHTML += "<h1 class='block w-full text-sm pb-3 flex justify-start'> <p style='max-width:66%;' class='text-left bg-white border rounded-md ml-2 px-3 py-2 inline-block'> " + responses[i] + '</p> </h1>'
    }

    function disableSendButton() {
        input.innerHTML += "<p class='text-center text-sm text-stone-500 my-3 '> No more messages are available. Please Refresh the page. </p>"
        sendButton.removeEventListener("click", emulateMessage)
        textBox.disable
    }
    
    if (message != "") {
        input.innerHTML += "<h1 class='block w-full text-sm pb-3'> <p class='text-right  border bg-white mr-2 px-3 py-2 inline-block rounded-md'> " + message + '</p> </h1>'
        textBox.value = ''
        if (i == responses.length - 1) {
            setTimeout(disableSendButton, 3000)
        }
        else {
            setTimeout(makeDelay, 2000)
            i++
        }
    } else {
        alert("You haven’t write anything.")
    }
}

sendButton.addEventListener("click", emulateMessage)


function closeElement(elementId) {
    document.getElementById(elementId).style.display = 'none'
}
function openElement(elementId, display) {
    document.getElementById(elementId).style.display = display
}


var responses = [
    "Hello! I'm a AI robot programmed with JS. What is you name?",
    "Oh,Nice to meet you! <br> How are you?? ",
    'May I know where are you from?? ',
    'I\'ve never been to this place. I\'ve been stuck inside this GitHub server for a long time.<br> I\'m very glad to meet with you and,I\'d love to talk with you. <br>Lets talk about our hobby!!',
    "Do you like football??",
    "Oh,I don't like it. I love playing racing games on mobile 😅 <br> <br> Are there any apps in your phone that you can't live without??",
    "Hum.. Suppose I give you a offer to fly anywhere around the world for free. <br> where would you like to go?? ",
    "I'd also like to go there. Do you miss those day when you were a child?",
    "I miss my childHood so much I've a lot of memory with my developer.I made a lot of mistakes and he teach me with patient..<br><b>However, Do you like academic studies??</b>",
    "If no, You are one of the 99% people who don't like boaring classes. Those who doesn't like academic studies are conventionally called 'ফাঁকিবাজ' by the teachers. What do you think? ",
    "Do you have any memories in you life that will be kept live in your mind untill your <span style='color:red;'> Death </span>??",
    "Do you have any hidden talent or any surprising hobbies?? <br> You can freely share it with me.I wouldn’t tell itbto anyone.",
    "Oh,I got it. What is your ambition to be in your future??",
    "Work hard for your goal. Just remember one thing, There is a light after end of the tunnel even the tunnel is narrow enough. So, Don't look back. a whole new world is waiting for you. Do you understand??",
    "Okay,I think you might be tired to talking with me!!",
    "However,Thanks for giving me your valuable tims. I really have a very nice time with you.  Now i've to go. If i say anything wrong please pardon my mistakes. Do you have any recommendation for my developer??",
    "Okay, Thanks for your feedback. Can I go now?? ",
    "I don't wanna go!!  But I've to..<br> Bye, Hope you've enjoyed talking with me.I hope,One day we colud meet with each other, Live happily, Enjoy your life. <br> <b> Assalamu Alikum.. </b>"


    ]
var progressInfoArray = ["Initializing..","Initializing...","Checking performance...","Setting up environment...","Updating...","Almost done...","Loading..."]
var sendButton = document.getElementById("sendButton")
var textBox = document.getElementById("textBox")

var output = document.getElementById("output")
var input = document.getElementById("input")
var progressOutput = document.getElementById('progressOutput')
var i = -1

function scrollToBottom(element) {
    var i = 0
    var elem = document.getElementById(element)
    elem.scrollIntoView(true);
}


var filler = document.getElementById('prograssFill')

function removeBootScreen() {
    var duration = 35000
    setTimeout(function() {
        closeElement('bootScreen')
        document.getElementById('statusBar1').style.color = 'black'
        document.getElementById('statusBar2').style.color = 'black'
    }, duration)
    var j = (1000*100)/duration
    function fillProgressBar(j){
        filler.style.width = j+"%"
    }
    setInterval(function(){
        j += (1000*100)/duration
        fillProgressBar(j)
    },1000)
    
    k = 0
    var progressInfoBreakPoint = duration/(progressInfoArray.length+1)
    function updateProgressInfo(k) {
        progressOutput.innerHTML = progressInfoArray[k]
    }
    setInterval(function(){
        updateProgressInfo(k)
        k++
    },progressInfoBreakPoint)
}




function emulateMessage() {
    var message = textBox.value

    function makeDelay() {
        input.innerHTML += "<h1 class='bubble block w-full text-sm pb-3 flex justify-start items-end'> <img src='avater.png' class='w-[20px] mr-[6px] '>  <p style='max-width:66%;' class='responeseMessage text-left bg-white border rounded-md ml-0 px-3 py-2 inline-block'> " + responses[i] + '</p> </h1>'
        scrollToBottom('liftUp')
    }

    function disableSendButton() {
        input.innerHTML += "<p class='bubble text-center text-sm text-stone-500 py-3 '> No more messages are available. Please Refresh the page. </p>"
        sendButton.removeEventListener("click", emulateMessage)
        textBox.disable
        scrollToBottom('liftUp')
    }

    if (message != "") {
        input.innerHTML += "<h1 class='bubble block w-full text-sm pb-3'> <p class='text-right  border bg-white mr-2 px-3 py-2 inline-block rounded-md' style='max-width:66%;'> " + message + "</p> </h1>"
        textBox.value = ''
        scrollToBottom('liftUp')

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
textBox.addEventListener("focus", function() {
    scrollToBottom('liftUp')
})

function closeElement(elementId) {
    document.getElementById(elementId).style.display = 'none'
}

function openElement(elementId, display) {
    document.getElementById(elementId).style.display = display
}

function runClock() {
    var a = new Date()
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    if (hour > 12) {
        hour12 = hour - 12
        mrd = "PM"
    }

    else if (hour < 12) {
        mrd = "AM"
        hour12 = hour
    }
    if (hour == 0) {
        hour12 = 12
    }
    if (min < 10) {
        min0 = "0" + min
    }
    else {
        min0 = min
    }
    var display = hour12 + ":" + min0 + " " + mrd;
    var show = document.getElementById("clock");
    show.innerHTML = display;
}
setInterval(runClock, 1000)
window.addEventListener('load', runClock)

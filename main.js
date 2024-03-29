/* An array of strings that contains the responses of the AI. */
var responses = [
    "Hello! I'm a AI robot programmed with JS. What is your name?",
    "Oh Okay,Nice to meet you!<br> How are you?? ",
    'May I know where are you from?? ',
    'I\'ve never been to this place. I\'ve been stuck inside this GitHub server for a long time.<br> I\'m very glad to meet with you and,I\'d love to talk with you. <br>Lets talk about our hobby!!',
    "Do you like football??",
    "Oh,I don't like it. I love playing racing games 🏎️ on mobile 😅 <br> <br> Are there any apps in your phone that you can't live without??",
    "okay, I got it. Would you like to say anything about yourself?",
    "Oh,As you know I'm an AI. So, I may say something that is not relevant to your mesaage. </br> But,trust me it is not my fault. My stupid developer is behind everything.<br> However, Let's talk about our daily activities..",
    "When do you get up from bed?",
    "Oh,That's quit early!!. But see me.. I have to stay awake 24/7. Being an Ai I've to work 24/7. By the way, what is the name of your best friend??",
    "I have a best friend, and that is me. I trust myself more than anyone else. Do you know a interesting fact about Ai? ",
    "They are literally dumb (except me)😁😁, However,What type of devise you are using now??  laptop of mobile?? ",
    "Hum..Suppose I give you a offer to fly anywhere around the world for free. <br> where would you like to go?? ",
    "I'd also like to go there. Do you miss those day when you were a child?",
    "I miss my childHood so much I've a lot of memory with my developer.I made a lot of mistakes and he teach me with patient..<br><b>However, Do you like academic studies??</b>",
    "If no, You are one of the 99% people who don't like boaring classes. Those who doesn't like academic studies are conventionally called 'ফাঁকিবাজ' by the teachers. What do you think? ",
    "Do you have any memories in you life that will be kept alive in your mind untill your <span style='color:red;'> Death </span>??",
    "Do you have any hidden talent or any surprising hobbies?? <br> You can freely share it with me.I wouldn’t tell itbto anyone.",
    "Oh,I got it. What is your ambition to be in your future??",
    "Work hard for your goal. Just remember one thing, There is a light after end of the tunnel even the tunnel is narrow enough. So, Don't look back. a whole new world is waiting for you. Do you understand??",
    "Okay,I think you might be tired to talking with me!!",
    "However,Thanks for giving me your valuable tims. I really have a very nice time with you.  Now i've to go. If i say anything wrong please pardon my mistakes. Do you have any recommendation for my developer??",
    "Okay, Thanks for your feedback. Can I go now?? ",
    "I don't wanna go!!  But I've to..<br> Bye, Hope you've enjoyed talking with me.I hope,One day we colud meet with each other, Live happily, Enjoy your life. <br> <b> Assalamu Alikum.. </b>"


    ]
var progressInfoArray = ["Initializing..","Initializing...","Checking performance...","Updating...","Loading..."]
var sendButton = document.getElementById("sendButton")
var textBox = document.getElementById("textBox")

var output = document.getElementById("output")
var input = document.getElementById("input")
var progressOutput = document.getElementById('progressOutput')

var i = -1

/**
 * Scroll to the bottom of the element with the id of 'element'.
 * @param element - The id of the element you want to scroll to.
 */
function scrollToBottom(element) {
    var i = 0
    var elem = document.getElementById(element)
    elem.scrollIntoView(true);
}


var filler = document.getElementById('prograssFill')

/**
 * It takes a duration in milliseconds, and then it fills a progress bar and updates a progress info
 * text with a set interval
 */
function removeBootScreen() {
    /* Closing the boot screen after 10 seconds. */
    var duration = 3000
    setTimeout(function() {
        closeElement('bootScreen')
        document.getElementById('statusBar1').style.color = 'black'
        document.getElementById('statusBar2').style.color = 'black'
        openElement("sideNav","flex")
    }, duration)
    /**
     * It fills the progress bar with the percentage of the duration of the bootscreen time.
     * @param j - The percentage of the progress bar that should be filled.
     */
    var j = (1000*100)/duration
    function fillProgressBar(j){
        filler.style.width = j+"%"
    }
    setInterval(function(){
        j += (1000*100)/duration
        fillProgressBar(j)
    },1000)
    
    k = 0
    /**
     * It takes the duration of the bootscreen time and divides it by the number of elements in the array, and
     * then updates the progressOutput element with the value of the array at the index of the current
     * time divided by the breakpoint.
     * @param k - the index of the progressInfoArray
     */
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
        input.innerHTML += "<h1 class='bubble block w-full text-sm pb-3 flex justify-start items-end'> <img src='avater.png' class='w-[20px] mr-[6px] '>  <p style='max-width:66%;' class='responeseMessage text-left bg-white border rounded-lg rounded-bl-sm ml-0 px-3 py-2 inline-block'> " + responses[i] + '</p> </h1>'
        scrollToBottom('liftUp')
    }

    function disableSendButton() {
        input.innerHTML += "<p class='bubble text-center text-sm text-stone-500 py-3 '> No more messages are available. Please Refresh the page. </p>"
        sendButton.removeEventListener("click", emulateMessage)
        textBox.disable
        /* Scrolling to the bottom of the element with the id of 'liftUp'. */
        scrollToBottom('liftUp')
    }

    if (message != "") {
        input.innerHTML += "<h1 class='bubble block w-full text-sm pb-3'> <p class='text-left  border bg-white mr-2 px-3 py-2 inline-block rounded-lg rounded-br-sm' style='max-width:66%;'> " + message + "</p> </h1>"
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

/* A function that is called every second to update the time in the status bar. */
function runClock() {
    var a = new Date()
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    
    if (hour => 12) {
        hour12 = (hour - 12)
        mrd = "PM"
    }

    if (hour < 12) {
        mrd = "AM"
        hour12 = hour
    }
    if (hour12 == 0) {
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

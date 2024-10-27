let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    speechSynthesis.cancel();

    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    speechSynthesis.cancel();
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
     content.innerText=transcript
    takeCommand(transcript.toLowerCase())
 }



btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})

function takeCommand(message) {
    speechSynthesis.cancel();
    voice.style.display = "none";
    btn.style.display = "flex";
    
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("My name is Jarvis, I am a Virtual Assistant and developed by Sohaib");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The current time is " + time);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak("Today is " + date);
    } else {
        let finalText = "This is what I found on the internet regarding " + message.replace(/shipra|shifra/g, "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace(/shipra|shifra/g, "")}`, "_blank");
    }
}

 // Set up speech recognition
//  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//  const recognition = new SpeechRecognition();
//  recognition.lang = "en-US";
//  recognition.interimResults = false;

//  // Handle recognition results
//  recognition.onresult = function(event) {
//      const message = event.results[0][0].transcript.toLowerCase();
//      console.log("Voice input:", message);
//      takeCommand(message);
//  };

//  recognition.onerror = function(event) {
//      console.error("Speech recognition error:", event.error);
//      speak("Sorry, I didn't catch that. Could you repeat?");
//  };


//   // Function to start listening
//   function startListening() {
//     voice.style.display = "block";
//     speak("I am listening");
//     console.log("Starting recognition..."); // Debug statement
//     recognition.start();
// }


// // Re-run recognition on end to continue listening
// recognition.onend = function() {
//     voice.style.display = "none";
//     // Remove auto-restart to avoid looping errors
//     console.log("Stopped listening. Click the button to start again.");
// };
// // Handle recognition results
// recognition.onstart = function() {
//     console.log("Speech recognition started.");
// };
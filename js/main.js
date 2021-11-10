let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am your helper", "Hi, I am a Robo", "Hello, My name is Chitti"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am fine, what about you", "i am good"];
let thank = ["Most welcome","Not an issue","Its my pleasure"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let eligibility = ['for B tech , in board exam minimum 45 percentage in PCM for more detail visit https://www.charusat.ac.in/admission/doc/AdmissionsEligibility.pdf']
let numberofseats_IT = ['For information technology related branch,  the total number of seats are 300 in CSPIT and 300 in depstar for more information visit https://charusat.ac.in/admission/"]  
let admission = ['In Engineering , 75 % Government quota seats will be filled by ACPC and rest 25 % Management quota seatswill be filled by University. In this 25% seats, 15% seats are filled under NRI sponsored quota and 10% seats are filled under Management quota.']
let fees = ['You can get detail from https://www.charusat.ac.in/files/CHARUSAT_Admissions_FAQ2020%20_Version11.pdf Question Number 6 ']
let accomodation_boy =['Boys’ hostels are outsourced at 8 different locations within a radius of 1 km. These hostels have a housing capacity for about 1500 boys. AC as well Non AC accommodation is available at these Hostels. Facilities available at these hostels include Dining hall, Sports, reading room, TV room, Wi-Fi connectivity and transport facilities to the campus and back. For further information contact Jignesh Patel – 98794 38045.]
let accomodation_girl = ['CHARUSAT campus has 4 Girls’ hostels. These hostels have a housing capacity for 1200 girls. AC as well Non AC accommodation is available at these Hostels. AC accommodations are on requests.']
let hostel = ['For briefly detail visit https://www.charusat.ac.in/hostels.php']


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('can you help me')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }

    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})

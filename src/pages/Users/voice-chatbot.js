
import React, { useEffect, useState } from 'react'
import sass from "./index.module.scss"
import axios from 'axios';

function Quizz() {
    document.addEventListener('DOMContentLoaded', () => {
        const chatBody = document.getElementById('chat-body');
        const talkBtn = document.getElementById('talk-btn');
        let recognizing = false;
        
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        const synthesis = window.speechSynthesis;
    
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.onstart = () => recognizing = true;
        recognition.onerror = () => recognizing = false;
        recognition.onend = () => recognizing = false;
    
        recognition.onresult = (event) => {
            const speechToText = event.results[event.resultIndex][0].transcript.trim();
            addUserMessage(speechToText);
            processUserMessage(speechToText);
        };
    
        talkBtn.addEventListener('click', () => {
            if (recognizing) {
                recognition.stop();
                return;
            }
            recognition.start();
        });
    
        function addBotMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'bot-message');
            messageDiv.textContent = text;
            chatBody.appendChild(messageDiv);
            speak(text);
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    
        function addUserMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'user-message');
            messageDiv.textContent = text;
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    
        function speak(text) {
            if (synthesis.speaking) {
                synthesis.cancel();
            }
            const utterance = new SpeechSynthesisUtterance(text);
            synthesis.speak(utterance);
        }
    
        function processUserMessage(text) {
            if (text.toLowerCase().includes('quiz')) {
                const response = 'Sure, I can help with that. Are you looking for a particular type of quiz?';
                addBotMessage(response);
            } else {
                addBotMessage('I can help you to solve the quiz. Please tell me what subject you are interested in.');
            }
        }
    
        // Initial Bot Greeting
        addBotMessage('Hi there! You can speak to me about quizes. What topic do you want to choose?');
    });

    const [post, setPost] = useState([])

    useEffect(() =>{
        axios.get('https://question-generate.onrender.com/generate_questions/?text=chemistry&question_type=t&question_count=3&question_difficulty=hard')
        .then(res => {setPost(res.data)
        .then(res => (console.log(res)))

        
        })
     })


  return (
       <div className={sass.users}>
           <div className={sass.container}>
          <h1>Quiz App</h1>
          <hr />
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, laboriosam.</h2>
          <ul>
            <li>somendjdjdjd</li>
            <li>somendjdjdjd</li>
            <li>somendjdjdjd</li>
            <li>somendjdjdjd</li>
          </ul>
          <button>Next</button>
          <div className={sass.index}>1 of 5 questions</div>
        </div>
          <div id={sass.chatbotContainer}>
          <div id={sass.chatheader}>Voice Chatbot</div>
          <div id={sass.chatbody}>
          </div>
          <div id={sass.chatfooter}>
              <button id={sass.talkbtn} className={sass.microphonebtn}>🎤</button>
          </div>
      </div>
       </div>
  )
}

export default Quizz
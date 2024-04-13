const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const mychatbot = document



closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot")); 


// const heading = document.querySelector('.heading h2');
// const text = heading.innerText;
// let index = 0;
// let reverseIndex = text.length;

// function typeEffect() {
//   heading.innerText = text.slice(0, index);
//   index++;
//   if (index > text.length) {
//     clearInterval(typing);
//     setTimeout(reverseEffect, 1000);
//   }
// }

// function reverseEffect() {
//   heading.innerText = text.slice(0, reverseIndex);
//   reverseIndex--;
//   if (reverseIndex < 0) {
//     clearInterval(reversing);
//     setTimeout(() => {
//       index = 0;
//       reverseIndex = text.length;
//       typing = setInterval(typeEffect, 100);
//     }, 1000);
//   }
// }

// let typing = setInterval(typeEffect, 100);

// 💬 Love letter text
const text =
  "I just wanted to say...\n" +
  "You make my days brighter 🌸\n" +
  "My smiles wider 😊\n" +
  "And my heart happier ❤️\n\n" +
  "Will you be my Valentine? 💘";

// ⌨️ Typewriter effect
let index = 0;
const letterElement = document.getElementById("letter");

function typeWriter() {
  if (index < text.length) {
    letterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

// 💔 No button messages
const messages = [
  "Are you sure? 😢",
  "Think again 🥺",
  "It will hurt my heart 💔",
  "Pleaseeee 😭",
  "Okay now you HAVE to say yes 😏",
];

let messageIndex = 0;

// ❌ No button logic (your code refined)
function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

// ✅ Yes button logic
function handleYesClick() {
  window.location.href = "yes_page.html";
}

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

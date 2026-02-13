const letterEl = document.getElementById("letter");
let text = "";
let index = 0;
let yesScale = 1;

// START LOVE
function startLove() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) return alert("Please enter your name 💕");

  document.getElementById("name-step").style.display = "none";
  document.getElementById("love-step").style.display = "block";
  document.getElementById("nameTitle").innerText = `Dear ${name} ❤️`;

  text =
    `I just wanted to say...\n` +
    `You make my days brighter 🌸\n` +
    `My smiles wider 😊\n` +
    `And my heart happier ❤️\n\n` +
    `So ${name}, will you be my Valentine? 💘`;

  index = 0;
  letterEl.innerHTML = "";
  typeWriter();
}

// TYPEWRITER
function typeWriter() {
  if (index < text.length) {
    letterEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

// NO BUTTON
const messages = [
  "Are you sure? 😢",
  "Think again 🥺",
  "That hurts 💔",
  "Pleaseeee 😭",
  "Okay now say YES 😏",
];
let msgIndex = 0;

function handleNoClick() {
  const noBtn = document.querySelector(".no-button");
  const yesBtn = document.getElementById("yesBtn");

  noBtn.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// YES BUTTON
function handleYesClick() {
  document.getElementById("love-step").style.display = "none";
  document.getElementById("yes-step").style.display = "block";
  createConfetti();
  drawConfetti();
}

// ❤️ HEARTS
const heartsContainer = document.getElementById("hearts-container");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);

// 🎉 CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const pieces = [];

function createConfetti() {
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 6 + 4,
      dx: Math.random() * 8 - 4,
      dy: Math.random() * -8 - 4,
      life: 100,
      color: `hsl(${Math.random() * 360},100%,60%)`,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    p.dy += 0.3;
    p.life--;
    if (p.life <= 0) pieces.splice(i, 1);
  });
  if (pieces.length) requestAnimationFrame(drawConfetti);
}

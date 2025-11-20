const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const startBtn = document.getElementById("startBtn");
const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const answerBtn = document.getElementById("answerBtn");


let gameRunning = false;
let hasKey = false;
let questionAnswered = false;


let player = {
x: 100,
y: 380,
w: 60,
h: 80,
vy: 0,
onGround: false,
gravity: 1,
img: new Image()
};
player.img.src = "https://i.ibb.co/QpWJrdb/city-player.png";


let enemy = {
x: 600,
y: 390,
w: 60,
h: 70,
dir: 1,
img: new Image()
};
enemy.img.src = "https://i.ibb.co/3pMM7kM/city-enemy.png";


let key = {
x: 400,
y: 360,
w: 40,
h: 40,
taken: false,
img: new Image()
};
key.img.src = "https://i.ibb.co/Vx7yM4f/key.png";


let door = {
x: 820,
y: 330,
w: 60,
h: 120
};


let keys = {};
document.addEventListener("keydown", e => (keys[e.key] = true));
document.addEventListener("keyup", e => (keys[e.key] = false));


startBtn.onclick = () => {
}

const canvas = document.getElementById("canvas");
const body = document.querySelector("body");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let theColor = "";
let lineW = 5;
let draw = false;
let rect = canvas.getBoundingClientRect();

body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function() {
    theColor = theInput.value;
    body.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function () {
draw = false;
lineW = document.getElementById("ageInputId").value;
document.getElementById("ageOutputId").innerHTML = lineW;
ctx.lineWidth = lineW;
};

let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
clr.addEventListener("click", () => {
ctx.strokeStyle = clr.dataset.clr;
});
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
let data = canvas.toDataURL("image/png");
let a = document.createElement("a");
a.href = data;
a.download = "sketch.png";
a.click();
});

canvas.addEventListener("mousedown", (e) => {
draw = true;

let x = e.clientX - rect.left;
let y = e.clientY - rect.top;
ctx.beginPath();
ctx.moveTo(x, y);
});

canvas.addEventListener("mouseup", () => {
draw = false;
});

canvas.addEventListener("mousemove", (e) => {
if (!draw) return;
let x = e.clientX - rect.left;
let y = e.clientY - rect.top;
ctx.lineTo(x, y);
ctx.stroke();
});
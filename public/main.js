
const socket = io();

const messages = document.querySelector('ul');
const form = document.getElementById('messageForm');
const input = document.getElementById("messageBox");
const divBox = document.getElementById("messageContainer");
const username = prompt("Enter username").substr(0, 50)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value != "") {
        socket.emit('client_msg', input.value, username)
        input.value = "";
    }
});

setInterval(() => {
    let color_input = document.getElementById("color_input_bg").value;
    document.body.style.backgroundColor = color_input;
    let color_input_brdr = document.getElementById("color_input_brdr").value;
    document.getElementById("messageContainer").style.outlineColor = color_input_brdr;
    let color_input_txt = document.getElementById("color_input_txt").value;
    document.body.style.color = color_input_txt;
}, 200);

socket.on('server_msg', (message) => {
    const item = document.createElement('li');
    item.textContent = message;
    messages.appendChild(item)
    document.querySelector("audio").play();
    divBox.scrollTo(0, divBox.scrollHeight);
});

function menuToggle(state) {
    document.getElementById("customMenuPanel").style.display = state;
  }
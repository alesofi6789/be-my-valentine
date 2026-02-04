console.log("Script ejecutado correctamente");

const messages = [
    "Seguro?",
    "Muy seguro??",
    "Eres positivo?",
    "Pookie please...",
    "Solo piénsalo!",
    "Si dices que no, estaré muy triste...",
    "Me pondré muy triste...",
    "Muy muy muy triste...",
    "Está bien, dejaré de preguntar...",
    "Bromita, di que sí, porfis! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
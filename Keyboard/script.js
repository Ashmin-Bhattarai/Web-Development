const lettersTotal = [..."abcdefghijklmnopqrstuvwxyz"];
let letters = lettersTotal.slice();
let letter;

function randomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function setKey() {
    console.log(letters.length);
    if (letters.length === 0) {
        letters = lettersTotal.slice();
    }
    letter = randomLetter();
    const key = document.querySelector(`#${letter}`)
    key.classList.toggle("selected");
}

document.body.addEventListener("keydown", (e) => {
    const keyPressed = e.key;
    const keyDown = document.querySelector(`#${keyPressed}`);
    // console.log(keyDown);
    keyDown.classList.toggle("push-key");
    if (keyPressed === letter) {
        letters.splice(letters.indexOf(letter), 1);
        keyDown.classList.toggle("selected");
        setKey();
    }
});

document.body.addEventListener("keyup", (e) => {
    const keyPressed = e.key;
    const keyDown = document.querySelector(`#${keyPressed}`);
    // console.log(keyDown);
    keyDown.classList.toggle("push-key");
});

setKey();

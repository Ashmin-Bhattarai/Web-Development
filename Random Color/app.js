const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');


button.addEventListener('click', function () {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor[0];
    h1.innerHTML = newColor[0];
    h1.style.color = newColor[2];
    h2.innerHTML = newColor[1];
    h2.style.color = newColor[2];
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    rh = r.toString(16);
    gh = g.toString(16);
    bh = b.toString(16);


    return [`rgb(${r}, ${g}, ${b})`, `#${rh}${gh}${bh}`, `rgb(${255 - r}, ${255 - g}, ${255 - b})`];
}

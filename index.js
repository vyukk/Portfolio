document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const colors = ['#FFDDC1', '#D4E157', '#FFEB3B', '#81D4FA', '#FF7043'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

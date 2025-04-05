// 색상 배열
const colors = [
    '#a9d1f3',
    '#ecf6ba',
    '#cff7bf',
    '#f7d2c4',
    '#c4d2f7',
    '#c7abf6',
    '#abb7f6',
    '#fadbf2',
];

function getRandomColors(array) {
    const randomIndex1 = Math.floor(Math.random() * colors.length);
    let randomIndex2 = Math.floor(Math.random() * colors.length);

    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * colors.length);
    }

    return [array[randomIndex1], array[randomIndex2]];
}

const [color1, color2] = getRandomColors(colors);

const gradient = `linear-gradient(to bottom, ${color1}, ${color2})`;

document.body.style.background = gradient;
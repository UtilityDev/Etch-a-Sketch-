let grid = document.querySelector('.grid');

const resizeBtn = document.querySelector('#resize-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');

const maxGridSize = 64;
let rainbowMode = false;
let cells = [];

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${grid.clientWidth/size}px`;
        cell.style.height = `${grid.clientWidth/size}px`;
        grid.appendChild(cell);
    }
}
createGrid(16);

function draw() {
    cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            if (rainbowMode) {
                cell.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            } else {
                cell.style.backgroundColor = '#666666';
            }
        });
    });
}
draw();

// Resize grid
resizeBtn.addEventListener('click', () => {
    let size = parseInt(prompt('Grid Size (px): '));
    if (size <= maxGridSize) {
        cells.forEach((cell) => {
            cell.remove();
        });
        createGrid(size);
        draw();
    }
});

rainbowBtn.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
});
let grid = document.querySelector('.grid');

const resizeBtn = document.querySelector('#resize-btn');

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

let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#666666';
    });
});
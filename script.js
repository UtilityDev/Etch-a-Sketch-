let grid = document.querySelector('.grid');

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

createGrid(16);
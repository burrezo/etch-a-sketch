
const body = document.querySelector('body');

function drawGrid (cells) {
    let cellsxcells = Math.pow(cells,2);

    const grid = document.createElement('div');
    grid.setAttribute('id','grid');
    grid.classList.add('grid');
    grid.style.gridTemplateColumns = `repeat(${cells},${400/cells}px)`;
    body.appendChild(grid);

    for(let i = 0; i < cellsxcells; i++){
        
        const div = document.createElement('div');
        div.style.width = (400/cells).toString() +'px';
        div.style.height = (400/cells).toString() +'px';
        grid.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.classList.add('sketch');
        })
    }
}

function deleteGrid () {
    const grid = document.getElementById('grid');
    body.removeChild(grid);
}

const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    let gridSize;

    do {
        gridSize = prompt('Insert new grid size, between 16 a 100:');
    } while (gridSize > 100 || gridSize < 16);
    
    deleteGrid();    
    drawGrid(gridSize);

    const divs = document.querySelectorAll('.sketch');
    divs.forEach(div => div.classList.remove('sketch'));

});

drawGrid(16);
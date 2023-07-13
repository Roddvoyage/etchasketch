const grid = document.getElementById('grid');


function makeGrid(rows, cols) {
   grid.style.setProperty('--grid-rows', rows);
   grid.style.setProperty('--grid-cols', cols);

   for(let i = 0; i<(cols * rows); i++) {
    let cell = document.createElement('div');
    grid.appendChild(cell).className = 'grid-item';
   };
};
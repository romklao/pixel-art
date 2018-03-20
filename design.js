"use strict" ;

// Select color input

// Select size input
// When size is submitted by the user, call makeGrid()
let table = document.querySelector('#pixelCanvas');

function makeGrid(event) {
  // Your code goes here!
    event.preventDefault();
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    let m = document.querySelector('#inputHeight').value;
    let n = document.querySelector('#inputWidth').value;

    for (let i = 0; i < m; i += 1) {
        let row = document.createElement('tr');

        for (let j = 0; j < n; j += 1) {
            let cell = document.createElement('td');

            cell.addEventListener('click', function() {
                let myCustomColor = document.querySelector('#colorPicker').value;
                this.style.backgroundColor = myCustomColor;
            });
        row.appendChild(cell);
        }
    table.appendChild(row)
    }
}

document.querySelector('#sizePicker').addEventListener('submit', makeGrid);















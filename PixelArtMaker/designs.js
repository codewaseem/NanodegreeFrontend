const colorPicker = document.querySelector('#colorPicker');
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');

function makeGrid(event) {
  event.preventDefault();
  const table = document.getElementById('pixelCanvas');
  table.setAttribute("style", "color:red; border: 1px solid blue;");
  for (let r=0; r<height.value; r++){
    const row = document.createElement('tr');
    table.appendChild(row);
    for (let c=0; c<width.value; c++){
       const cell = document.createElement('td');
       row.appendChild(cell);
    }
  }
}

form.addEventListener('submit', makeGrid);

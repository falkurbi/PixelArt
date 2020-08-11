// Select color input
function colorCells() {
    let color = document.getElementById("colorPicker");
    let cells = document.getElementById('pixelCanvas');

    //Change the color of the cell when the user click on a specific cell.

    cells.addEventListener('click' , function(event){
        if (event.target.tagName === 'TD'){
            event.target.style.backgroundColor = color.value;
        }
    })  
}


// When size is submitted by the user, call makeGrid()

const formSubmit = document.getElementById("sizePicker");
formSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});


function makeGrid() {

    // Select size input
    //Takes the value of the height and width after the user puts them.

    let sizeHeight = document.getElementById("inputHeight").value;
    let sizeWidth = document.getElementById("inputWidth").value;

    //Building the table

    let table = document.getElementById("pixelCanvas");
    table.innerHTML = "";
    let tableInfo = "";

    for (let i = 0; i < sizeHeight; i++) {
        tableInfo += '<tr>';

        for (let j = 0; j < sizeWidth; j++) {
            tableInfo += '<td></td>'
        }
        tableInfo += '</tr>';
    }
    table.innerHTML = tableInfo;

    //Calling the coloring function.

    colorCells();
}
const container= document.createElement("div")
const board= document.createElement("div")
// here we are creating divs
const body = document.querySelector('body')
// get the body tag from html
    container.classList.add('container'); 
    board.classList.add('board');
    //target specific elements (i.e. container, board)
    body.appendChild(container);
    container.appendChild(board);
    //adding the container element to the body and adding the board to the container

function makeGrid(numberOfRows=16){
    //setting default variable 
    for (let i = 0; i < numberOfRows; i++){
        //where you want to start off, condition- how long you want to last, increments
        let row= document.createElement("div");
        //making the function to idirate through all rows
            row.classList.add('row');
            //adding row
            board.appendChild(row);
            // adding to board
    for (let j = 0; j < numberOfRows; j++){
        let cell= document.createElement("div");
        //making cells to 16 rows 
        cell.addEventListener("mouseover", function colorChange(e){
            cell.classList.add('black');
        })
            cell.classList.add('cell');
            row.appendChild(cell);
            //add ing cell to the row element or div
    }
    }
}
makeGrid()

const amountOfRows= document.createElement("input");
    amountOfRows.classList.add('amountOfRows');
    amountOfRows.setAttribute("type", "number");
    amountOfRows.setAttribute("min", "0");
    amountOfRows.setAttribute("max", "100");
    container.appendChild(amountOfRows);

const changeRowsBtn= document.createElement("button");
    changeRowsBtn.classList.add('changeRowsBtn');
    changeRowsBtn.textContent="Submit"
    container.appendChild(changeRowsBtn);
    changeRowsBtn.addEventListener("click", function (e){
    destory()
    makeGrid(amountOfRows.value)

    })

function destory (){
    board.innerHTML="";

}

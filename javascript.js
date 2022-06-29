const gridContainer = document.querySelector("#gridContainer");

createGrid(8);

function createGrid(gridCount){

    var createGrid = (600 / gridCount - 2) + "px" ;
    gridContainer.style.width = "600px";

    for (let i = 0; i < (gridCount * gridCount); i++) {

        var innerDiv = document.createElement('div');
        innerDiv.id = 'squareIndex'+i;
        innerDiv.className = 'innerSquare';
        innerDiv.style.width = createGrid;
        innerDiv.style.height = createGrid;


        gridContainer.appendChild(innerDiv);
        
        console.log(i);
    }
}
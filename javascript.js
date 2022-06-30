const gridContainer = document.querySelector("#gridContainer");
const btnGridSize = document.querySelector("#btnGridSize");
btnGridSize.addEventListener("click", checkUserGridSize);

createGrid(16);

function checkUserGridSize()  {
    var selGridSize;
    selGridSize = prompt("Select your desired grid size", "16");
    if (isNaN(parseInt(selGridSize))) {
        checkUserGridSize();
    } else {
        if (parseInt(selGridSize) > 100 || parseInt(selGridSize) < 1 ) {
            checkUserGridSize();
        } else {
        gridContainer.innerHTML = "";
        createGrid(parseInt(selGridSize));
        }
    }
}


function createGrid(gridCount){

    var createGrid = (600 / gridCount - 2) + "px" ;
    gridContainer.style.width = "600px";

    for (let i = 0; i < (gridCount * gridCount); i++) {

        var innerDiv = document.createElement('div');
        innerDiv.id = 'squareIndex'+i;
        innerDiv.className = 'innerSquare';
        innerDiv.style.width = createGrid;
        innerDiv.style.height = createGrid;
        innerDiv.style.opacity = 0;
        innerDiv.addEventListener("mouseover",changeGridColor)


        gridContainer.appendChild(innerDiv);
        
    }
}

function changeGridColor(){
    var opacityFactor = getComputedStyle(this).opacity;
    console.log(this.style.backgroundColo);
    if (this.style.backgroundColor == "black") {
    } else {
        opacityFactor = 0;
        this.style.backgroundColor = "black";

    }
    console.log(opacityFactor);
    opacityFactor = parseFloat(opacityFactor) + 0.1;
    console.log(opacityFactor);
    this.style.opacity = opacityFactor;
    console.log(getComputedStyle(this).opacity);
}
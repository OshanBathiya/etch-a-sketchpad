const container = document.querySelector("#container");
const gridSizeChangeBtn = document.querySelector("#gridSizeChangeBtn");

createGrid(16);

gridSizeChangeBtn.addEventListener("click", () => {
    const size = prompt("Enter the number of squares (<100) for a side:");

    if (size === null || isNaN(size) || size > 100) {
        alert("Invalid Input");
    } else {
        container.replaceChildren();
        console.log(size);
        createGrid(size);
    }
});

function createGrid (size) {

    for(let i=0; i<size*size; i++) {
        const square = document.createElement("div");
        square.setAttribute("id", "square");
        square.style.flexBasis = 100/size + "%";
        container.appendChild(square);
    }
    
    const squares = container.querySelectorAll("div");
    
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            event.currentTarget.setAttribute("class", "hovered");
        });
    });
}

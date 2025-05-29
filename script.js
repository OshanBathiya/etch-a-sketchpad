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
    
    let hoverCount;
    const squares = container.querySelectorAll("div");
    
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            hoverCount = event.currentTarget.getAttribute("value");
            if (!hoverCount) {
                event.currentTarget.setAttribute("value", "1");
            }
            if (hoverCount<11) {
                hoverCount++
                event.currentTarget.setAttribute("value", hoverCount);
            }
            event.currentTarget.style.backgroundColor = "rgba("+randomColor()+","+randomColor()+","+randomColor()+","+hoverCount/10+")";
        });
    });
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

const container = document.querySelector("#container");

for(let i=0; i<16*16; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "square");
    container.appendChild(square);
}

const squares = container.querySelectorAll("div");

squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
        event.currentTarget.setAttribute("class", "hovered");
    });
});
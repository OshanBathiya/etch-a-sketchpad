const container = document.querySelector("#container");

for(let i=0; i<16*16; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "square");
    container.appendChild(square);
    console.log("Square created", i);
}
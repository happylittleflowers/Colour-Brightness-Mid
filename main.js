// LUMINENCE CALCULATOR

// INPUT

let R = +prompt("Enter a R color value (Red):");
let G = +prompt("Enter a G color value (Green):");
let B = +prompt("Enter a B color value (Blue):");

// PROCESS
let brightness = Math.sqrt(0.299(R) ** 2 + 0.587(G) ** 2 + 0.114(B) ** 2);

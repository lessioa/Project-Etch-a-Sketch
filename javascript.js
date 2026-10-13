//body//
const body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.gap = "20px";
body.style.justifyContent = "center";
body.style.alignItems = "center";

//button//
const button = document.createElement("button");
button.style.background = "light-grey";
button.innerText = "change grid quantity";
body.appendChild(button);

//main container//
const container = document.createElement("div");
container.style.backgroundColor = "white";
container.style.width = "750px";
container.style.height = "750px";
body.appendChild(container);


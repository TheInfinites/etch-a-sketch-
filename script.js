// selecting the container div
const cont = document.querySelector(".container");

// creating the first column div
const colDiv = document.createElement("div");
colDiv.classList.add("col");
cont.appendChild(colDiv);

//
let x = 16;
let y = 16;

for (let i = 0; i <= x; i++){
    const inColDiv = document.createElement("div");
    inColDiv.classList.add("colInner");
    colDiv.appendChild(inColDiv);
}

for (let i = 0; i < y; i++) {
    const clone = colDiv.cloneNode(true);
    cont.appendChild(clone);
}


// mouse hover event listeners

const hoverEle2 = document.querySelectorAll(".colInner");

let t = 0;
hoverEle2.forEach(ele => {
    ele.addEventListener("mouseenter", (e) => {
        t++;
        console.log(t);
        let target = e.target;
        target.style.backgroundColor = `rgb(255, 255, ${t})`;
        
    })
})

hoverEle2.forEach(ele => {
    ele.addEventListener("mouseout", (e) => {
        let target = e.target;
        target.style.backgroundColor = 'black';
    })
})
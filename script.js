
//---------------------------------------------------------------------

// 1 - getting input values
const getInput = document.querySelector(".bottom > input");
const getBtn = document.querySelector(".bottom > button");
const getCanvasSize = document.querySelector(".canvas-size > input");
const getCanvasButton = document.querySelector(".canvas-size > button");

let oldVal = getInput.value;
let setCanvas = getCanvasSize.value;


function gridCreation (stuff, canvas){
    
    // parameters
    let totalWidth = Number(canvas);
    let totalHeight = 1000;
    let x = Number(stuff);
    let y = Number(stuff);
    
    let xWitdh = totalWidth/x;
    let yHeight = totalHeight/y;

    
    // ---------------------------------------------------------
    
    // selecting the container div
    const cont = document.querySelector(".container");
    cont.style.width = `${totalWidth}px`
    
    // creating the first column div
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    cont.appendChild(colDiv);
    
    // x axis - grid formation 
    for (let i = 0; i < stuff; i++){
        const inColDiv = document.createElement("div");
        inColDiv.classList.add("colInner");
        colDiv.appendChild(inColDiv);
    }
    
    // y axis - grid formation 
    for (let i = 0; i < stuff - 1; i++) {
        const clone = colDiv.cloneNode(true);
        cont.appendChild(clone);
    }
    
    // setting up width and height
    const setWidth = document.querySelectorAll(".colInner")
    setWidth.forEach(ele => {
        ele.style.width = `${xWitdh}px`
        ele.style.height = `${yHeight}px`
    })
    
    
    // ----------------------------------------------------------------
    // setting the 
    const bottomDiv = document.querySelector(".bottom-stuff");
    bottomDiv.style.width = `${totalWidth}px`

    const mainCon = document.querySelector(".main-con")
    mainCon.style.maxWidth = `${totalWidth}px`

    // -----------------------------------------------------------------
    // opacity animation for each div

    const getColIn = document.querySelectorAll(".colInner");
    getColIn.forEach(ele => {
        let opa = 0.9
        ele.addEventListener("mouseover", (e) => {
            e.target.style.opacity = `${opa}`
            opa = opa - 0.1;
        })
    })
}    



gridCreation(oldVal, setCanvas);

// -----------------------------------------------------------------------

const btmAll = document.querySelector(".bottom-stuff");

btmAll.addEventListener("click", (e) => {
    let newVal = oldVal;
    newVal = Number(getInput.value);

    if (newVal > 100) {
        newVal = 100;
    }

    let newCanvas = setCanvas;
    newCanvas = Number(getCanvasSize.value)

    if(e.target.classList.contains("button")){

        console.log(newVal)

        const delDiv = document.querySelectorAll(".col");
        delDiv.forEach(ele => ele.remove());
        gridCreation(newVal, newCanvas)
    }
    
    if(e.target.classList.contains("canBut")){
        const delDiv = document.querySelectorAll(".col");
        delDiv.forEach(ele => ele.remove());
        gridCreation(newVal, newCanvas);
    }
})




//-----------------------------------------------------------------------


// const cont = document.querySelector(".container");
// let t = 0;
// let total = 100;
// cont.addEventListener("mouseover", (e) => {
//     if(e.target.classList.contains("colInner")){
//         // e.target.style.backgroundColor = "white";
//         e.target.style.opacity = `${t}`
//     } 
//     t = t - 0.0001;

// })

// cont.addEventListener("mouseout", (e) => {
//     if(e.target.classList.contains("colInner")){
//         e.target.style.backgroundColor = "black";
//     } 

// })

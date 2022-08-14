let generateArrayBtn = document.querySelector(".left .generate");
let arraySize=document.querySelector('.array-size-range');

let algorithmSpeed=300;
function generateBar(size = 35) {
  document.querySelector(".container").innerHTML = "";
  for (let i = 1; i <= size; i++) {
    var height = Math.floor(Math.random() * 100) + 1;
    let dv = document.createElement("div");
    dv.setAttribute("class", "bar");
    dv.setAttribute("value", height);
    dv.style.width = `${100 / size}%`;
    dv.style.height = `${height * 1.2}%`;
    document.querySelector(".container").appendChild(dv);
  }
}

function disableButtons(buttons) {
  for (btn of buttons) {
    btn.style.color="white";
    btn.setAttribute("disabled", "true");
    btn.style.backgroundColor = "red";
  }
}

function enableButtons(buttons) {
  for (btn of buttons) {
    btn.style.color="black";
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "orange";
  }
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}






arraySize.addEventListener('change' , ()=>{
    generateBar(arraySize.value);
});

generateArrayBtn.addEventListener('click' , ()=>{
    generateBar(arraySize.value);
})


window.addEventListener("load", () => {
  generateBar();
});
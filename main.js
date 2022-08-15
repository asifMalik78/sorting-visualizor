let generateArrayBtn = document.querySelector(".generate");
let arraySize=document.querySelector('.array-size-range');
let toggleBtn=document.getElementById('check');
let algorithmSpeed=300;
function generateBar(size) {
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
    btn.style.backgroundColor = "#b9ff38";
  }
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}




toggleBtn.addEventListener('click' , ()=>{
  document.querySelector('.bg').classList.toggle('dark-mode-body');
  document.querySelector('.navigation-bar').classList.toggle('dark-mode-nav')
  if(document.querySelector('.bg').classList.contains('dark-mode-body')){
    document.querySelector('.dark-mode-btn span').innerText="Dark Mode";
  }
  else{
    document.querySelector('.dark-mode-btn span').innerText="Light Mode";
  }

})
arraySize.addEventListener('change' , ()=>{
    generateBar(arraySize.value);
});

generateArrayBtn.addEventListener('click' , ()=>{
    generateBar(arraySize.value);
})


window.addEventListener("load", () => {
  generateBar(40);
  arraySize.value="40";
});
let bubble = document.getElementById("bubble-sort");

async function bubbleSort() {
  let arr = document.querySelectorAll(".bar");

  if(arr.length===0){
    alert("Generate The Array First");
    enableButtons(document.querySelectorAll('.bar'));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let val1 = parseInt(arr[j].getAttribute("value"));
      let val2 = parseInt(arr[j + 1].getAttribute("value"));

      arr[j].style.backgroundColor = "red";
      arr[j + 1].style.backgroundColor = "red";

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });

      if (val1 > val2) {
        arr[j].style.height = `${val2 * 1.2}%`;
        arr[j].setAttribute("value", val2);
        arr[j + 1].style.height = `${val1 * 1.2}%`;
        arr[j + 1].setAttribute("value", val1);

        await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 300);
          });
        arr[j].style.backgroundColor = "cyan";
      } else {
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 300);
          });

        arr[j].style.backgroundColor = "cyan";
      }
    }

    arr[arr.length - 1 - i].style.backgroundColor = "green";
  }

  enableButtons(document.querySelectorAll('.btn'));
  arraySize.removeAttribute('disabled');
}

bubble.addEventListener("click", () => {
  disableButtons(document.querySelectorAll('.btn'));
  arraySize.setAttribute('disable' , 'true');
  bubbleSort();
});

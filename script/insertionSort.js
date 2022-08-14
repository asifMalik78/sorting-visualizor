let insertion = document.getElementById("insertion-sort");

async function bubbleSort() {
  let arr = document.querySelectorAll(".bar");
  if (arr.length === 0) {
    alert("Generate the Array First");
    enableButtons(document.querySelectorAll('.bar'));
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    let no = parseInt(arr[i].getAttribute("value"));
    arr[i].style.backgroundColor = "darkblue";
    let j = i - 1;

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });

    while (j >= 0 && parseInt(arr[j].getAttribute("value")) > no) {
      let val = parseInt(arr[j].getAttribute("value"));
      arr[j + 1].style.height = `${val * 1.2}%`;
      arr[j + 1].setAttribute("value", val);
      arr[j].style.backgroundColor = "darkblue";
      j--;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });

      for (let k = i; k >= 0; k--) {
        arr[k].style.backgroundColor = "green";
      }
    }

    arr[j + 1].style.height = `${no * 1.2}%`;
    arr[j + 1].setAttribute("value", no);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });

    arr[j + 1].style.backgroundColor = "green";
  }

  enableButtons(document.querySelectorAll('.btn'));
  arraySize.removeAttribute('disabled');

}
insertion.addEventListener("click", () => {
  disableButtons(document.querySelectorAll('.btn'));
  arraySize.setAttribute('disabled' , 'true');
  bubbleSort();
});

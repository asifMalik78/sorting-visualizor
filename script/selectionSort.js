let selection = document.getElementById("selection-sort");

async function selectionSort() {
  let arr = document.querySelectorAll(".bar");
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    arr[i].style.backgroundColor = "darkblue";
    for (let j = i + 1; j < arr.length; j++) {
      arr[j].style.backgroundColor = "red";
      let val1 = parseInt(arr[minIdx].getAttribute("value"));
      let val2 = parseInt(arr[j].getAttribute("value"));

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });

      if (val1 > val2) {
        if (minIdx != i) {
          arr[minIdx].style.backgroundColor = "blue";
        }

        minIdx = j;
        arr[minIdx].style.backgroundColor = "yellow";
      } else {
        arr[j].style.backgroundColor = "blue";
      }
    }

    if (minIdx != i) {
      let num1 = arr[i].getAttribute("value");
      let num2 = arr[minIdx].getAttribute("value");
      arr[i].style.height = `${num2*1.2}%`;
      arr[i].setAttribute("value", num2);
      arr[minIdx].style.height = `${num1*1.2}%`;
      arr[minIdx].setAttribute("value", num1);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });

      arr[i].style.backgroundColor = "green";
      arr[minIdx].style.backgroundColor = "blue";
    } else {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 300);
      });

      arr[minIdx].style.backgroundColor = "green";
    }
  }

  enableButtons(document.querySelectorAll('.btn'));
  arraySize.removeAttribute('disabled');

}

selection.addEventListener("click", () => {
  timeWorstCase.innerHTML=" O(n^2)";
  timeAvgCase.innerHTML=" Θ(n^2)";
  timeBestCase.innerHTML=" Ω(N^2)";
  spaceWorstCase.innerHTML=" O(1)";
  document.querySelector('.read-more').style.display="block";
  document.querySelector('.read-more p a').innerHTML="Read More About Selection Sort";
  document.querySelector('.read-more p a').setAttribute('href' , 'https://www.geeksforgeeks.org/selection-sort/');
  disableButtons(document.querySelectorAll('.btn'));
  arraySize.setAttribute('disabled' , 'true');
  selectionSort();
});

let quick = document.getElementById("quick-sort");

async function getPivot(arr, st, en) {
  let pivot = parseInt(arr[en].getAttribute("value"));
  arr[en].style.backgroundColor = "red";
  let i = st - 1;
  for (let j = st; j < en; j++) {
    arr[j].style.backgroundColor = "yellow";
    await timeout(300);
    let val = parseInt(arr[j].getAttribute("value"));
    if (val <= pivot) {
      i++;

      let prevVal = parseInt(arr[i].getAttribute("value"));
      arr[i].style.height = `${val * 1.2}%`;
      arr[i].setAttribute("value", val);
      arr[j].style.height = `${prevVal * 1.2}%`;
      arr[j].setAttribute("value", prevVal);

      arr[i].style.backgroundColor = "orange";

      if (i !== j) {
        arr[j].style.backgroundColor = "pink";

        await timeout(300);
      } else {
        arr[j].style.backgroundColor = "pink";
      }
    }
  }

  let val = parseInt(arr[i + 1].getAttribute("value"));
  arr[i + 1].style.height = `${pivot * 1.2}%`;
  arr[i + 1].setAttribute("value", pivot);
  arr[en].style.height = `${val * 1.2}%`;
  arr[en].setAttribute("value", val);

  arr[i + 1].style.backgroundColor = "pink";
  arr[en].style.backgroundColor = "green";

  await timeout(300 * 3);

  for (let i = st; i <= en; i++) {
    arr[i].style.backgroundColor = "green";
  }
  return parseInt(i + 1);
}
async function quickSort(arr, st, en) {
  if (st >= en) {
    return;
  }

  let pivotIdx = await getPivot(arr, st, en);
  await quickSort(arr, st, pivotIdx - 1);
  await quickSort(arr, pivotIdx + 1, en);
  // await timeout(300);
}
async function quickSortHelper(arr) {
  disableButtons(document.querySelectorAll(".btn"));
  arraySize.setAttribute("disabled", "true");

  await quickSort(arr, 0, arr.length - 1);

  enableButtons(document.querySelectorAll(".btn"));
  arraySize.removeAttribute("disabled");
}
quick.addEventListener("click", () => {
  timeWorstCase.innerHTML = " O(n^2)";
  timeAvgCase.innerHTML = " Θ(n*log(n))";
  timeBestCase.innerHTML = " Ω(n*log(n))";
  spaceWorstCase.innerHTML = " O(n*log(n))";
  document.querySelector(".read-more").style.display = "block";
  document.querySelector(".read-more p a").innerHTML =
    "Read More About Quick Sort";
  document
    .querySelector(".read-more p a")
    .setAttribute("href", "https://www.geeksforgeeks.org/quick-sort/");
  let arr = document.querySelectorAll(".bar");
  // disableButtons(document.querySelectorAll(".btn"));
  // arraySize.setAttribute("disabled", "true");
  quickSortHelper(arr);
});

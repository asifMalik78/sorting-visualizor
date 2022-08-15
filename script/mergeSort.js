let mergeBtn = document.getElementById("merge-sort");


async function merge(arr, st, mid, en) {
  let n1 = parseInt(mid - st + 1);
  let n2 = parseInt(en - mid);
  let temp1 = new Array(n1);
  let temp2 = new Array(n2);

  for (let i = 0; i < n1; i++) {
    temp1[i] = parseInt(arr[st + i].getAttribute("value"));
  }

  for (let i = 0; i < n2; i++) {
    temp2[i] = parseInt(arr[mid + 1 + i].getAttribute("value"));
  }

  let i = 0;
  let j = 0;
  let k = st;

  while (i < n1 && j < n2) {
    let val1 = temp1[i];
    let val2 = temp2[j];
    if (val1 <= val2) {
      arr[k].style.height = `${val1 * 1.2}%`;
      arr[k].setAttribute("value", val1);
      arr[k].style.backgroundColor = "red";
      k++;
      i++;
    } else {
      arr[k].style.height = `${val2 * 1.2}%`;
      arr[k].setAttribute("value", val2);
      arr[k].style.backgroundColor = "red";
      k++;
      j++;
    }
  }

  while (i < n1) {
    let val1 = temp1[i];
    arr[k].style.height = `${val1 * 1.2}%`;
    arr[k].setAttribute("value", val1);
    arr[k].style.backgroundColor = "red";

    k++;
    i++;
  }

  while (j < n2) {
    let val2 = temp2[j];
    arr[k].style.height = `${val2 * 1.2}%`;
    arr[k].setAttribute("value", val2);
    arr[k].style.backgroundColor = "red";

    k++;
    j++;
  }

  await timeout(300*2);
  for (let i = st; i <= en; i++) {
    arr[i].style.backgroundColor = "green";
  }
}
async function mergeSort(arr, st, en) {
  if (st >= en) {
    return;
  }

  let mid = parseInt((st + en) / 2);
  await mergeSort(arr, st, mid);

  await mergeSort(arr, mid + 1, en);

  await merge(arr, st, mid, en);

  await timeout(300*2);
}

async function mergeSortHelper(arr) {
  disableButtons(document.querySelectorAll(".btn"));
  arraySize.setAttribute('disabled' , 'true');
  await mergeSort(arr, 0, arr.length - 1);
  enableButtons(document.querySelectorAll(".btn"));
  arraySize.removeAttribute('disabled');
 
}
mergeBtn.addEventListener("click", () => {
  timeWorstCase.innerHTML=" O(n*log(n))";
  timeAvgCase.innerHTML=" Θ(n*LOG(n))";
  timeBestCase.innerHTML=" Ω(n*LOG(n))";
  spaceWorstCase.innerHTML=" O(n)";
  document.querySelector('.read-more').style.display="block";
  document.querySelector('.read-more p a').innerHTML="Read More About Merge Sort";
  document.querySelector('.read-more p a').setAttribute('href' , 'https://www.geeksforgeeks.org/merge-sort/');
  let arr = document.querySelectorAll(".bar");
  mergeSortHelper(arr);
});

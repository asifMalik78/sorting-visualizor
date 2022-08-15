let wave=document.getElementById('wave-sort');


async function waveSort(arr){
    for(let i=1 ; i<arr.length ; i+=2){
        if(i-1 > 0 && parseInt(arr[i].getAttribute('value')) > parseInt(arr[i-1].getAttribute('value'))){
            let currentVal=parseInt(arr[i].getAttribute('value'));
            let prevVal=parseInt(arr[i-1].getAttribute('value'));
            
            arr[i].style.backgroundColor="orange";
            arr[i-1].style.backgroundColor="orange";
            await timeout(500);
            arr[i].style.height=`${prevVal*1.2}%`;
            arr[i].setAttribute('value' , prevVal);

            arr[i-1].style.height=`${currentVal*1.2}%`;
            arr[i-1].setAttribute('value' , currentVal);

        }

        if(i+1 < arr.length && parseInt(arr[i].getAttribute('value')) > parseInt(arr[i+1].getAttribute('value'))){
            let currentVal=parseInt(arr[i].getAttribute('value'));
            let nextVal=parseInt(arr[i+1].getAttribute('value'));
            
            arr[i].style.backgroundColor="orange";
            arr[i+1].style.backgroundColor="orange";
            await timeout(500);
            arr[i].style.height=`${nextVal*1.2}%`;
            arr[i].setAttribute('value' , nextVal);

            arr[i+1].style.height=`${currentVal*1.2}%`;
            arr[i+1].setAttribute('value' , currentVal);

        }
        
        arr[i].style.backgroundColor="cyan";
        await timeout(400);
        arr[i].style.backgroundColor="red";
        arr[i-1].style.backgroundColor="blue";
        if(i+1 < arr.length)
           arr[i+1].style.backgroundColor="blue";
    }


    enableButtons(document.querySelectorAll('.btn'));
    arraySize.removeAttribute('disabled');
}
wave.addEventListener('click' , ()=>{
    timeWorstCase.innerHTML=" O(n)";
    timeAvgCase.innerHTML=" Θ(n)";
    timeBestCase.innerHTML=" Ω(n)";
    spaceWorstCase.innerHTML=" O(1)";
    document.querySelector('.read-more').style.display="block";
    document.querySelector('.read-more p a').innerHTML="Read More About Wave Sort";
    document.querySelector('.read-more p a').setAttribute('href' , 'https://www.geeksforgeeks.org/sort-array-wave-form-2/');
    disableButtons(document.querySelectorAll('.btn'));
    arraySize.setAttribute('disabled' , 'true');
    let arr=document.querySelectorAll('.bar');
    waveSort(arr);
})
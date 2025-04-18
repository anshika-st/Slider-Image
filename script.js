let nextbtn = document.getElementById('next');
let prevbtn = document.getElementById('prev');
let sliderbtn = document.querySelector('.slider');
let listItembtn = document.querySelector('.slider .list');
let thumbnailbtn = document.querySelector('.slider .thumbnail');

nextbtn.onclick = function(){
    showSlider('next');
}
prevbtn.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextbtn.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.slider .list .item');
    let itemThumbnail = document.querySelectorAll('.slider .thumbnail .item');

    if(type === 'next'){
        listItembtn.appendChild(itemSlider[0]);
        thumbnailbtn.appendChild(itemThumbnail[0]);
        sliderbtn.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItembtn.prepend(itemSlider[positionLastItem]);
        thumbnailbtn.prepend(itemThumbnail[positionLastItem]);
        sliderbtn.classList.add('prev');
    }

clearTimeout(runTimeOut);
runTimeOut = setTimeout(() => {
    sliderbtn.classList.remove('next');
    sliderbtn.classList.remove('prev');
}, timeRunning)

}
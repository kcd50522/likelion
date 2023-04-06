import getRandomImage from "./api/randomImage.js";

const randomImageBtn = document.querySelector('#getImageButton');
const container = document.querySelector('#imageContainer');
const counter = document.querySelector('#imageCounter');
const leftBtn = document.querySelector('#moveLeft');
const rightBtn = document.querySelector('#moveRight');

window.addEventListener('DOMContentLoaded', ()=> {    //DOMContentLoaded => 초기 hmlt문서를 완전히 불러오고 분석했을 때 발생
    registButtonEvent();
});

let totalCount = 0;
let currentCount = 0;

const registButtonEvent = () => {
    randomImageBtn.addEventListener('click', async() => {   //랜덤이미지를 클릭하면 발생하는 이벤트
        const imageData = await getRandomImage();   //API 이미지 불러오기
        const slicedImageData = imageData.slice(0,10);  //slice =>  특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용. 0부터 10까지의 배열을 생성.

        container.innerHTML = ' ';   //html초기화 (?)
        totalCount = 0;
        currentCount = 0;
        container.scrollTo({
            left: 0,
            behavior: 'smooth',
        });

        slicedImageData.forEach((data) => renderImage(data));
        totalCount = slicedImageData.length;
        renderCounter(0);
    });

    leftBtn.addEventListener('click', () => moveImage('left'));
    rightBtn.addEventListener('click', () => moveImage('right'));
};


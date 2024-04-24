import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-05');

// toys

const toy1 = document.getElementById('toy1');
const toy2 = document.getElementById('toy2');

animateFunc.PauseThenAnimate(toy1,500);
animateFunc.PauseThenAnimate(toy2,500);

const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');

setTimeout(() => {
    note1.style.opacity = 100 + '%';

},800)
setTimeout(() => {
    note2.style.opacity = 100 + '%';

},1600)
setTimeout(() => {
    note2.style.opacity = 100 + '%';

},2400)

setInterval(() => {
    note1.style.opacity = 0;
    note2.style.opacity = 0;
    note3.style.opacity = 0;

    setTimeout(() => {
        note1.style.opacity = 100 + '%';

    },800)
    setTimeout(() => {
        note2.style.opacity = 100 + '%';

    },1600)
    setTimeout(() => {
        note3.style.opacity = 100 + '%';

    },2400)
},3000);

//text

const next = document.getElementById('next5');
const text = document.getElementById('text05');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `บนดาวแมว<br>แมวทุกตัวจะได้นอนหลับอย่างสนิท`,
    `พวกเขาจะได้พักผ่อนในที่ที่แสนสงบ<br>และจะไม่มีสิ่งใดรบกวนการพักผ่อนของพวกเขาได้อีก`,
    `คุณเองก็อย่าลืมพักผ่อนให้เพียงพอ<br>อย่ากดดันตัวเองมากเกินไป และต้องรักตัวเองอยู่เสมอนะ`
]
let index = 0
text.innerHTML = script[0];

next.addEventListener('click',() => {
    text.style.animationName = 'textdissolve';
    text.style.animationPlayState = 'running';
    text.innerHTML = script[index+1];
    if(index == script.length - 2) {
        next.innerHTML = 'กลับสู่เมือง';
        index++;
    }
    else if(index == script.length - 1) {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';
        const map = document.getElementById('page-02');
        thispage.classList.add('hidden');
        map.classList.remove('hidden');
    }
    else {
        index++;
    }
});

const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';
      }
    });
  });
  
  const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
  observer.observe(thispage, observerConfig);
import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-04');

//Food 1

const food1 = document.getElementById('food1');
animateFunc.PlayAnimate(food1);

//Food 2

const food2 = document.getElementById('food2');
animateFunc.PlayAnimate(food2);

//Food 3

const food3 = document.getElementById('food3');
animateFunc.PlayAnimate(food3);

//Food 4

const food4 = document.getElementById('food4');
animateFunc.PlayAnimate(food4);


//text

const next = document.getElementById('next4');
const text = document.getElementById('text04');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `บนดาวแมว<br>แมวทุกตัวจะได้กินอิ่มสุขสบาย`,
    `บนดาวดวงนี้มีแต่อาหารแสนอร่อยที่<br>ให้เหล่าแมวเลือกสรรค์ได้ตามใจอยาก`,
    `พวกเขาจะไม่เจ็บป่วยจากโรคภัยหรือ<br>โดนทำร้ายจากคนที่โหดเหี้ยม`,
    `อยู่ที่นี่พวกเขาจะปลอดภัยและมีความสุข<br>อย่างที่ไม่เคยเป็นมาก่อน`,
    `คุณเองก็อย่าลืมกินอาหารดีๆและดูแลสุขภาพด้วยนะ<br>เพราะชีวิตคุณเองก็มีค่าไม่ต่างจากใคร`
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
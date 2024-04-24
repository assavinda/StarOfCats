import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-06');

const cwtail = document.getElementById('catwatcher1-tail');

animateFunc.PauseThenAnimate(cwtail,250);

const cat1 = document.getElementById('catwatcher1');
// cat1.addEventListener('click',() => {
    
// })

//text

const next = document.getElementById('next6');
const text = document.getElementById('text06');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `บนดาวแมว<br>เหล่าแมวจะคอยเฝ้ามองมนุษย์อยู่เสมอ`,
    `ไม่ว่าคุณจะอยู่ที่ไหน<br>พวกเขาจะคอยเฝ้ามองคุณจากที่แห่งนี้`,
    `และมันคงจะน่าเศร้าใจ<br>หากพวกเขามองมาบนโลกแล้วต้องเห็นคุณไม่มีความสุข`,
    `ถึงแม้บางครั้งที่คุณจะต้องพบเจอเรื่องราวร้ายๆ<br>แต่คุณจะผ่านมันไปได้`,
    `คุณไม่จำเป็นต้องเก่งไปกว่าใคร<br>หรือพยายามเข้มแข็งในวันที่อ่อนแอ`,
    `แต่ขอเพียงแค่อย่าลืมรักตัวเองในทุกๆวัน<br>และได้โปรดใช้ชีวิตอย่างมีความสุขเถอะนะ`
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
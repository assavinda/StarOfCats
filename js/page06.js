import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-06');

const cwtail = document.getElementById('catwatcher1-tail');

animateFunc.PauseThenAnimate(cwtail,250);

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

const camtoearth = document.getElementById('camtoearth')
const people = document.getElementById('people')

thispage.addEventListener('click',(e) => {
    if(e.target.classList.contains('catwatchers')) {
        thispage.classList.add('hidden')
        camtoearth.classList.remove('hidden')
    }
})



let isMouseDown = false;
let startXPercent = 0;
let startYPercent = 0;
const containerWidth = camtoearth.clientWidth;
const containerHeight = (9/15 * camtoearth.clientWidth);

thispage.addEventListener('click',(e) => {
    if(e.target.classList.contains('catwatchers')) {
        camtoearth.style.pointerEvents = 'all'
        camtoearth.style.opacity = 1
    }
})

camtoearth.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    startXPercent = (event.clientX - people.offsetLeft) / containerWidth * 100;
    startYPercent = (event.clientY - people.offsetTop) / containerHeight * 100;
});

camtoearth.addEventListener('mouseup', () => {
    isMouseDown = false;
    console.log(people.style.left,'x')
});

camtoearth.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        let x = ((event.clientX / containerWidth * 100) - startXPercent);
        let y = ((event.clientY / containerHeight * 100) - startYPercent);

        if(x <= 38 && x >= -38) {
            people.style.left = x + '%';
        }
        else if(x <= -38) {
            people.style.left = -38.1 + '%';
        }
        else if(x >= 38) {
            people.style.left = 38.1 + '%';
        }

        if(y <= 31 && y >= -31) {
            people.style.top = y + '%';
        }
        else if(y <= -31) {
            people.style.top = -31.1 + '%';
        }
        else if(y >= 31) {
            people.style.top = 31.1 + '%';
        }
    }
});

const closescope = document.getElementById('closescope')

closescope.addEventListener('click',() => {
    thispage.classList.remove('hidden')
    camtoearth.style.pointerEvents = 'none'
    camtoearth.style.opacity = 0
    people.style.left = 0 + '%'
    people.style.top = 0 + '%'
})

const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';
        startXPercent = 0;
        startYPercent = 0;
        people.style.left = 0 + '%'
        people.style.top = 0 + '%'
      }
    });
  });
  
  const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
  observer.observe(thispage, observerConfig);
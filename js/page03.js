import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-03');

//Cat 1

const rightarm1 = document.getElementById('rightarm1');
const ball = document.getElementById('ball1');
const eyes1 = document.getElementById('eyes1');

    //Ball
    animateFunc.PauseThenAnimate(ball,500);

    //Right Arm
    animateFunc.PauseThenAnimate(rightarm1,500);

    //Eyes
    animateFunc.PauseThenAnimate(eyes1,500);

    
//Cat 2

const eyes2 = document.getElementById('eyes2');
const butterfly = document.getElementById('butterfly2');
const leftarm2 = document.getElementById('leftarm2');
const rightarm2 = document.getElementById('rightarm2');
const foot2 = document.getElementById('foot2');

    //Eyes
    animateFunc.PauseThenAnimate(eyes2,500);

    //Butterfly
    animateFunc.PauseThenAnimate(butterfly,500);

    //Left Arm
    animateFunc.PauseThenAnimate(leftarm2,500);

    //Right Arm
    animateFunc.PauseThenAnimate(rightarm2,500);

    //Foot
    animateFunc.PauseThenAnimate(foot2,500);

//Cat 3

const mouse = document.getElementById('mouse3');
const eyes3 = document.getElementById('eyes3');

    //Mouse
    animateFunc.PauseThenAnimate(mouse,500)

    //Eyes
    animateFunc.PauseThenAnimate(eyes3,500)


//text

const next = document.getElementById('next3');
const text = document.getElementById('text03');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `บนดาวแมว<br>แมวทุกตัวจะได้เล่นอย่างสนุกสนาน`,
    `พวกเขาจะเพลิดเพลินกับของเล่นมากมาย<br>รวมถึงได้เจอเพื่อนใหม่ที่คอยอยู่เคียงข้างพวกเรา`,
    `คุณเองก็อย่าลืมออกไปท่องเที่ยวในที่ที่อยากไป<br>พบปะผู้คนใหม่ๆ และใช้ชีวิตให้มีความสุขนะ`
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
    
import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-end');
const end1 = document.getElementById('end1scene');
const end2 = document.getElementById('end2scene');
const end3 = document.getElementById('end3scene');


//text

const next = document.getElementById('nextend');
const text = document.getElementById('textend');
const credits = document.getElementById('credits');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `ที่นี่คือสถานีที่จะไปส่งคุณกลับไปที่โลกมนุษย์`,
    `ขอบคุณที่เข้ามาเยี่ยมชมดาวของเรา`,
    `ทางเราหวังว่าคุณจะได้รับความสุข และความทรงจำดีๆจากที่นี่`,
    `ขณะนี้ยานอวกาศกำลังจะเริ่มออกเดินทาง<br>โปรดเตรียมตัวให้พร้อมเพื่อเริ่มเดินทาง`,
    `เริ่มออกเดินทางได้`,
    `ถึงจุดหมายแล้ว ขอให้คุณมีความสุขกับทุกๆวันในชีวิตนะ`,
    ` `
]
let index = 0
text.innerHTML = script[0];

next.addEventListener('click',() => {
    text.style.animationName = 'textdissolve';
    text.style.animationPlayState = 'running';
    text.innerHTML = script[index+1];
    index++;
    if(index == 4) {
        end1.classList.add('hidden');
        end2.classList.remove('hidden');
    }
    else if(index == 5) {
        end2.classList.add('hidden');
        end3.classList.remove('hidden');
        credits.classList.remove('hidden')
        next.innerHTML = 'กลับสู่หน้าหลัก'
    }
    else if(index >= 6) {
        window.location.reload()
        index = 6
    }
});

const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';
        credits.classList.add('hidden')
        end1.classList.remove('hidden');
        end2.classList.add('hidden');
        end3.classList.add('hidden');
      }
    });
  });
  
  const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
  observer.observe(thispage, observerConfig);
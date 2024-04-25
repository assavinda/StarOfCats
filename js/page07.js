import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-07');
const postscene = document.getElementById('postoffice-scene');
const cardscene = document.getElementById('cardscene');
const deliverscene = document.getElementById('deliverscene');

//text

const next = document.getElementById('next7');
const text = document.getElementById('text07');
const tap = document.getElementById('taptowrite');
const send = document.getElementById('send');

const to = document.getElementById('to');
const write = document.getElementById('write');
const from = document.getElementById('from');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `ยินดีต้อนรับเข้าสู่เหมียวไปรษณีย์`,
    `ที่นี่เรามีบริการส่งจดหมายและคำอวยพรให้กับเหล่าแมวบนดาว`,
    `หากคุณสนใจ โปรดกดที่ตู้ไปรษณีย์<br>เพื่อเริ่มทำการเขียนจดหมาย`,
    `ระบบกำลังดำเนินการส่งจดหมายของคุณไปที่ดาวแมว`,
    `ทางเราขอขอบคุณสำหรับความรักที่คุณมอบให้กับแมวจากใจจริง`,
    `และขอให้คุณรู้ไว้ว่าความรักของคุณนั้นมีค่ากับแมวทุกตัวบนโลกนี้`
]
let index = 0
text.innerHTML = script[0];

next.addEventListener('click',() => {
    nexttext();
});

tap.addEventListener('click',() => {
    text.classList.add('hidden')
    postscene.classList.add('hidden');
    cardscene.classList.remove('hidden');
    console.log('tap')
});

send.addEventListener('click',() => {
    text.classList.remove('hidden')
    cardscene.classList.add('hidden');
    deliverscene.classList.remove('hidden');
    index++;
    next.classList.remove('hidden');
    nexttext();
})

function nexttext() {
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
        deliverscene.classList.add('hidden');
        postscene.classList.remove('hidden');
        tap.classList.add('hidden');
        to.value = '';
        write.value = '';
        from.value = '';
    }
    else if(index == 1) {
        next.classList.add('hidden');
        tap.classList.remove('hidden');
    }
    else {
        index++;
    }
}

const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';
        text.classList.remove('hidden');
        next.classList.remove('hidden');
        deliverscene.classList.add('hidden');
        postscene.classList.remove('hidden');
        cardscene.classList.add('hidden');
        tap.classList.add('hidden');
        to.value = '';
        write.value = '';
        from.value = '';
      }
    });
  });
  
  const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
  observer.observe(thispage, observerConfig);


    
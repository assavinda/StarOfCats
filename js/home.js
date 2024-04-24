import { Animate } from "./animateFunctions.js";

let animateFunc = new Animate()
let thispage = document.getElementById('homepage')

//มือแมว

const hand = document.getElementById('cathand');
animateFunc.PauseThenAnimate(hand,200);

//บุ๋งๆ

const bung1 = document.getElementById('bung1')
const bung2 = document.getElementById('bung2')
const bung3 = document.getElementById('bung3')

setTimeout(() => {
    bung1.style.opacity = 100 + '%';
},800)
setTimeout(() => {
    bung2.style.opacity = 100 + '%';
},1600)
setTimeout(() => {
    bung2.style.opacity = 100 + '%';
},2400)

setInterval(() => {
    bung1.style.opacity = 0;
    bung2.style.opacity = 0;
    bung3.style.opacity = 0;

    setTimeout(() => {
        bung1.style.opacity = 100 + '%';
    },800)
    setTimeout(() => {
        bung2.style.opacity = 100 + '%';
    },1600)
    setTimeout(() => {
        bung3.style.opacity = 100 + '%';
    },2400)
},3000);


//ปลาเหลือง(?)

const yell1 = document.getElementById('yell1')
const yell2 = document.getElementById('yell2')
const yell3 = document.getElementById('yell3')



//Button Start

const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', () => {
  const nextpage = document.getElementById('page-01');
  nextpage.classList.remove('hidden');
  thispage.classList.add('hidden');
});
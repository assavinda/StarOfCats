import { Animate } from "./animateFunctions.js";

const animateFunc = new Animate()
let thispage = document.getElementById('page-01');

const mek1 = document.getElementById('mek1');
const mek2 = document.getElementById('mek2');
const mek3 = document.getElementById('mek3');

animateFunc.PauseThenAnimate(mek1,500);
animateFunc.PauseThenAnimate(mek2,500);
animateFunc.PauseThenAnimate(mek3,500);

const next = document.getElementById('next1');
next.addEventListener('click',() => {
    const nextpage = document.getElementById('page-02');
    nextpage.classList.remove('hidden');
    thispage.classList.add('hidden');
})
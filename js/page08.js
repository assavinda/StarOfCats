const click = document.getElementById('click');
const gballs = document.getElementById('g-balls');
const randomball = document.getElementById('randomball');
const gachascene = document.getElementById('gachascene');
const randompic = document.getElementById('randompic');
const backbtn = document.getElementById('backtocity');
let thispage = document.getElementById('page-08');


click.style.pointerEvents = 'none';

randompic.onanimationiteration = () => {
    randompic.style.animationPlayState = 'paused';
    backbtn.classList.remove('hidden');
}

randomball.onanimationiteration = () => {
    randomball.style.animationPlayState = 'paused';
    setTimeout(() => {
        randompic.style.animationPlayState = 'running';
    },500)
}

click.onanimationiteration = () => {
    click.style.animationPlayState = 'paused';
    gballs.style.animationPlayState = 'running';

    setTimeout(() => {
        gballs.style.animationPlayState = 'paused';
        randomball.classList.remove('hidden');
        setTimeout(() => {
            randomball.style.animationPlayState = 'running';
            gachascene.classList.add('hidden')
        },500)
    },500)
}

const tap = document.getElementById('taptowrite2')

click.addEventListener('click',() => {
    click.style.animationPlayState = 'running';
    let ballNumber = Math.round(randomFunc(1,2));
    randomball.src = `../images/08randompic/Ball${ballNumber}.PNG`;
    let picNumber = Math.round(randomFunc(1,4));
    randompic.src = `../images/08randompic/P${picNumber}.PNG`;
})

function randomFunc(min, max) {
    return Math.random() * (max - min) + min;
}


//text

const next = document.getElementById('next8');
const text = document.getElementById('text08');

text.onanimationiteration = () => {
    text.style.animationPlayState = 'paused'
    text.style.opacity = 1;
    text.style.animationName = 'none'
}

const script = 
[
    `ยินดีต้อนรับเข้าสู่กาชาเหมียวที่ระลึก`,
    `กรุณากดที่ตู้กาชาเหมียวเพื่อสุ่มรับแมวกลับบ้าน`
]
let index = 0
text.innerHTML = script[0];

next.addEventListener('click',() => {
    text.style.animationName = 'textdissolve';
    text.style.animationPlayState = 'running';
    text.innerHTML = script[index+1];

    if(index == script.length - 1) {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';

        text.classList.add('hidden');
        next.classList.add('hidden');

        click.style.pointerEvents = 'all';
        tap.classList.remove('hidden')
    }
    else {
        index++;
    }
});

backbtn.addEventListener('click',() => {
    const map = document.getElementById('page-02');
    
    thispage.classList.add('hidden');
    map.classList.remove('hidden');

    text.classList.remove('hidden');
    next.classList.remove('hidden');

    backbtn.classList.add('hidden');
    click.style.pointerEvents = 'none';
    randomball.classList.add('hidden');
    tap.classList.add('hidden')
    gachascene.classList.remove('hidden')
});

const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        index = 0;
        text.innerHTML = script[0];
        next.innerHTML = '→';

        text.classList.remove('hidden');
        next.classList.remove('hidden');

        backbtn.classList.add('hidden');
        click.style.pointerEvents = 'none';
        randomball.classList.add('hidden');
        tap.classList.add('hidden')
        gachascene.classList.remove('hidden')
      }
    });
  });
  
  const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
  observer.observe(thispage, observerConfig);


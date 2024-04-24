const cursor = document.querySelector('.cursor');
const audio = document.querySelector('#popsound');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursor.style.display = 'block'
  cursor.style.transform = `translate3d(${mouseX - 30}px, ${mouseY - 25}px, 0)`;
  cursor.classList.remove('hidden');
}

window.addEventListener('mousemove', moveCursor);

window.addEventListener('mouseout',() => {
    cursor.style.display = 'none';
});

window.addEventListener('mousedown',() => {
    cursor.src = '../images/Cursor/2.PNG';
});

window.addEventListener('mouseup',() => {
    cursor.src = '../images/Cursor/1.PNG';
    playAudio()
});

function playAudio() {
    audio.currentTime = 0;
    audio.play()
}


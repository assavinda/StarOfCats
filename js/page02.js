let thispage = document.getElementById('page-02');

const rooms = document.getElementsByClassName('rooms')
const endbtn = document.getElementById('btn-end');
const pageend = document.getElementById('page-end');

let toNum = 0

thispage.addEventListener('mousedown',(e) => {
    if(e.target.classList.contains('rooms') == true) {
        let targetID = e.target.id
        toNum = parseInt(targetID.charAt(5))
        if(toNum == 4) {
            toNum = 6
        }
        else if(toNum == 6) {
            toNum = 4
        }
        thispage.classList.add('hidden');
        const nextpage = document.getElementById(`page-0${toNum+2}`);
        nextpage.classList.remove('hidden');
    }
});

thispage.addEventListener('mouseover',(e) => {
    if(e.target.classList.contains('rooms') == true) {
        let targetID = e.target.id
        toNum = parseInt(targetID.charAt(5))
        const roomtext = document.getElementById(`roomtext${toNum}`)
        roomtext.style.opacity = 1
        console.log(toNum)
        e.target.addEventListener('mouseout',() => {
            roomtext.style.opacity = 0
        })
    }
})

endbtn.addEventListener('click',() => {
    thispage.classList.add('hidden');
    pageend.classList.remove('hidden');
})
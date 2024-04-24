let thispage = document.getElementById('page-02');

const rooms = document.getElementsByClassName('rooms')
const endbtn = document.getElementById('btn-end');
const pageend = document.getElementById('page-end');

window.addEventListener('mousedown',(e) => {
    if(e.target.classList.contains('rooms') == true) {
        let targetID = e.target.id
        let toNum = parseInt(targetID.charAt(5))
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

endbtn.addEventListener('click',() => {
    thispage.classList.add('hidden');
    pageend.classList.remove('hidden');
})
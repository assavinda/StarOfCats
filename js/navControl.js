const navback = document.getElementById('navback');
const navhome = document.getElementById('navhome');
const map = document.getElementById('page-02');
const allScenes = document.getElementsByTagName('section')

navback.addEventListener('click',() => {
    for (let i = 0; i < allScenes.length; i++) {
        if(allScenes[i].id == 'page-02') {
            allScenes[i].classList.remove('hidden');
        }
        else {
            allScenes[i].classList.add('hidden');
        }
    }
})

navhome.addEventListener('click',() => {
    window.location.reload()
})

const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(map.classList.contains('hidden')) {
            navback.classList.remove('hidden')
        }
        else {
            navback.classList.add('hidden')
        }
      }
    });
  });
  
  const observerConfig = { attributes: true, attributeFilter: ['class'] };
  
  observer.observe(map, observerConfig);
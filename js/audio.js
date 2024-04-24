document.addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
    var isPlaying = sessionStorage.getItem('bgMusicPlaying');
    if (isPlaying === 'true') {
        audio.play();
    }

    // Save the playback state
    audio.addEventListener('play', function() {
        sessionStorage.setItem('bgMusicPlaying', 'true');
    });
    audio.addEventListener('pause', function() {
        sessionStorage.setItem('bgMusicPlaying', 'false');
    });
});
const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio')
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        playButton.textContent = '⏸'
        playButton.classList.add('playing');
    } else {
        audio.pause();
        playButton.textContent = '▶';
        playButton.classList.remove('playing');
    }
    isPlaying = !isPlaying;
});

const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
let isPlaying1 = false;

playButton.addEventListener('click', () => {
    if (!isPlaying1) {
        audio.play();
        playButton.textContent = '⏸';
        playButton.classList.add('playing');
    } else {
        audio.pause();
        playButton.textContent = '▶';
        playButton.classList.remove('playing');
    }
    isPlaying1 = !isPlaying1;
});

const playButtoon = document.getElementById('playButtoon');
const audioo = document.getElementById('myAudioo');
let isPlaying2 = false;

playButtoon.addEventListener('click', () => {
    if (!isPlaying2) {
        audioo.play();
        playButtoon.textContent = '⏸';
        playButtoon.classList.add('playing');
    } else {
        audioo.pause();
        playButtoon.textContent = '▶';
        playButtoon.classList.remove('playing');
    }
    isPlaying2 = !isPlaying2;
});

const playButton3 = document.getElementById('playButton3');
const audio3 = document.getElementById('myAudio3');
let isPlaying3 = false;
playButton3.addEventListener('click', () => {
    if (!isPlaying3) {
        pauseAllAudios();
        audio3.play();
        playButton3.textContent = '⏸';
        playButton3.classList.add('playing');
    } else {
        audio3.pause();
        playButton3.textContent = '▶';
        playButton3.classList.remove('playing');
    }
    isPlaying3 = !isPlaying3;
});

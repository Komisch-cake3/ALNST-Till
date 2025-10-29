function pauseAllAudios() {
    document.querySelectorAll('audio').forEach(a => a.pause());
    document.querySelectorAll('.play-btn').forEach(b => b.textContent = '▶');
    document.querySelectorAll('.play-btn').forEach(b => b.classList.remove('playing'));
}

const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');
let isPlaying1 = false;

playButton.addEventListener('click', () => {
    if (!isPlaying1) {
        pauseAllAudios();
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

const playButton2 = document.getElementById('playButton2');
const audio2 = document.getElementById('myAudio2');
let isPlaying2 = false;
playButton2.addEventListener('click', () => {
    if (!isPlaying2) {
        pauseAllAudios();
        audio2.play();
        playButton2.textContent = '⏸';
        playButton2.classList.add('playing');
    } else {
        audio2.pause();
        playButton2.textContent = '▶';
        playButton2.classList.remove('playing');
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

function  setUpPlayer(audioId,buttonId,)
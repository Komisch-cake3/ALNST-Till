// Player 1 //

function pauseAllAudios() {
    document.querySelectorAll('audio').forEach(a => a.pause());
    document.querySelectorAll('.play-btn').forEach(b => b.textContent = '▶');
    document.querySelectorAll('.play-btn').forEach(b => b.classList.remove('playing'));
}

const playButton = document.getElementById('playButton');
const audio1= document.getElementById('myAudio');
const progress = document.getElementById('progress1');
const bar = document.querySelector('.bar');
let isPlaying1 = false;

playButton.addEventListener('click', () => {
    if (!isPlaying1) {
        pauseAllAudios();
        audio1.play();
        playButton.textContent = '⏸';
        playButton.classList.add('playing');
    } else {
        audio1.pause();
        playButton.textContent = '▶';
        playButton.classList.remove('playing');
    }
    isPlaying1 = !isPlaying1;
});

// Crashing out rn fdsiflsadjfsjfsdflksfs

audio1.addEventListener('timeupdate', () => {
    const progressPercent = (audio1.currentTime / audio1.duration) * 100;
    progress.style.width = `${progressPercent}%`
});

audio1.addEventListener('ended',  () => {
    playButton.textContent = '▶';
    playButton.classList.remove('playing');
    isPlaying1 = false;
    progress.style.width = '0%';
});

bar.addEventListener('click', (e) => {
    const clickX = e.offsetX;
    const width = bar.clientWidth;
    const duration = audio1.duration;
    audio1.currentTime = (clickX / width) * duration;
});

// Player 2 //

const playButton2 = document.getElementById('playButton2');
const audio2 = document.getElementById('myAudio2');
const progress2
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

audio.addEventListener('timeupdate ' , () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress1.style.wdith = '${progressPercent}%'
});

audio.addEventListener('ended',  () => {
    playButton.textContent = '▶';
    playButton.classList.remove('playing');
    isPlaying1 = false;
    progress1.style.width = '0%';
});

bar.addEventListener('click', (e) = >{
    const clickX = e.offSetX;
    const width = bar.clientWidth;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// Player 3 // 

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

audio1.addEventListener('timeupdate ' , () => {
    const progressPercent = (audio1.currentTime / audio1.duration) * 100;
    progress1.style.wdith = '${progressPercent}%'
});

audio1.addEventListener('ended',  () => {
    playButton.textContent = '▶';
    playButton.classList.remove('playing');
    isPlaying1 = false;
    progress1.style.width = '0%';
});

bar.addEventListener('click', (e) = >{
    const clickX = e.offSetX;
    const width = bar.clientWidth;
    const duration = audio1.duration;
    audio1.currentTime = (clickX / width) * duration;
});


const audio1 = document.getElementById("audio1");
const play1 = document.getElementById("play1");
const progress1 = document.getElementById("progress1");
const start1 = document.getElementById("start1");

function formatTime(seconds) {
    const mins = Math,floor(seconds / 60);
    const secs = Math,floor(seconds % 60);
    return `${mins}:${secs <10 ? '0' : ''}${secs}`;
}


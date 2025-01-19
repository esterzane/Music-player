const progress = document.getElementById ("progress");
const song = document.getElementById ("song");
const ctrlIcon = document.getElementById ("ctrlIcon");

song.onloadedmetadata = () => {
    progress.max = song.duration; 
    progress.value = song.currentTime; 
}

const playPause = () => {

    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

ctrlIcon.addEventListener("click", playPause);
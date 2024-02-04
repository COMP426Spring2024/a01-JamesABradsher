let songs = ["https://www.youtube.com/embed/eZCDzXNRPQc?si=rRkKmYbMZRc1cDLW",
            "https://www.youtube.com/embed/r5kb0nUoyqc?si=Y18VrTP-htvxLX5s",
            "https://www.youtube.com/embed/dI3J7d08j8E?si=wPjH5yijtdo3ZLRJ",
            "https://www.youtube.com/embed/Qh3sZvAmXq4?si=P0r8oAwuCQYBIY6s",
            "https://www.youtube.com/embed/HNrG3w_a448?si=Jcr5ObTXy8pYiTzc",
            "https://www.youtube.com/embed/5KUzrHadGAE?si=XFrJPLdJLr6tV7qv",
            "https://www.youtube.com/embed/uxs_HYw_mLk?si=IjX5WOrQMIYvrrXw",
            "https://www.youtube.com/embed/nazrDrijchU?si=i75MIbat36QwfarV",
            "https://www.youtube.com/embed/VBhiNOzkyDI?si=wn2Y9kL7J-DfAnrs"];



let reassignVideo = function () {
    let selector = document.getElementById("song-selector");
    let iframe = document.getElementById("player-iframe");

    iframe.src = songs[selector.value];
}
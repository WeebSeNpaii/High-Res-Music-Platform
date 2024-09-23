const audioElement = new Audio('Songs/1.flac')
const playbutton = document.getElementById('playbtn');
const backbutton = document.getElementById('backbtn');
const forwardbtn = document.getElementById('forwardbtn');
const seekbar = document.getElementById('seekbar');
const listennowbtn = document.getElementById('btn');
let volumerange = document.getElementById('volume');
const songtitle = document.getElementById('songtitle');
const songartist = document.getElementById('songartist');
let songartists = Array.from(document.getElementsByClassName("songartists"));
let songname = Array.from(document.getElementsByClassName('songname1'));

let songItems = Array.from(document.getElementsByClassName('song1'))

let songs = [
    { songName: 'Most Wanted', filepath: 'Songs/1.flac', coverpath: 'covers/1.jpg', Artists: 'Towa' },
    { songName: 'Murder Mind', filepath: 'Songs/2.flac', coverpath: 'covers/2.jpg', Artists: 'kordhell' },
    { songName: 'Montagem', filepath: 'Songs/3.flac', coverpath: 'covers/3.jpg', Artists: 'vtze archive' },
    { songName: 'Heart Voice', filepath: 'Songs/4.flac', coverpath: 'covers/4.jpg', Artists: 'Evan Call' },
    { songName: 'ENOUGH!', filepath: 'Songs/5.flac', coverpath: 'covers/5.jpg', Artists: 'Eternxlkz' },
    { songName: 'Aaoge Tum', filepath: 'Songs/6.flac', coverpath: 'covers/6.jpg', Artists: 'The Local Train' },
    { songName: 'Jiyein Kyun', filepath: 'Songs/7.flac', coverpath: 'covers/7.jpg', Artists: 'Pritam' },
    { songName: 'World Caves', filepath: 'Songs/8.flac', coverpath: 'covers/8.jpg', Artists: 'Matt Maltese' },
    { songName: 'Fainted', filepath: 'Songs/9.flac', coverpath: 'covers/9.jpg', Artists: 'Narvent' },
    { songName: 'BLUDLUST', filepath: 'Songs/10.flac', coverpath: 'covers/10.jpg', Artists: 'NGXT' },
    { songName: 'softcore', filepath: 'Songs/11.flac', coverpath: 'covers/11.jpg', Artists: 'The neighbourhood' },
    { songName: 'Duvet', filepath: 'Songs/12.flac', coverpath: 'covers/12.jpg', Artists: 'boa' },
    { songName: 'Life in Rio', filepath: 'Songs/13.flac', coverpath: 'covers/13.jpg', Artists: 'NUEKI' }
]


playbutton.addEventListener('click', () => {

    if (audioElement.paused) {
        audioElement.play();
        playbutton.classList.remove('fa-circle-play')
        playbutton.classList.add("fa-circle-pause")
        songs.forEach((element, i) => {
            if (audioElement.src.substring(audioElement.src.length - 12) == songs[i].filepath) {
                document.getElementById('displaycover').src = songs[i].coverpath;
            }
            else if (audioElement.src.substring(audioElement.src.length - 13) == songs[i].filepath) {
                document.getElementById('displaycover').src = songs[i].coverpath;
            }
        })

    }
    else if (audioElement.play) {
        audioElement.pause();
        playbutton.classList.remove('fa-circle-pause')
        playbutton.classList.add("fa-circle-play")

    }
})


forwardbtn.addEventListener('click', () => {


    obj = audioElement.src.substring(audioElement.src.length - 6);


    index = parseInt(obj.split(0, 1));

    if (index >= songs.length) {
        index = 1;
    }
    else if (index < songs.length) {
        index += 1;
    }
    audioElement.src = `Songs/${index}.flac`
    audioElement.currentTime = 0;
    audioElement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');


    songs.forEach((element, i) => {
        if (audioElement.src.substring(audioElement.src.length - 12) == songs[i].filepath) {
            document.getElementById('displaycover').src = songs[i].coverpath;
            songtitle.innerHTML = songs[i].songName;
            songartist.innerHTML = songs[i].Artists;
        }
        else if (audioElement.src.substring(audioElement.src.length - 13) == songs[i].filepath) {
            document.getElementById('displaycover').src = songs[i].coverpath;
            songtitle.innerHTML = songs[i].songName;
            songartist.innerHTML = songs[i].Artists;
        }
    })
})

backbutton.addEventListener('click', () => {
    obj = audioElement.src.substring(audioElement.src.length - 6);
    index = parseInt(obj.split(0, 1));

    if (index > 1) {
        index -= 1;
    }
    else if (index <= 1) {
        index = songs.length;
    }
    audioElement.src = `Songs/${index}.flac`
    audioElement.currentTime = 0;
    audioElement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');

    songs.forEach((element, i) => {
        if (audioElement.src.substring(audioElement.src.length - 12) == songs[i].filepath) {
            document.getElementById('displaycover').src = songs[i].coverpath;
            songtitle.innerHTML = songs[i].songName;
            songartist.innerHTML = songs[i].Artists;
        }
        else if (audioElement.src.substring(audioElement.src.length - 13) == songs[i].filepath) {
            document.getElementById('displaycover').src = songs[i].coverpath;
            songtitle.innerHTML = songs[i].songName;
            songartist.innerHTML = songs[i].Artists;
        }
    })
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    seekbar.value = progress;
    document.getElementById('currenttime').innerHTML = progress;

})
seekbar.addEventListener('change', () => {
    audioElement.currentTime = seekbar.value * audioElement.duration / 100;
})


Array.from(document.getElementsByClassName('div2')).forEach((element, i) => {
    element.addEventListener('click', (e) => {

        if (audioElement.paused) {
            son = parseInt(e.target.id);
            audioElement.src = `Songs/${son}.flac`;
            audioElement.currentTime = 0;
            audioElement.play();
            document.getElementById(`${son}`).classList.remove('fa-play');
            document.getElementById(`${son}`).classList.add('fa-circle-pause');

            playbutton.classList.remove('fa-circle-play');
            playbutton.classList.add('fa-circle-pause');
        }
        else if (audioElement.play) {
            audioElement.pause();

            document.getElementById(`${e.target.id}`).classList.remove('fa-circle-pause');
            document.getElementById(`${e.target.id}`).classList.add('fa-play');

            playbutton.classList.remove('fa-circle-pause');
            playbutton.classList.add('fa-circle-play');
        }


        songs.forEach((element, i) => {
            if (audioElement.src.substring(audioElement.src.length - 12) == songs[i].filepath) {
                document.getElementById('displaycover').src = songs[i].coverpath;
                songtitle.innerHTML = songs[i].songName;
                songartist.innerHTML = songs[i].Artists;
            }
            else if (audioElement.src.substring(audioElement.src.length - 13) == songs[i].filepath) {
                document.getElementById('displaycover').src = songs[i].coverpath;
                songtitle.innerHTML = songs[i].songName;
                songartist.innerHTML = songs[i].Artists;
            }
        })
    })
})

listennowbtn.addEventListener('click', () => {

    audioElement.src = `Songs/9.flac`
    audioElement.currentTime = 0;
    audioElement.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
    songs.forEach((element, i) => {
        if (audioElement.src.substring(audioElement.src.length - 12) == songs[i].filepath) {
            document.getElementById('displaycover').src = songs[i].coverpath;
            songtitle.innerHTML = songs[i].songName;
            songartist.innerHTML = songs[i].Artists;
        }
        else if (audioElement.src.substring(audioElement.src.length - 13) == songs[i].filepath) {
            document.getElementById('displaycover').src = songs[i].coverpath;
            songtitle.innerHTML = songs[i].songName;
            songartist.innerHTML = songs[i].Artists;
        }
    })


})

volumerange.oninput = function () {
    audioElement.volume = volumerange.value / 100;
}

function opacitycontrol() {
    if (volumerange.style.opacity == 0) {
        volumerange.style.opacity = 1;
    }
    else if (volumerange.style.opacity == 1) {
        volumerange.style.opacity = 0;
    }

}

songs.forEach((element, i) => {
    if (audioElement.src.substring(audioElement.src.length - 12) == songs[i].filepath) {
        songtitle.innerHTML = songs[i].songName;
        songartist.innerHTML = songs[i].Artists;
    }
    else if (audioElement.src.substring(audioElement.src.length - 13) == songs[i].filepath) {
        songtitle.innerHTML = songs[i].songName;
        songartist.innerHTML = songs[i].Artists;
    }

});

Array.from(songname).forEach((element, i) => {
    songs.forEach((element) => {
        songname[i].innerHTML = songs[i].songName;
    })
})

Array.from(songartists).forEach((element, i) => {
    songs.forEach((element) => {
        songartists[i].innerHTML = songs[i].Artists;
    })
})
var data = [
    {
        public_id: 123,
        type: 0, // image
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    },
    {
        public_id: 123,
        type: 1, // video
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1493528237448-144452699e16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
    },
    {
        public_id: 123,
        type: 1,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        public_id: 123,
        type: 1,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        public_id: 123,
        type: 1,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1505416795390-0beeb662b1f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1512722328319-51c3d027c228?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1580687580845-524eae9f69fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
    },
    {
        public_id: 123,
        type: 1,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
    },
    {
        public_id: 123,
        type: 1,
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1599192148293-d315c45e7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1599753408328-b704f00319ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1617651805269-89dbb4e4097f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
    },
    {
        public_id: 123,
        type: 0,
        url: "https://images.unsplash.com/photo-1580687580574-ea1a319f1388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    }
]

var currItm;

// display data on array
function displayData() {
    var videoImgContainer = document.getElementsByClassName('video-img-container')[0];
    
    if(data.length > 0) {
        videoImgContainer.innerHTML = data.map((itm, id) => {
            if(itm.type == 0) { // Image
                return `<div onclick="displayLightbox(${id})" class="video-img-container-itm" style="background-image: url(${itm.url})"></div>`;
            }

            if(itm.type == 1) { // Video
                return `
                <div onclick="displayLightbox(${id})" class="video-img-container-itm">
                    <span class="iconify" data-inline="false" data-icon="ic:baseline-play-circle-outline"></span>
                    <video class="player" id="">
                        <source src="${itm.url}#t=0.8" type="video/mp4" />
                    </video>
                </div>`
            }

        }).join('');
    }
}

// display data on array


// display lightbox
function displayLightbox(id) {
    var lightbox = document.getElementsByClassName('lightbox')[0];
    var viewer = document.getElementsByClassName('lightbox-viewer')[0];
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');

    currItm = id;

    if(id == 0) prevBtn.style.display = "none";
    else prevBtn.style = "";

    if(id == (data.length - 1)) nextBtn.style.display = "none";
    else nextBtn.style = "";

    if(!lightbox.classList.contains('active')) lightbox.classList.add('active');
    if(!document.body.classList.contains('scroll')) document.body.classList.add('scroll');

    if(data[id].type == 0) {
        viewer.innerHTML = `<img class="gl-viewer-container-itm" src="${data[id].url}" alt="">`;
    }

    if(data[id].type == 1) {
        viewer.innerHTML = `
        <video class="" id="player" controls autoplay>
            <source src="${data[id].url}#t=0.8" type="video/mp4" />
        </video>
        `
        new Plyr('#player', {
            debug: false,
            blankVideo: '',
            storage: {
                enabled: false
            },
            controls: [
                'play-large', // The large play button in the center
                'play', // Play/pause playback
                'progress', // The progress bar and scrubber for playback and buffering
                'mute', // Toggle mute
                'volume', // Volume control
                'fullscreen', // Toggle fullscreen
            ],
        });
    }
}
// display lightbox

// go back function
function hideLightbox() {
    var lightbox = document.getElementsByClassName('lightbox')[0];
    var player = document.getElementById('player');

    if(lightbox.classList.contains('active')) lightbox.classList.remove('active');
    if(document.body.classList.contains('scroll')) document.body.classList.remove('scroll');

    if(player) {
        player.pause();
    }
}
// go back function

// Previous btn function
function onClickedPrev() {
    var player = document.getElementById('player');

    if(player) {
        player.pause();
    }

    if(currItm != 0) {
        currItm -= 1;
        displayLightbox(currItm);
    }
}
// Previous btn function

// Next btn function
function onClickedNext() {
    var player = document.getElementById('player');

    if(player) {
        player.pause();
    }

    if(currItm < data.length-1) {
        currItm += 1;
        displayLightbox(currItm);
    }
}
// Next btn function

// document on load
$(function() {
    displayData();
})
// document on load
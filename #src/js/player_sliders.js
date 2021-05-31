let video = document.querySelector(`#video_player`); 
let videoInfo = document.getElementById("video_info");
let btn = document.getElementById(`play-pause`);
let min = Math.trunc(video.duration / 60);
let sec = Math.floor(video.duration % 60); 
document.querySelector(`#volume`).oninput = videoVolume; // for videoplayer

let clicks = 0; // for select

// Places Slider

$(document).ready(function() {
  $(".slider_places").slick({
	arrows: true,	
	variableWidth: true,	
	infinite: true,
	centerMode: true,
	initialSlide: 1,
  });
}); 

// Player

	// Play-pause button

function playPause() {
	if(video.paused) {
		btn.className = "pause";
		video.play();
	} else {
		btn.className = "play";
		video.pause();
	}
}

btn.onclick = function() {
	playPause();
}

	// Volume button 

function videoVolume() {
	let v = this.value;
	video.volume = v / 100;
}
	
	// Video starts

function checkVideo()	{
	if(video.currentTime > 0) {
		let videoInfo = document.getElementById("video_info");
			videoInfo.style.transition = ".2s";
			videoInfo.style.opacity = "0";
	}

	if(video.paused) {
		videoInfo.style.opacity = "1";
	}
}

setInterval(checkVideo, 50);

// Categories Slider

$(document).ready(function() {
	$(".slider_categories").slick({
     slidesToShow: 1,
	  centerMode: true,
	  arrows: true,	
	  variableWidth: true,	
	  infinite: false,
	  initialSlide: 2,
	});
  });

// Travellers Slider

$(document).ready(function() {
	$(".slider_travellers").slick({
	  slide: ".slider_item",
     slidesToShow: 1,
	  speed: 1,
	  arrows: true,	
	  dots: true,
	  variableWidth: true,	
	  infinite: true,
	  centerMode: true,
	  initialSlide: 0,
	});
  });
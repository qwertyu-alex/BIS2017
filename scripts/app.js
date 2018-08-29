var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'sounds/frugtSkrald.mp3');
audioElement.setAttribute('autoplay', 'autoplay');
//audioElement.load()
$.get();




audioElement.pause();
/*$('*').click(function() {
    audioElement.play();
});*/

audioElement.play();

audioElement.addEventListener('ended', function functionName() {
    this.currentTime = 0;
    this.play();
}, false);

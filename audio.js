// create a new audio object with the specified audio file
const audio = new Audio('Adrián Berenguer - Premiere.wav');
// add an event listener to the "playButton"
//when the button is clicked, the audio will start playing
document.getElementById('playButton').addEventListener('click', function() {
  //plays the audio
    audio.play();
});
// add an event listener to the "pauseButton"
// when the button is clicked, the audio will pause
document.getElementById('pauseButton').addEventListener('click', function() {
    //pauses the audio
    audio.pause();
});
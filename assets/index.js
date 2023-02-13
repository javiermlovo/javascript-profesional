import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector('video');
const player = new MediaPlayer({ el: video,  plugins:[new AutoPlay()]});

const btnPlay = document.querySelector('.play');
const btnMute = document.querySelector('.mute')
btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMute();
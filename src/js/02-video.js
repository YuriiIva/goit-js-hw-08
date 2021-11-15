import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data);
});
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

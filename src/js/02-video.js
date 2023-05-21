import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
const onPlay = function (data) {
  //   console.log(data.seconds);
  localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(CURRENT_TIME))
  .then(function (seconds) {});

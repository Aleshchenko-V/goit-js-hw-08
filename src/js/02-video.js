import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

localStorage.setItem(
  LOCALSTORAGE_KEY,
  localStorage.getItem(LOCALSTORAGE_KEY) || 0
);

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
  }, 1000)
);

document.addEventListener(
  'DOMContentLoaded0',
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
);

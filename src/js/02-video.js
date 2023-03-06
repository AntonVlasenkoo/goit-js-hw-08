import throttle from "lodash.throttle";
import Player  from '@vimeo/player';
//=========================================
const STORAGE_KEY = 'videoplayer-current-time'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    const onPlay = function(time) {
localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
};
player.on('timeupdate', throttle((onPlay), 1000));  

const times = localStorage.getItem(STORAGE_KEY);
const parseTimes = JSON.parse(times);
console.log(parseTimes.seconds);

player.setCurrentTime(parseTimes.seconds).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
    
            break;

        default:
          
            break;
    }
});

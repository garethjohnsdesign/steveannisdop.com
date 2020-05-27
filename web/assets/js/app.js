// 1. Imports
// ----------

import './jqueryload';
import 'what-input';
import Plyr from 'plyr';
import tippy, {followCursor} from 'tippy.js';
import Foundation from 'foundation-sites';
import AOS from 'aos';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import Swup from 'swup';
import SwupBodyClassPlugin from "@swup/body-class-plugin";
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupGaPlugin from '@swup/ga-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';


$( document ).ready( function() {
  function init() {

// 2. Foundation
// ----------
  
Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
  
$(document).foundation();


// 3. Tippy
// ----------


tippy('[data-tippy-content]', {
  placement: 'bottom',
  followCursor: true,
  theme: 'custom',
  flip: false,
  plugins: [followCursor]
})

// 4. Plyr
// ----------

const player = new Plyr('#player', {
  ratio: '16:9',
  controls: ['play', 'progress', 'mute', 'volume', 'pip', 'airplay', 'fullscreen']
});


// 4. Fancybox
// ---------------


$('[data-fancybox="gallery"]').fancybox({
animationEffect: "fade",
animationDuration: 366,
loop: true,
arrows: true,
toolbar: true,
smallBtn:false,
buttons: [
    "slideShow",
    "fullScreen",
    "close"
 ],
});



// 5. Viewport Height Fix
// ----------------------

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// 7. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 32,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


}

// 7. Page Transitions
// -------------------
const options = {
  animationSelector: '[class*="swup-transition-"]',
  containers: [ '#swup-body', '#swup-header', '#swup-overlay', '#swup-navigation' ],
  plugins: [
    new SwupPreloadPlugin(),
    new SwupBodyClassPlugin(),
    new SwupGaPlugin(),
    new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: true,
        scrollFriction: 0.3,
        scrollAcceleration: 0.04
    })
  ]
};

const swup = new Swup( options );

// 9. Run Once
// -----------
init();

swup.on( 'contentReplaced', init );

} );
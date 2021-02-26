import 'regenerator-runtime/runtime';
import { onSiteLoadEvents } from './scripts/onSiteLoad-events.js';
import { sidebarEvents } from './scripts/sidebar-events.js';
import { backgroundEvents } from './scripts/background-events.js';
import { biographyNavEvents } from './scripts/biography-nav-events.js';
import { portfolioNavEvents } from './scripts/portfolio-nav-events.js';

function main () {
    onSiteLoadEvents.openSidebar();
    sidebarEvents.sideBarController();
    backgroundEvents.backgroundParallaxAnimation();
    biographyNavEvents.changeSelectedMenu();
    portfolioNavEvents.scrollingToChoosedProject();
};

// document.addEventListener('click', function (e){
//     if(e.target.getAttribute('href') || e.target.getAttribute('type') === "submit" || e.target.nodeName === "BUTTON") {
//         e.preventDefault();
//     };
// });

window.addEventListener('DOMContentLoaded', main());
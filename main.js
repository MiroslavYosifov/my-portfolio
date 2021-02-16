//import 'regenerator-runtime/runtime';
import { sidebarEvents } from './scripts/sidebar-events.js';
import { backgroundEvents } from './scripts/background-events.js';
import { biographyNavEvents } from './scripts/biography-nav-events.js';
import { portfolioNavEvents } from './scripts/portfolio-nav-events.js';

function main () {
    window.onload = (e) => {
        setTimeout(() => {
            document.querySelector("#portfolio-header").scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 1700);
    };
    sidebarEvents.selectSidebarPages();
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
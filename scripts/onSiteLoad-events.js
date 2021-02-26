import { sidebarEvents } from './sidebar-events.js';

const onSiteLoadEvents = (function () {
    function openSidebar () {
        if(window.innerWidth > 580) {
            window.onload = (e) => {
                setTimeout(() => {
                    let biographyButton = document.querySelector("#ctx-biography-button > i");
                    document.querySelector("#portfolio-header").scrollIntoView({ behavior: 'smooth', block: 'end' });
                    sidebarEvents.selectSidebarPages(biographyButton); 
                }, 1500);
            };
        }
    }
    
    return {
        openSidebar
    }

})();

export {
    onSiteLoadEvents
}


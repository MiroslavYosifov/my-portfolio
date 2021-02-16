const sidebarEvents = (function () {
    let isSidebarOpen = false;
    
    const sidebar = document.querySelector('.sidebar-content'); // sidebar container
    const sidebarPages = document.querySelector('.sidebar-pages'); // pages navigation

    const contactContent = document.querySelector('.contact-content'); // content to loadn in
    const biographyContent = document.querySelector('.biography-text-content');

    const closeButton = document.getElementById("ctx-close-button");

    let prevSelectedButton;

    function selectSidebarPages() {
        sidebarPages.addEventListener('click', function(e) {
            e.preventDefault();

            if(e.target.parentNode.id === "ctx-close-button") {
                isSidebarOpen = false;
                closeButton.parentNode.style.display = "none";
                closeButton.classList.remove('active');
                prevSelectedButton.classList.remove('active');
            }

            if(e.target.nodeName === 'I' && e.target.parentNode.id !== "ctx-close-button") {
                isSidebarOpen = true;
                
                selectSidebarButton(e.target.parentNode)
                changeSidebarContentTemplate(e.target.parentNode.id);
            };

            showHideSidebar(isSidebarOpen);
        });
    };

    function selectSidebarButton (element) {
   
        if(!element.classList.contains('active')) {
            element.classList.add('active');
            closeButton.parentNode.style.display = "block";
            closeButton.classList.add('active');

            if(prevSelectedButton) {
                prevSelectedButton.classList.remove('active');
            };

            prevSelectedButton = element;
        }
    };

    function changeSidebarContentTemplate (buttonId) {
        if(buttonId === "ctx-contact-button") {
            biographyContent.style.display = "none";
            contactContent.style.display = "block";
        }

        if(buttonId === "ctx-biography-button") {
            biographyContent.style.display = "block";
            contactContent.style.display = "none";
        }
    }

    function showHideSidebar(isSidebarOpen) {

        if(isSidebarOpen) {
            sidebar.classList.remove('slide-in-right');
            sidebar.classList.add('slide-in-left');
            document.documentElement.style.setProperty('--sidebar-content-position-left', '0');

        } 
        
        if(!isSidebarOpen) {
            sidebar.classList.remove('slide-in-left');
            sidebar.classList.add('slide-in-right');
            document.documentElement.style.setProperty('--sidebar-content-position-left', '-26em');
        }
    };

    return {
        selectSidebarPages
    }
})();

export {
    sidebarEvents
}
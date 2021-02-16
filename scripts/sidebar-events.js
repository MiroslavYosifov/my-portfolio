const sidebarEvents = (function () {
    const sidebar = document.querySelector('.sidebar-content');

    function showHideBiography() {
        let biographyButton = document.getElementById('ctx-biography-button');

        biographyButton.addEventListener('click', function(e){
            e.preventDefault();
            
            selectSidebarButton(biographyButton);

            if(!sidebar.classList.contains('slide-in-left')) {
                sidebar.classList.remove('slide-in-right');
                sidebar.classList.add('slide-in-left');
                document.documentElement.style.setProperty('--sidebar-content-position-left', '0');
    
            } else {
                sidebar.classList.remove('slide-in-left');
                sidebar.classList.add('slide-in-right');
                document.documentElement.style.setProperty('--sidebar-content-position-left', '-26em');
            }
        });
        
    };

    function selectSidebarButton (element) {
        if(!element.classList.contains('active')) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }
    
    return {
        showHideBiography
    }
})();

export {
    sidebarEvents
}
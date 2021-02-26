const biographyNavEvents = (function () {
    let nav = document.querySelector('.biography-nav');

    let currentElement;
    let prevElement = nav.querySelector('li');
    prevElement.classList.add('selected');

    let currentPage;
    let prevPage = document.getElementById('education');
    prevPage.classList.add('showed');

    function changeSelectedMenu() {
        [...nav.querySelectorAll('li')].map(li => li.addEventListener('click', function(e) {
            e.preventDefault()
            currentElement = e.currentTarget;
            
            if(!currentElement.classList.contains('selected')) {

                currentElement.classList.add('selected');
                prevElement.classList.remove('selected');
                prevElement = currentElement;

                loadNewContent(currentElement.dataset.type)
            };
        }));
    };

    function loadNewContent(type) {
        currentPage = document.getElementById(type);
        if(!currentPage.classList.contains('showed')) {
            currentPage.classList.add('showed', 'slide-change-opacity');
            prevPage.classList.remove('showed', 'slide-change-opacity');
            prevPage = currentPage;
        };
    }

    return {
        changeSelectedMenu
    }
})();

export {
    biographyNavEvents
};
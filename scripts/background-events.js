const backgroundEvents = (function () {
    let background = document.querySelector('.portfolio');
    let positionY = 0;
    
    function backgroundParallaxAnimation () {
        document.addEventListener('scroll', function (e) {
            positionY +=3;
            background.style.backgroundPosition = `0px ${positionY}px`
        });
    };
   
    return {
        backgroundParallaxAnimation
    }
})();

export {
    backgroundEvents
}
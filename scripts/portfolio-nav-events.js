const portfolioNavEvents = (function () {
    document.getElementById('portfolio-header').addEventListener('click', scrollingToPortfolio);
    let portfolioNav = document.querySelector('.portfolio-nav ul');
   
    let prevElement;

    function scrollingToChoosedProject () {

        portfolioNav.addEventListener('click', function(e) {
            if(e.target.nodeName !== 'LI') return;
            if(!e.target.classList.contains('selected')){
                e.target.classList.add('selected');
                if(prevElement) {
                    prevElement.classList.remove('selected');
                }
                prevElement = e.target;
            }
            const section = document.querySelector(`section.portfolio > section.portfolio-content > div > section:nth-child(${e.target.dataset.index})`);

            if(e.target.dataset.index === "1") {
                console.log('tuk su');
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } 

            if(e.target.dataset.index !== "1") {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
           
        })
    };

    function scrollingToPortfolio (e) {
        const section = document.querySelector(`section.portfolio > section.portfolio-content > div > section:nth-child(1)`);
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return {
        scrollingToChoosedProject
    }
})();

export {
    portfolioNavEvents
}


// OLD SCHOOL METHOD
// btnScrollTo.addEventListener('click', function (e) {
//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords);
  
//     console.log(e.target.getBoundingClientRect());
  
//     console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
//     console.log(
//       'height/width viewport',
//       document.documentElement.clientHeight,
//       document.documentElement.clientWidth
//     );
//     section1.scrollIntoView({ behavior: 'smooth' });
//   });
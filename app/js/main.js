document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const screenFirstRow = document.querySelector('.screen_first .wrapper-row');
    const homeForm = document.querySelector('.home-form');
    const homeFormClone = homeForm.cloneNode(true);
    const setHeightSections = () => document.querySelectorAll('section').forEach(item => item.style.height = `${item.clientHeight}px`);
    
    (() => setTimeout(() =>  document.body.classList.add('ready'), 0))();

    if(window.innerWidth < 769) {
        homeForm.remove()
        screenFirstRow.prepend(homeFormClone)
    }

    setHeightSections();

    window.addEventListener('resize', setHeightSections);
    
})

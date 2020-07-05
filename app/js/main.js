document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    (() => setTimeout(() =>  document.body.classList.add('ready'), 0))();
    document.querySelectorAll('section').forEach(item => item.style.minHeight = `${item.clientHeight}px`);
    
})

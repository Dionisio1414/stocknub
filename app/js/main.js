document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const screenFirstRow = document.querySelector('.screen_first .wrapper-row');
    const homeForm = document.querySelector('.home-form');
    const homeFormClone = homeForm.cloneNode(true);
    const screenSixParagraph = document.querySelector('.screen_six__description p').cloneNode(true);
    const setHeightSections = () => document.querySelectorAll('section').forEach(item => item.style.height = `${item.clientHeight}px`);
    const feedbackForms = document.querySelectorAll('form');
    const toggleHomeForm = () => {
        if(window.innerWidth < 769) {
            homeForm.remove()
            screenFirstRow.prepend(homeFormClone)
        }
    }
    const parralaxs = document.querySelectorAll('.rellax');

    // let rellax = new Rellax('.rellax', {
    //     speed: 3,
    //     center: false,
    //     vertical: true,
    //     horizontal: false,
    //     callback: function(pos) {
    //         console.log(pos)
    //     }
    // });

    // setTimeout(() => new simpleParallax(parralaxs, {
    //     overflow: true
    // }), 700)

    if(window.innerWidth < 577) {
        document.querySelector('.course-description').prepend(screenSixParagraph);
    }

    toggleHomeForm();
    setHeightSections();

    window.addEventListener('resize', () => {
        toggleHomeForm();
        setHeightSections();
    });

    setTimeout(() => {
        document.body.classList.add('ready');
        setHeightSections();
    }, 200);

    let result;

    $('.notification_overlay').click(function() {
        $('.notification_ok').hide();
        $(this).hide();
    });

    $("form").submit(function() {
        let str = $(this).serialize(), self = $(this);
        
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: str,
            success: function(msg) {
                if(msg == 'OK') {
                    result = `<div class="notification_ok">
                        <div class="close-notification">
                            <span></span>
                            <span></span>
                        </div>
                        Ваше сообщение было отправлено. Спасибо!</div>
                    `;
                    self.trigger('reset');
                    $('body')
                        .append(result)
                        .find('.notification_ok')
                        .show();
                    $('.notification_overlay').show();
                    $('.notification_ok .close-notification').click(function() {
                        $(this).parent().hide();
                        $('.notification_overlay').hide();
                    });
                    console.log(result);
                } else {
                    result = JSON.parse(msg);
                    let resultKeys = Object.keys(result);
                    // console.log('result', resultKeys);
                    self.find('.form-body__fields > input').each(function(i, item) {
                        let invalidInput = $(item).attr('name');
                        // console.log(self.find(`.form-body__fields > input[name=${resultKeys[i]}]`))
                        if(self.find(`.form-body__fields > input[name=${resultKeys[i]}]`).length) {
                           console.log($(item));
                        } else {
                            $(item).css('border-color', 'rgba(112,112,112,.1)');
                        }
                    });
                }
            }
        });
        return false;
    });
    
})

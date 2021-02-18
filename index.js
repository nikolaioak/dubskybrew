/* Sticky Navigation */
$('.js--section-features').waypoint( (direction) => {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
    offset: '60px;'
});

/* Mobile Nav */
document.getElementById('js--nav-icon').addEventListener('click', () => {
    let nav = $('.js--section-features')
    let imenu = $('.js--menu')
    let iclose = $('.js--close')
    
    nav.slideToggle(200)
    
    if (imenu.hasClass('js--show')) {
        imenu.addClass('js--hide');
        imenu.removeClass('js--show');
    } else {
        imenu.addClass('js--show');
        imenu.removeClass('js--hide');
    }
    
    if (iclose.hasClass('js--show')) {
        iclose.addClass('js--hide');
        iclose.removeClass('js--show');
    } else {
        iclose.addClass('js--show');
        iclose.removeClass('js--hide');
    }
});
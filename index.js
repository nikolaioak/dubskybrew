$(document).ready(function() {

    /* Sticky Navigation */
    $('.js--section-about').waypoint( (direction) => {
        if (direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px;'
    });

    /* Mobile Nav */
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav')
        let menu = document.getElementById('js--menu')
        
        nav.slideToggle(200)
        
        if (menu.children[0].classList.contains('ion-android-menu')) {
            menu.innerHTML = '<i class="ion-close"></i>'
        } else {
            menu.innerHTML = '<i class="ion-android-menu"></i>'
        }
    })

    /* Navigation Scroll */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault()
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation must change focus!
                    var $target = $(target)
                    $target.focus()
                    // Checking if the target was focused
                    if ($target.is(":focus")) {
                        return false
                    } else {
                        // Adding tabindex for elements not focusable
                        $target.attr('tabindex','-1')
                        // Set focus again
                        $target.focus()
                    };
                });
            }
        }
    });
})
$(document).ready(function () {    
    
    // Get the height of the sticky main nav and create position for scrolling by links
    const navHeight = $('.logo-min').height() + 10,
    scrollLinksObj = {
        'js--scroll-to-features': '.js--section-features',
        'js--scroll-to-steps': '.js--section-steps',
        'js--scroll-to-cities': '.js--section-cities',
        'js--scroll-to-plans': '.js--section-plans'
    }
    
    function scrollTo(target) {
        $('html, body').animate({ 
            scrollTop: $(target).offset().top - navHeight 
        }, 1000);
    }
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '25%'
    });

    /* Scroll on boards */
    $('.navigation').on('click', function(e) {
        e.preventDefault();
        var $target = $(e.target);
        for (let link in scrollLinksObj) {
            if ($target.hasClass(link)) scrollTo(scrollLinksObj[link]);
        }
    });

    /* Scroll on top */
    $(document).on("click", "#logo", function () {
        $('html, body').animate({ 
            scrollTop: $('body').offset().top
        }, 1000);
    });
    
    /* Animations on scroll */
    //features
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    //works-phone
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    //cities
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    //plans
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile navi */
    $('.js--nav-icon').click(() => activeMobileNavi());

    let activeMobileNavi = function() {
        let icon = $('.js--nav-icon i');

        $('.js--main-nav').slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            $('.hero-text-box').fadeOut();
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            $('.hero-text-box').fadeIn();
        }
    }
})
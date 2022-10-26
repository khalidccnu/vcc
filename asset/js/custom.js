// Navbar Toggle
function navbar_toggle() {
    if (!$('.navbar-toggler').hasClass('collapsed')) {
        $('.navbar-toggler i').removeClass('fa-outdent').addClass('fa-indent');
    } else {
        $('.navbar-toggler i').removeClass('fa-indent').addClass('fa-outdent');
    }
}

// Navbar Collapse
$('.nav-item a').click(function() {
    if ($(window).width() < 768) {
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').removeClass('show');

        navbar_toggle();
    }
});

// Navlink Active
function navlink_active() {
    let position = $(window).scrollTop();

    $('section').each(function() {
        let target = $(this).offset().top;
        let id = $(this).attr('id');

        if (position >= (target - 250)) {
            $('.navbar-nav a').removeClass('active');
            $('.navbar-nav a[href="#' + id + '"]').addClass('active');
        }
    });
}

// Navbar Sticky
function navbar_sticky() {
    if ($(window).scrollTop() > 100) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}

// ===== Initial Load =====
navlink_active();
navbar_sticky();

// ===== Window Scroll Event =====
$(window).scroll(function() {
    navlink_active();
    navbar_sticky();
});
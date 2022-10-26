// init nav object from dom
let nav = $('nav');
// get height of the nav
let navHeight = nav.outerHeight();

// click-trigger
$('a[href*="#"]:not([href="#"])').click(function(event) {
    scroll_to_section(this);
    event.preventDefault();
});

// get target position and scroll to it
function scroll_to_section(self) {
    // get the target href
    let href = $(self).attr('href');
    // get the target position
    let targetPos = $(href).offset().top - navHeight;

    // scroll to target
    $('html, body').animate({
        scrollTop: targetPos
    }, 400);
}
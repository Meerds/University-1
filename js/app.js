$(document).ready(function () {
    // Foundation
    $(document).foundation();


$('a.jumpLinks').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
});
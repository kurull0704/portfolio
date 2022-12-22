
$(document).ready(function(){
        


    // MODAL
    $('[data-modal=projects]').on('click', function(){
        $('.overlay, #projects').fadeIn('fast');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #projects').fadeOut('fast');
    })
});
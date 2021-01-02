import scroll from '../base/scroll';

const modal = () => {
    
     $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('[data-modal=application]').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
        $('html, body').css("overflow","hidden");
        $('body').css("marginRight", scroll() + 'px');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #order').fadeOut('slow')
         $('body').css("marginRight","0px");
         $('html, body').css("overflow","");
    })
}
export default modal;
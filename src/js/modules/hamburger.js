const hamburger = () => {
        function scroll() {
            if($('.header__menu').hasClass('header__menu_active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

     $('.hamburger').on('click', function() {
         $(this).toggleClass('hamburger_active');
         $('.header__menu').toggleClass('header__menu_active');
         scroll();
     })

     $('.header__menu-list').each(function() {
         $(this).on('click', function() {
             $('.hamburger').removeClass('hamburger_active');
             $('.header__menu').toggleClass('header__menu_active');
             document.body.style.overflow = '';
         })
     })
}
export default hamburger;
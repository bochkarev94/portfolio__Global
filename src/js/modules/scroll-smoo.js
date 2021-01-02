const scrollSmoothly = () => {
        $('.hamburger').on('click', function() {
                $(this).toggleClass('hamburger_active');
                $('.header__menu').toggleClass('header__menu_active');
                scroll();
        })

    $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                $('.hamburger').removeClass('hamburger_active');
                $('.header__menu').toggleClass('header__menu_active');
                return false;
        })
}
export default scrollSmoothly;
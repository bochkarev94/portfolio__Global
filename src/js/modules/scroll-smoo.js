const scrollSmoothly = () => {
    $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        })
}
export default scrollSmoothly;
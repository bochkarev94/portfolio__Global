const slider = () => {

    $(document).ready(function(){
        $('.slider').slick({
            prevArrow: '<button type="button" class="slick-prev"><img src="./img/clients/prev.png"</button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./img/clients/next.png"</button>',
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            centerMode: true,
            centerPadding: '6px',
            infinite: false,
            initialSlide: 1,
            draggable: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    })
}

export default slider;
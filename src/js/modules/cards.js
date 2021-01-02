const cards = (btn) => {
    $(btn).each(function(i) {
        $(this).on('click', function() {
            $('.cards__item_content').eq(i).addClass('fadeIn');
            $('.cards__item_list').eq(i).addClass(' fadeIn ');
            $('.cards__item_content').eq(i).toggleClass('cards__item_content-active ');
            $('.cards__item_list').eq(i).toggleClass('cards__item_list-active');
        })
    }) 
}

export default cards;
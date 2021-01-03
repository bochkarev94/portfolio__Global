
import scroll from '../base/scroll';

const forms = () => {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "server.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#order').fadeOut();
            $('.overlay, #since').fadeIn('slow');
            $('html, body').css("overflow","hidden");
            $('body').css("marginRight", scroll() + 'px');
            setTimeout(function() {
                $('.overlay, #since').fadeOut();
                $('html, body').css("overflow","");
                $('body').css("marginRight","0px");
            }, 2000);
            $("form").trigger('reset');
            
        });
        return false;
    });
}

export default forms;
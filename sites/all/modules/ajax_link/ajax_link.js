(function($) {
    $.fn.ajax_link = function() {
        $('#ajax-link').hide();
        setTimeout(function(){
            $('#ajax-display').fadeout().html("").show();
            $('#ajax-link').fadeIn();
        }, 5000)
    }
})(jQuery);

$('#chicagotextright li ').on('click', function(){
    $('li.righttextred').removeClass('righttextred');
    $( "span.dash" ).remove();
    $(this).append('<span class="dash"><img src="images/dash.png"></span>')
    $(this).addClass('righttextred');
});
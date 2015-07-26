
$(document).ready( function(){
    var toAdd="";
    $("#button").click(function(){
        toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
    });

    $(document).on('click', '.item', function(){
        $(this).remove();
    });
    
});

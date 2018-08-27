$(function(){
    $('.eatBurger').on('click', function(event){
        var id = $(this).data('id');
        var isDevoured = $(this).data('devoured');
        // console.log(id);
        // console.log(isDevoured);

        $.ajax('api/burgers/' + id, {
            type: 'PUT',
            data: isDevoured
        })
    })
})
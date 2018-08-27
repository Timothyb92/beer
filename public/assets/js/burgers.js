$(function(){
    $('.eatBurger').on('click', function(event){
        var id = $(this).data('id');
        var newDevoured = $(this).data('newdevoured');
        console.log('newDevoured: ' + newDevoured)
        var newDevouredState = {
            devoured: newDevoured
        };
        $.ajax('api/burgers/' + id, {
            type: 'PUT',
            data: newDevouredState
        }).then(function(){
            location.reload();
        })
    })
})
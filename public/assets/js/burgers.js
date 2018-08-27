$(function(){
    $('.eatBurger').on('click', function(event){
        var id = $(this).data('id');
        var newDevoured = $(this).data('newdevoured');
        var newDevouredState = {
            devoured: newDevoured
        };
        $.ajax('api/burgers/' + id, {
            type: 'PUT',
            data: newDevouredState
        }).then(function(){
            location.reload();
        })
    });

    $('.addForm').on('submit', function(event){
        event.preventDefault();

        var newBurger = $("#burgerInput").val().trim()
        var newBurgerState = {
            burger_name: newBurger
        };
        $.ajax('api/burgers', {
            type: 'POST',
            data: newBurgerState
        }).then(function(){
            location.reload();
        })
    })
})
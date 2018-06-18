$(document).on("click", ".burger-btn", function(event){

    event.preventDefault();
    // alert("clicked!");

    console.log($(this));

    console.log($(this)[0].dataset.id)

    var burger_id = $(this)[0].dataset.id;

    var id = Number.parseInt(burger_id);

    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id
    }).then(function(data){
        location.reassign("/");
    })
})
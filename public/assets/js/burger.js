$(document).on("click", ".burger-btn", function(event){

    event.preventDefault();
    // alert("clicked!");

    console.log($(this));

    console.log($(this)[0].dataset.id)

    var burger_id = $(this)[0].dataset.id;

    var id = Number.parseInt(burger_id);

    $.ajax({
        type: "PUT",
        url: "/api/burgers/" + id,
    }).then(function(data){
        // location.reassign("/");
    })

     // Send the POST request.
    //  $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    // )
})
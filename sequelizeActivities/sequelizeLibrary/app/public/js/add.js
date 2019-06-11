$("#add-btn").on("click", function(event) {
    event.preventDefault();

    var newBook = {
        title: $("#title").val().trim(),
        author: $("#author").val().trim(),
        genre: $("#genre").val().trim(),
        pages: $("#pages").val().trim()
    };

    $.post("/api/new", newBook).then(function(data) {
        console.log(data);
    });

    $("#title").val("");
    $("#author").val("");
    $("#genre").val("");
    $("#pages").val("");
});
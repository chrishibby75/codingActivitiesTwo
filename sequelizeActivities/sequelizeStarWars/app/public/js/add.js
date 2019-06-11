$("#add-btn").on("click", function(event) {
    event.preventDefault();

    var newCharacter = {
        name: $("#name").val().trim(),
        role: $("#role").val().trim(),
        age: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
    };

    $.post("/api/new", newCharacter).then(function(data) {
        console.log(data);

        alert("Adding Character...");
    });

    $("#name").val("");
    $("#role").val("");
    $("#age").val("");
    $("#force-points").val("");
});
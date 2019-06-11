$("#search-btn").on("click", function() {
    var searchedCharacter = $("#character-search").val().trim();
    searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + searchedCharacter, function(data) {
        console.log(data);

        $("#well-section").empty();
        if (!data) {
            $("#well-section").append("<h2> The force is not strong with this one. Your character is not found. </h2>");
        }
        else {
            $("#well-section").append("<h2>" + data.name + "</h2>");
            $("#well-section").append("<h3>Role: " + data.role + "</h3>");
            $("#well-section").append("<h3>Age: " + data.age + "</h3>");
            $("#well-section").append("<h3>Force Points: " + data.forcePoints + "</h3>");
        }
    });
});
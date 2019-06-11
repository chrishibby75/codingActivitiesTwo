$.get("/api", function(data) {
    for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");
        wellSection.addClass("well");
        wellSection.attr("id", "character-well-" + i);

        $("#well-section").append(wellSection);

        $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
        $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
        $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
        $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
        $("#character-well-" + i).append("<hr>");
    }
});
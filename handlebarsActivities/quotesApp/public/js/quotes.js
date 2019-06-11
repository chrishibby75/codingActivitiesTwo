$(function() {
    $(".delquote").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/quotes/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted id ", id);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newQuote = {
            author: $("#auth").val().trim(),
            quote: $("#quo").val().trim()
        };

        $.ajax("/api/quotes", {
            type: "POST",
            data: newQuote
        }).then(function() {
            console.log("created new quote");
            location.reload();
        });
    });

    $(".update-form").on("submit", function(event) {
        event.preventDefault();

        var updatedQuote = {
            author: $("#auth").val().trim(),
            quote: $("#qou").val().trim()
        };

        var id = $(this).data("id");

        $.ajax("/api/quotes/" + id, {
            type: "PUT",
            data: updatedQuote
        }).then(function() {
            console.log("updated quote");
            location.assign("/");
        });
    });

});
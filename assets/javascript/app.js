// Array that loads with the page by default
var topics = [
    "Pasta",
    "Sushi",
    "Curry",
    "Dim Sum",
    "Cake",
    "Pho",
    "Ramen",
    "Fried Chicken",
    "Pizza",
    "Seafood",
    "Fried Rice",
    "Taco",
    "Burrito",
    "Ice Cream",
    "Barbeque",
    "Fish and Chips",
    "Kebab",
    "Chow Mein",
    "Ice Cream",
    "Pie",
    "Cheese"
]

// For loop that runs on page load to generate buttons from array
for (var i=0; i < topics.length; i++) {
    var buttons = $("<button class='food'>" + topics[i] +"</button>");
    buttons.attr("data-food", topics[i]);
    buttons.appendTo("#topics");
};

// Click handler that runs AJAX call based on data-food attribute of selected button
$(".food").on("click", function() {
    var food = $(this).attr("data-food");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=0VDHwVBWaKzALlyWIxWLGAb6wsIQYDzd&limit=10&rating=g";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        for (var i=0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gif = $("<img>");
            gif.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(gif);
            $("#gifsHereDiv").prepend(gifDiv);
        }
    });
});

// Search button click handler that adds searched term to button list
$("#searchButton").on("click", function searchForFood() {
    searchValue = document.getElementById("search").value;
    topics.push(searchValue);
    $("#topics").html("");

// Rerun both the for loop and AJAX call on this new array, within the same function that added the new button - needed because of "return false" declared later
    for (var i=0; i < topics.length; i++) {
        var buttons = $("<button class='food'>" + topics[i] +"</button>");
        buttons.attr("data-food", topics[i]);
        buttons.appendTo("#topics")
    };
    $(".food").on("click", function() {
        var food = $(this).attr("data-food");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=0VDHwVBWaKzALlyWIxWLGAb6wsIQYDzd&limit=10&rating=g";
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = response.data;
            for (var i=0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gif = $("<img>");
                gif.attr("src", results[i].images.fixed_height_still.url);
                gifDiv.prepend(p);
                gifDiv.prepend(gif);
                $("#gifsHereDiv").prepend(gifDiv);
            }
        });
    });

// This last line stops the page from reloading the default array buttons, which would not have any foods searched by the user
    return false;
});
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

for (var i=0; i < topics.length; i++) {
    var buttons = $("<button>" + topics[i] +"</button>");
    buttons.attr("data-food", topics[i]);
    buttons.appendTo("#topics")
}

$("button").on("click", function() {
    var food = $(this).attr("data-food");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=0VDHwVBWaKzALlyWIxWLGAb6wsIQYDzd&limit=10&rating=g";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
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
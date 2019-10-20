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
    var buttons = $("<button>" + topics[i] +"</button>")
    buttons.appendTo("#topics")
}
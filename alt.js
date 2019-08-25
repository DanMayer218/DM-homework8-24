

$( document ).ready(function() {
    console.log( "ready!" );
});


// CREATE A VAR WITH AN ARRAY IN IT CONTAINING A STRING WITH MY KEYWORDS.
var topics = ["leslie neilson", "chris farley", "three stooges", "flight of the conchords", "mike myers", "monty python", "jim carrey"];

// create a for loop that will cycle throught the topics array, 
for (var i = 0, i < topics.length; i++) {

    // create methods that will append buttons for each of the keyword items in the array
    function buttonRender() {

    
    var buttonRender =
    $("#buttonPopBox").append("<button id="keyButton" keyword="topics[i].text"> + topics[i].text + "</button>");
   
        console.log(buttonRender);

    };

    };
    



                

                $("keyButton").on("click", function() {
              
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                        this.keyword + "api_key=fd0KI4stOcjLEoVUBfTGMT8UUQbRZCYq&q=&limit=10&offset=0&rating=PG-13&lang=en";

                        $.ajax({
                            url: queryURL,
                            method: "GET"
                          })
                            
                            .then(function(response) {
                            
                          
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");

                
                    
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    
                    var giphImage = $("<img>");
                 
                    gifImage.attr("src", results[i].ratings);

                    
                    gifDiv.append(p);
                    gifDiv.append(gifImage);
                    

                    $("#giphGallery").prepend(gifDiv);


                }

               





















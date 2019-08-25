





// CREATE A VAR WITH AN ARRAY IN IT CONTAINING A STRING WITH MY KEYWORDS.
var topics = ["leslie neilson", "chris farley", "three stooges", "flight of the conchords", "mike myers", "monty python", "jim carrey"];


// document ready event to initiate the button rendering
document.addEventListener('DOMContentLoaded', function(){
// $("document").ready(function() {
 var arrayButt = function() {
// create a for loop that will cycle throught the topics array, 
for (var i = 0; i < topics.length; i++) {

    // create methods that will append buttons for each of the keyword items in the array

    if (i <= topics.length) {
        function buttongenerator() {
    // $("#buttonPopBox").append("<button id="keyButton" keyword="topics[i].text"> + topics[i].text + "</button>");
    var buttonDiv = $("#buttonPopBox").append("<div>");
    var buttonApp = $("<button>");
    var p = $("<p>").text("topics[i]");
    var keywordbutt = $("buttonApp").attr("keyword:" + topics[i]);
            
            buttonDiv.append(p);
            buttonDiv.append(buttonApp);

            $("#buttonPopBox").prepend(buttonDiv);
    }
}

    else (i > topics.length)
        console.log("buttons done sir");
    
   
        

    };

    }
});




    



                

                $("button").on("click", function() {
              
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + this.keyword + 
                                "api_key=fd0KI4stOcjLEoVUBfTGMT8UUQbRZCYq&q=&limit=10&offset=0&rating=PG-13&lang=en";

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
                };
            
            });
        }) 

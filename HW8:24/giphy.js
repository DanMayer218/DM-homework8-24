// CREATE A VAR WITH AN ARRAY IN IT CONTAINING A STRING WITH MY KEYWORDS.
var topics = ["leslie neilson", "chris farley", "three stooges", "flight of the conchords", "mike myers", "monty python", "jim carrey"];

// create a for loop that will cycle throught the topics array, 
for (var i = 0, i < topics.length; i++); {

    // create methods that will append buttons for each of the keyword items in the array
    function buttonRender() {

    
    var buttonRender =
    $("#buttonPopBox").append("<button id="keyButton" keyword="topics[i].text"> + topics[i].text + "</button>");
    // POTENTIALLY BETTER WAY TO CREATE BUTTONS BY THE ARRAY?
    // document.getElementById("buttonPopBox").innerHTML = "<button> + topics[i] + </button>"
    
    // method to add a keyword attribute to the button based on the for loop text
    // $("buttonRender").attr(keyword.buttonRender.text);
    
    // create a new var containing the button and giving it a unique id from the array.
    // var buttonQuery = $("buttonRender").attr()
        console.log(buttonRender);

    };

    };
    



                // create methods that will append buttons for each of the keyword items in the array

                // create a var to use in the queryuRL so that the topic associated with the appended button will be entered into the search

                $("keyButton").on("click", function() {
                // using the api key from giphy, and AJAX with the GET method we will be able to make 
                // a xhttp request from their server for giphs based on the keywords in the buttons and the array.
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                        this.keyword + "api_key=fd0KI4stOcjLEoVUBfTGMT8UUQbRZCYq&q=&limit=10&offset=0&rating=PG-13&lang=en";

                        $.ajax({
                            url: queryURL,
                            method: "GET"
                          })
                            // After data comes back from the request
                            .then(function(response) {
                            
                            // TEST CODE TO THIS POINT TO SEE IF THINGS ARE WORKING BY CONSOLE LOGGING
                                //   console.log(queryURL);

                // console log to see that everything is working in the API and that we are receiving data for requested giphs 

                // create a variable to store the data from the ajax request
                var results = response.data;

                // CREATE A FOR LOOP TO CYCLE THROUGH EACH RESULT ITEM
                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");

                
                    // creating a p tag for the results.rating data to append
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    
                    var giphImage = $("<img>");
                    // grabbing the ratings data from the results and adding it as an attribute to the giphDiv
                    gifImage.attr("src", results[i].ratings);

                    // appending both the paragraph and the image tags to the gifDiv
                    gifDiv.append(p);
                    gifDiv.append(gifImage);
                    
                    // finally prepending the div with the image and the p tag to it proper div on the html page.
                    $("#giphGallery").prepend(gifDiv);


                }

                // Set the giphs default state to still,

                // create an onclick event for the giphs that will animate the giph after a click event and will return it to a still state upon a second click

                // Create the actual jquery code to create the giph 

                // Append text to the above mentioned giph and arrange for the ratings info to populate the appended <p> tag 

                // 

                };


// VAR TO COLLECT DATA FROM THE USER KEYWORD INPUT FORM.**********************************
// var userKey = $("#userkey").val().trim();






// AFTER ALL OF THE ABOVE HAS BEEN TESTED AND WORKS

// create an onclick event for the keyword submit button 
$("#keySubmit").on("click", function() {


// create a var to collect the input in the keyword input box

// create a var to take the collected user submitted data and PUSH the string into the topics array.

// If the array and for loop were set up properly before, new additiions to the array should create a new button with their keyword in it.

// Check that everything functions and syntax and indentation are proper






















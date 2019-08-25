





// CREATE A VAR WITH AN ARRAY IN IT CONTAINING A STRING WITH MY KEYWORDS.
    var topics = ["leslie neilson", "chris farley", "three stooges", 
    "flight of the conchords", "mike myers", "monty python", "jim carrey", "eddie murphy"];


        // document ready event to initiate the button rendering
                $(window).on("load", function() {

                //  var arrayButt = function() {
                // create a for loop that will cycle throught the topics array, 
                for (var i = 0; i < topics.length; i++) {
            
            
                        var btn = $("<button>");
                        var txt = $(btn).attr(topics[i]);
                        btn.addClass("btn-primary");
                        btn.addClass("btn");
                        btn.addClass("btnrender");
                        // btn.append(txt);
                        btn.text(topics[i]);
                        $("#buttonPopBox").append(btn);

                };

            })
            
// ********THIS PSUEDO CODE IS NO LONGER RELEVANT TO THE FILE****************************
// **************************************************************************************
                    // create methods that will append buttons for each of the keyword items in the array
                    // var arrayButt = function () {
                    //     $("#buttonPopBox").append("<button>");
                    //     $("arrayButt").attr(topics[i], text);
                    // };
                    // console.log(arrayButt);
                //     if (i <= topics.length) {

                //         function buttongenerator() {
                //     // $("#buttonPopBox").append("<button id="keyButton" keyword="topics[i].text"> + topics[i].text + "</button>");
                //     var buttonDiv = $("#buttonPopBox").append("<div>");
                //     var buttonApp = $("<button>");
                //     var p = $("<p>").text("topics[i]");
                //     var keywordbutt = $("buttonApp").attr("keyword:" + topics[i]);
                            
                //             buttonDiv.append(p);
                //             buttonDiv.append(buttonApp);

                //             $("#buttonPopBox").prepend(buttonDiv);
                //     }
                // }

                //     else (i > topics.length)
                //         console.log("buttons done sir");
                    

// ******************************************************************************************************************
// BUTTONS ARE GENERATING FROM THE ARRAY PROPERLY TO THIS POINT,
// FROM HERE ON ITS ALL ABOUT THE API'S, AJAX, GET, THEN CREATING THE DIVS, APPENDING THE GIPHS, ATTR THE TEXT FROM THE REQUESTED
// DATA, CREATING THE ON CLICK EVENT FOR THE DIV/GIPHS TO GO FROM STATIC TO PLAY AND THEN PLAY TO STATIC ON THE SECOND
// CLICK

    //   CREATING AN ON CLICK EVENT TO INITIATE WHEN ONE OF THE FOR LOOP GENERATED BUTTONS OR THE KEYWORD SUBMIT BUTTONS 
    // ARE CLICKED.  ONCE CLICKED IT SHOULD INITIATE THE AJAX DATA REQUEST FROM GIPHY AND THEN WE WILL CREATE AND ADD ATTRIBUTES
    // TO THE DIV/GIPHS FROM THE DATA ATTRIBUTES RETURNED FROM GIPHY.  SPECIFICALLY THE RATINGS WHICH WILL BE APPENDED IN TEXT FORM
    // ADDITIONALLY WHENEVER THERE IS A USER INPUT KEYWORD, THE KEYWORD SHOULD BE PUSHED TO THE TOPICS ARRAY AND SUBSEQUENTLY
    // A BUTTON WILL BE GENERATED TO REMAIN IN THE BUTTONS BOX.  LETS DO IT!!

        $("button").on("click", function() {

            var buttkey = $("#userkey").val().trim();
            topics.push("buttkey");
            console.log("buttkey");
            
            // console logs that I used to test the buttkey var
            // console.log(buttkey);
            // console.log("hey dickhead");

              
        //         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + this.keyword + 
        //                         "api_key=fd0KI4stOcjLEoVUBfTGMT8UUQbRZCYq&q=&limit=10&offset=0&rating=PG-13&lang=en";

        //                 $.ajax({
        //                     url: queryURL,
        //                     method: "GET"
        //                   })
                            
        //             .then(function(response) {
                            
                          
        //         var results = response.data;

        //         for (var i = 0; i < results.length; i++) {

        //             var gifDiv = $("<div>");

                
                    
        //             var p = $("<p>").text("Rating: " + results[i].rating);
                    
        //             var giphImage = $("<img>");
                 
        //             gifImage.attr("src", results[i].ratings);

                    
        //             gifDiv.append(p);
        //             gifDiv.append(gifImage);
                    

        //             $("#giphGallery").prepend(gifDiv);
        //         };
            
        //     });
        // }) 

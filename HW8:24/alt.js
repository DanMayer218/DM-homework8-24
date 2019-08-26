





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
            

                    // onclick event to call api request
                    $("button").on("click", function () {
                        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fd0KI4stOcjLEoVUBfTGMT8UUQbRZCYq&q=&limit=10&offset=0&rating=PG-13&lang=en";
                        
                        $.ajax({
                            url: queryURL,
                            method: "GET"
                          })
                    
                            // After the data from the AJAX request comes back
                            .then(function(response) {
                                console.log(response);


                    }
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

    // var genbutts = 
    // $(".btnRender").on("click", function() {

    //     var buttgens = $


    // }



    //   var keySubmit =
    //   the onclick event to initiate the collection of the users keywords to send them in the ajax request and to push the vals to the topics array
        // $("#keySubmit").on("click", function() {

        //     var userkey = $("#userkey").val().trim();
        //     topics.push(userkey);

          
            // var queryURL = "https://api.giphy.com/v1/gifs/search?" + buttkey + "api_key=fd0KI4stOcjLEoVUBfTGMT8UUQbRZCYq&q=&limit=10&offset=0&rating=PG-13&lang=en";

        // });
        // console log watching our array to verify if the collected val is being pushed to the array
            // console.log(userkey);



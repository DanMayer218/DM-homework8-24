var topics = ["leslie neilson", "chris farley", "three stooges", 
    "flight of the conchords", "mike myers", "monty python", "jim carrey", "eddie murphy"];


        // document ready event to initiate the button rendering
                $(window).on("load", function() {

                 
                // create a for loop that will cycle throught the topics array, 
                for (var i = 0; i < topics.length; i++) 
            
            
                        var btn = $("<button>");
                        var txt = $(btn).attr(topics[i]);
                        btn.addClass("btn-primary");
                        btn.addClass("btn");
                        btn.addClass("btnrender");
                        // btn.append(txt);
                        btn.text(topics[i]);
                        $("#buttonPopBox").append(btn);

                        console.log(btn);
                

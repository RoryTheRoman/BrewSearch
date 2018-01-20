$(document).ready(function() {

// vars to hold inputted city and state
var city;
var state;

  // Function handles events when search button is clicked
  $("#location-submit").on("click", function(event) {
    event.preventDefault();

    $("#breweries-row").empty();

    if ($("#city-input").val() != "" && $("#state-input").val() != "") {

      // Stores inputted location
      city = $("#city-input").val().trim().toLowerCase();
      state = $("#state-input").val().trim().toLowerCase();
      console.log(city + ", " + state);

      // Resets input fields
      $("#city-input").val("");
      $("#state-input").val("");

    }
    
    // Runs search function
    searchForBreweries();

  });

  // Search function to pull BreweryDB API based on user inputted city and state
  function searchForBreweries() {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations?locality=" + city + "&region=" + state + "&key=214453339d6bbb99f8869c9524f3a6c1";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      // console.log(response);
    
        // var to hold results array
        var results = response.data;

        // Checks for valid search parameters
        if (results.length != undefined) {

          // Look through each result from search
          for (var i = 0; i < results.length; i++) {
            console.log(results[i].brewery.website);
          
            var imageURL = results[i].brewery.images ?  results[i].brewery.images.squareMedium : "";
            console.log(i + ' ' + imageURL);
            var breweryImage = $("<img />", {
              "src": imageURL
            });
          
            var breweryName = results[i].name;
            console.log(breweryName);
            var breweryWebsite = results[i].brewery.website;
            console.log(breweryWebsite);
            var breweryAddress = results[i].streetAddress;
            console.log(breweryAddress);

            var breweryId = "brewery" + i;
            var breweryDiv = $("<div class='col-md-3 brewery' id='" + breweryId + "'>");

            if (breweryImage.src != "unknown" && breweryName != undefined && breweryAddress != undefined && breweryWebsite != undefined) {

              $("#breweries-row").append(breweryDiv);
              $(breweryDiv).append(breweryImage);
              $(breweryDiv).append("<p>" + breweryName + "</p>");
              $(breweryDiv).append("<p>" + breweryAddress + "</p>");
              $(breweryDiv).append("<p><a href='" + breweryWebsite + "' target='_blank'>" + breweryWebsite + "</a></p>");
            } 
          }
        } else {
          $("#breweries-row").append("<div=col-md-12><p>Sorry, we couldn't find a brewery based on your search. Please try another search.</p></div>")
        }
    }); 
  }   
});

// validate city name - no results if no results
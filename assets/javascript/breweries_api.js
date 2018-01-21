$(document).ready(function() {

// Variables to hold inputted city and state
var city;
var state;
var cityCap;
var stateCap;

  // Function handles events when search button is clicked
  $("#location-submit").on("click", function(event) {
    event.preventDefault();

    $("#breweries-row").empty();

    if ($("#city-input").val() != "" && $("#state-input").val() != "") {

      // Stores inputted location
      city = $("#city-input").val().trim().toLowerCase();
      state = $("#state-input").val().trim().toLowerCase();
      cityCap = $("#city-input").val().trim().toUpperCase();
      stateCap = $("#state-input").val().trim().toUpperCase();

      // Resets input fields
      $("#city-input").val("");
      $("#state-input").val("");

      // Results label
      $("#breweries-results").html("Search results for " + cityCap + ", " + stateCap);

      // Runs search function
      searchForBreweries();

    // For incomplete search inputs  
    } else {
      $("#breweries-results").empty();      
      $("#breweries-row").html("<div class=col-md-12><p>Sorry, we couldn't find any breweries based on your search. Please try another search.</p></div>");

      // Resets input fields
      $("#city-input").val("");
      $("#state-input").val("");
    }
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

      // Looks through each result from search and populates results page
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].brewery.website);
        var imageURL = results[i].brewery.images ?  results[i].brewery.images.squareMedium : "";
        console.log(i + ' ' + imageURL);
        var breweryImage = $("<img />", {
          "src": imageURL
        });
        var breweryName = results[i].brewery.name;
        console.log(breweryName);
        var breweryWebsite = results[i].brewery.website;
        console.log(breweryWebsite);
        var breweryAddress = results[i].streetAddress;
        console.log(breweryAddress);
        var breweryId = "brewery" + i;
        var breweryDiv = $("<div class='col-md-3 brewery' id='" + breweryId + "'>");

        // Only includes results with sufficient info
        if (breweryName != undefined && breweryAddress != undefined && breweryWebsite != undefined) {
          $("#breweries-row").append(breweryDiv);
          $(breweryDiv).append(breweryImage);
          $(breweryDiv).append("<p>" + breweryName + "</p>");
          $(breweryDiv).append("<p><a href='https://www.google.com/maps/search/?api=1&query=" + breweryName + "+" + breweryAddress + "+" + city + "+" + state + "' target='_blank'>" + breweryAddress + "</a></p>");
          $(breweryDiv).append("<p><a href='" + breweryWebsite + "' target='_blank'>" + breweryWebsite + "</a></p>");

        } else if (breweryDiv = undefined) {
            $("#breweries-row").append("<div class=col-md-12><p>Sorry, we couldn't find a brewery based on your search. Please try another search.</p></div>");
        }  
      } 
    }); 
  }   
});

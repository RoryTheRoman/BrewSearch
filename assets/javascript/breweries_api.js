$(document).ready(function() {

// vars to hold inputted city and state
var city;
var state;

  // Function handles events when search button is clicked
  $("#location-submit").on("click", function(event) {
    event.preventDefault();

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
      console.log(response);
    
        // var to hold results array
        var results = response.data;

        // Look through each result from search
        for (var i = 0; i < results.length; i++) {
        console.log(results);


        }
    }); 
  }   
});

// validate city name - no results if no results
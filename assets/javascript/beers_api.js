var beers = [];

function getBeerName() {
    if (beers.length === 0) {
      return;
    }

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q=" + beers + "&type=beer&key=214453339d6bbb99f8869c9524f3a6c1";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var displayName = results[i].name;
        var displayDescript = results[i].description;
        var displayStyle = results[i].style.shortName;
        var displayABV = results[i].abv;

        if (displayName != undefined && displayDescript != undefined && displayStyle != undefined && displayABV != undefined) {

          $("#beerTable > tbody").append([
            "<tr>",
              "<td>", displayName, "</td>",
              "<td>", displayDescript, "</td>",
              "<td>", displayStyle, "</td>",
              "<td>", displayABV, "</td>",
            "</tr>"].join(""));
        };
      };
    });
  };
  
  $("#add-beer").on("click", function(event) {

    event.preventDefault();

    var beer = $("#beer-input").val().trim();
    if (beer.length > 0) {
      beers.push(beer);
    }

    $("#beer-input").val("");
  });

  $("#reset").on("click", function() {
    beers = [];
    $("#beerTable > tbody").empty();
  });

 $(document).on("click", "#add-beer", getBeerName);
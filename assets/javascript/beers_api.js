var beers = [];

        function getBeerName() {
          
          var queryURL = "https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q=" + beers + "&type=beer&key=214453339d6bbb99f8869c9524f3a6c1";

        $.ajax({
          url: queryURL,
          method: 'GET'
          }).done(function(response) {
          // console.log(response);

          var results = response.data;
          for (var i = 0; i < results.length; i++) {
          

            var displayName = results[i].name;
            var displayDescript = results[i].description;
            var displayStyle = results[i].style.shortName;
            var displayABV = results[i].abv;
            

             $("#beerTable > tbody").append("<tr><td>" + displayName + "</td><td>" + displayDescript + "</td><td>" +
          displayStyle + "</td><td>" + displayABV + "</td></tr>")
          };

          $("reset").on("click", function() {
            $("beerTable").empty();
          });

        });

  };

  $("#add-beer").on("click", function(event) {
      event.preventDefault();

      var beer = $("#beer-input").val().trim();
     

      beers.push(beer);

      $("#beer-input").val("");

    });
  
 $(document).on("click", "#add-beer", getBeerName);
 $(document).on("click", "#reset", getBeerName);


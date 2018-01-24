// Initialize Firebase
var config = {
apiKey: "AIzaSyDM1M46U77itExVvLvblUe8yoLarTUWEB4",
authDomain: "brewsearch-e39d2.firebaseapp.com",
databaseURL: "https://brewsearch-e39d2.firebaseio.com",
projectId: "brewsearch-e39d2",
storageBucket: "brewsearch-e39d2.appspot.com",
messagingSenderId: "129297965351"
};
firebase.initializeApp(config);

// Variable to reference database
var database = firebase.database();

$("#submit-button").on("click", function() {
	event.preventDefault();

	var name = $("#name-input").val().trim();
	var email = $("#email-input").val().trim();
    var message = $("#message-input").val().trim();

    database.ref().push({
         name: name,
         email: email,
         message: message
    });

	$("#name-input").val("");
	$("#email-input").val("");
	$("#message-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().message);

// Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

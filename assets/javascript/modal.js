//disables clicking outside of modal to remove it:
//this must remain outside of document.ready 
$('#ageModal').modal({
    backdrop: 'static',
    keyboard: false
});

$(document).ready(function(){
	// $("#ageModal").modal('show');
	$("#ageSubmitButton").on("click", function(){
		var userDate = $("#ageInput").val();
		console.log("userDate" + userDate);				
		var randomFormat = "YYYY/MM/DD";
	    var convertedDate = moment(userDate, randomFormat);
	    console.log("conv" + convertedDate);
    // console.log(moment(convertedDate).toNow());
    	var compareDate = moment(convertedDate).diff(moment(), "years");
 		var diffDate = (compareDate * -1);
 		console.log("compare" + diffDate);
 		if (diffDate >= 21) {
 			// $("#mainpageIDHere").show();
 			$("#ageModal").modal("hide");
 		}else {
 			window.location.replace("http://berghoffbeer.com/sodas/");
 		}

	});







});//closes document.ready function

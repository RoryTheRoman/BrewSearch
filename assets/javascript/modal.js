//disables clicking outside of modal to remove it:
//this must remain outside of document.ready 

$(document).ready(function(){
	$('#ageModal').modal({
    backdrop: 'static',
    keyboard: false,
	});
	// if (cookieValue !== 0)	{
	// 		$("#ageModal").modal("hide")
	// 	}else{
	// 		$("#ageModal").modal("show");

	// 	}

			$("#ageModal").modal("show");
	
	$("#ageSubmitButton").on("click", function(){
		var userDate = $("#ageInput").val();
		var randomFormat = "YYYY/MM/DD";
	    var convertedDate = moment(userDate, randomFormat);
    	var compareDate = moment(convertedDate).diff(moment(), "years");
 		var diffDate = (compareDate * -1);
 		if (diffDate >= 21) {
 			var verified = Cookies.set("verified",1);
 			console.log(verified);
 			$(".modal-open").removeClass("modal-open");
 			$("#ageModal, .modal-backdrop").modal("hide").remove();
 		}else { 
  			$(".modal-body").html("<div id='modalRedir'>Enjoy a soda-pop instead, kiddo!");
			setTimeout(function(){ 			
 			window.location.replace("http://berghoffbeer.com/sodas/");		
			}, 2000);
			var cookieValue = Cookies.get("verified");
		
 		}
		});

			// if (verified === 1){
			// 	$("#ageModal").modal("hide");
			// }else {
			// 	$("#ageModal").modal("show");
			// }







});//closes document.ready function


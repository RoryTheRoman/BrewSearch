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

	// 	} from https://github.com/js-cookie/js-cookie

    // function readCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(";");

    //   return null;
    // } this is from the homework	

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
 		}
		});

			// if (verified == null){
			// 	$("#ageModal").modal("show");
			// }else {
			// 	$("#ageModal").modal("hide");
			// }

    if ($.cookie('verified') == null) {
        $.cookie('verified', 'yes',);
        $('#ageModal').modal("show");
       } 

// $("#modal").remove();
// $('.modal-backdrop').remove(); this is the one i was trying to avoid having cookies altogether.



});//closes document.ready function


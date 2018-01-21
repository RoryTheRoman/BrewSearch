//disables clicking outside of modal to remove it:
//this must remain outside of document.ready 
$('#ageModal').modal({
    backdrop: 'static',
    keyboard: false
});

$(document).ready(function(){


	$("#ageModal").modal('show');		
	$("#ageSubmitButton").on("click", function(){
		var userDate = $("#ageInput").val();
		var randomFormat = "YYYY/MM/DD";
	    var convertedDate = moment(userDate, randomFormat);
    	var compareDate = moment(convertedDate).diff(moment(), "years");
 		var diffDate = (compareDate * -1);
 		if (diffDate >= 21) {
 			$(".modal-open").removeClass("modal-open");
 			$("#ageModal, .modal-backdrop").modal("hide").remove();
 		}else { 
  			$(".modal-body").html("<div id='modalRedir'>Enjoy a soda instead, kiddo!");
			setTimeout(function(){ 			
 			window.location.replace("http://berghoffbeer.com/sodas/");		
			}, 2000);
 		}
		});








});//closes document.ready function


//disables clicking outside of modal to remove it:
//this must remain outside of document.ready 

$(document).ready(function(){
	$('#ageModal').modal({
    backdrop: 'static',
    keyboard: false,
	});
	
	function hideModal(){
	 	$(".modal-open").removeClass("modal-open");
		$("#ageModal").addClass("hide");
		$("#ageModal, .modal-backdrop").modal("hide").remove();
	}
	function showModal(){
		$("#ageModal").removeClass("hide");
		$("#ageModal").modal("show");

	}
	if (localStorage.getItem('verified')  || localStorage.getItem('verified') === "true") {
		hideModal();
	}		

    if (!localStorage.getItem('verified') || localStorage.getItem('verified') === "false") {
    	showModal();
   	}
	$("#ageSubmitButton").on("click", function(){
		var userDate = $("#ageInput").val();
		var randomFormat = "YYYY/MM/DD";
	    var convertedDate = moment(userDate, randomFormat);
    	var compareDate = moment(convertedDate).diff(moment(), "years");
 		var diffDate = (compareDate * -1);
 		if (diffDate >= 21) {
 			hideModal();
 			localStorage.setItem('verified', true);
 		}else { 
 			localStorage.setItem('verified', false);
  			$(".modal-body").html("<div id='modalRedir'>Enjoy a soda-pop instead, kiddo!");
			setTimeout(function(){ 			
 			window.location.replace("http://berghoffbeer.com/sodas/");		
			}, 2000);		
 		}
		});





});//closes document.ready function


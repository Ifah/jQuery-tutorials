$(document).ready(function(){
	//$('#image').fadeIn();
	//$('#image').fadeIn('slow');
	//$('#image').fadeIn();
	//$('#image').fadeIn(10000);
	
	//$('#image').fadeIn('slow', 'linear', function(){
	//	$('#image_feedback').html('Effect Complete.');
	//});

	$('#image').fadeIn(2, 'linear', function(){
		$('#image_feedback').html('Effect Complete.');
	});
});
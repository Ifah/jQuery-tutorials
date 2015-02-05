$('#inout').click(function(){
	//$('#image').fadeToggle();
	//$('#image').fadeToggle('slow');
	//$('#image').fadeToggle(5000);//5 seconds
	//$('#image').fadeToggle(5000, 'linear');
	$('#image').fadeToggle(5000, 'linear', function(){
		alert('Animation complete');
	});
});
$('#show').click(function(){
	$('#image').fadeIn(3000, function(){
		$('#image_feedback').html('Image has been shown.');
	});
});

$('#hide').click(function(){
	$('#image').fadeOut(3000, function(){
		$('#image_feedback').html('Image has been hidden.');
	});
});
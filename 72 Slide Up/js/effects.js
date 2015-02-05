$(document).ready(function(){
	var speed = 300;
	$('#top_message').slideDown(speed);

	$('#hide_message').click(function(){
		$('#top_message').slideUp(speed);
	})
});
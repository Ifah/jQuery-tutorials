$(document).ready(function(){
	setInterval(function(){
		var timestamp = jQuery.now();
		$('#time').text(timestamp);
	}, 1);
});

//can be useful 
//eg check how long an animation takes to complete
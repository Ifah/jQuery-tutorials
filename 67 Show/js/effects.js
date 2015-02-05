$(document).ready(function(){
	$('#a_div').hide();
});

$('#a_button').click(function(){
	//$('#a_div').show('slow');
	//$('#a_div').show('fast');
	//$('#a_div').show(1000);
	//$('#a_div').show(5000);
	//$('#a_div').show('slow', 'linear');
	$('#a_div').show('slow', 'linear', function(){
		alert('Element shown');
		//can add this user preference to db or session
		//so when user visits again the preference is remembered.
	});
});
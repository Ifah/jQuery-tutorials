$('#a_button').click(function(){
	//$('#a_div').hide('slow');
	//$('#a_div').hide('fast');
	//$('#a_div').hide(1000);
	//$('#a_div').hide(5000);
	//$('#a_div').hide('slow', 'linear');
	$('#a_div').hide('slow', 'linear', function(){
		alert('Element hidden');
		//can add this user preference to db or session
		//so when user visits again the preference is remembered.
	});
});
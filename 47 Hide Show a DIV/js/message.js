//below is the code given in tutorial. its not working. link disappears after page load
//$('#hideshow').toggle(function(){
//	$('#hideshow').text('Show');
//	$('#message').hide();
//}, function(){
//	$('#hideshow').text('Hide');
//	$('#message').show();
//});

$('#hideshow').click(function(){
	var txt = $('#hideshow').text();
	if(txt == "Hide"){
		$('#hideshow').text('Show');
	}else if(txt == "Show"){
		$('#hideshow').text('Hide');
	}
	$('#message').toggle();
});
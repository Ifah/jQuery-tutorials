$(':button').click(function(){
	alert('Hello');
});
$(':submit').click(function(){
	$(':submit').attr('value', 'Please wait...')
});

//$(':submit').click(function(){
//	$(this).attr('value', 'Please wait...')
//});
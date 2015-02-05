//images dont slide with slideToggle. they fade in and out
//so use the slideToggle on the <p></p>
$('#toggle').click(function(){
	$('#image').slideToggle();
	//$('#image').slideToggle('slow');
	//$('#image').slideToggle(5000);//5 seconds
	//$('#image').slideToggle(5000, 'linear');
	//$('#image').slideToggle(5000, 'linear', function(){
		//alert('Animation complete');
	//});
});
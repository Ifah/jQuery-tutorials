$('#name').keyup(function(){
	var text = $('#text').html();
	var name = $('#name').val();
	$('#area').text(name);
});


//$('#name').keyup(function(){
//	var text = $('#text').html();
//	var name = $('#name').val().length;
//	$('#area').text(name);
//});

//$('#button').click(function(){
//	var text = $('#text').html();
//	var name = $('#name').val();
//	$('#area').text(name);
//});
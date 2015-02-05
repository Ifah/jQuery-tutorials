$('#button').click(function(){
	//$('#area').append('1 ');
	$('.para').append('1 ');
});

$('#button2').click(function(){	
	var name = $('#name').val();
	$('#sentence').append(name);
});

//can be useful when creating a calculator
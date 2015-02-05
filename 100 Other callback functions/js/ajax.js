$('#button').click(function(){
	var name = $('#name').val();
	var string = $('#string').val();

	$.post('php/reverse.php', { string: string, name: name }, function(data){
		$('#feedback').html(data);
	}).error(function(){
		$('#msgs').append('An error occured ');
	}).complete(function(){
		$('#msgs').append('Request Complete ');
	}).success(function(){
		$('#msgs').append('Request Successful ');
	});
});


//useful to log error
//example twitter, when loading takes too long, msg displayed loading error
//success, error, complete
//complete will always happen
//success is only when successful

//code from previous example
//$('#button').click(function(){
//	var name = $('#name').val();
//	var string = $('#string').val();
//
//	$.post('php/reverse.php', { string: string, name: name }, function(data){
//		$('#feedback').html(data);
//	});
//});
$('#button').click(function(){
	var string = $('#string').val();

	$.post('php/reverse.php', { input: string }, function(data){
		$('#feedback').text(data);
	});
});
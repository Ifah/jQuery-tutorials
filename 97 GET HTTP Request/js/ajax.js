$('#button').click(function(){
	var string = $('#string').val();

	$.get('php/reverse.php', { input: string }, function(data){
		$('#feedback').text(data);
	});
});
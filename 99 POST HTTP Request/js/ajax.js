$('#button').click(function(){
	var name = $('#name').val();
	var string = $('#string').val();

	$.post('php/reverse.php', { string: string, name: name }, function(data){
		$('#feedback').html(data);
	});
});
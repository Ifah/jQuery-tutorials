$('#save_button').click(function(){
	//grab values
	var name = $('#name').val();
	var email = $('#email').val();

	//show loading text
	$('#save_status').text('Loading...');

	//perform http request
	$.post('php/settings.php', { name: name, email: email }, function(data){
		$('#save_status').text(data);
	});
});
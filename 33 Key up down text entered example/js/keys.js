//$('#user_text').keydown(function(){
//	var user_text = $('#user_text').val();
//	$('#user_text_feedback').html(user_text);
//});

$('#user_text').keyup(function(){
	var user_text = $('#user_text').val();
	$('#user_text_feedback').html(user_text);
});
//$('#user_text').keydown(function(){
//	var user_text = $('#user_text').val();
//	$('#user_text_feedback').html(user_text);
//});

$('#list').change(function(){
	var list_value = $('#list').val();
	$('#list_feedback').html('You have selected: ' + list_value);
});
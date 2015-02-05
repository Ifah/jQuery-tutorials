$('#signup_form').submit(function(){
	var user_email = $('#user_email').val();
	$('#signup_feedback').html('Thanks, ' + user_email + ' has been signed up.');
	//to store this email address in database, 
	//write code
	//example ajax request to post this to php page which would in turn
	//insert into database or return error
});
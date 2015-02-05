$(document).ready(function(){
	var email_default = 'Enter your email address...';

	$('input[type="email"]').attr('value', email_default).focus(function(){
		if($(this).val() == email_default){
			$(this).attr('value', '');
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).attr('value', email_default);
		}
	});
});
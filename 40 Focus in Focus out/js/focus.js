$('#name').focusin(function() {
	$('#name_span').html('Enter your full name');
});
$('#age').focusin(function() {
	$('#age_span').html('Enter your current age');
});
$('#age').focusout(function() {
	$('#age_span').html('');
});
$('#name').focusout(function() {
	$('#name_span').html('');
});
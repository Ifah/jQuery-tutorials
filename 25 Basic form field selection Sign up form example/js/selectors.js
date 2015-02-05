$(':text').focusin(function(){
	$(this).css('background-color', 'yellow');
});

$(':text').blur(function(){
	$(this).css('background-color', '#fff');
});

$(':button').click(function(){
	$(this).attr('value', 'Please wait...');
	$(this).attr('disabled', true);
});
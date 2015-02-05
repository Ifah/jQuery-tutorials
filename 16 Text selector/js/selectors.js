$(':text').focusin(function(){
	$(this).css('background-color', 'yellow');
});
$(':text').focusout(function(){
	$(this).css('background-color', 'white');
});

//doesnt work on textarea or button
//for textarea or button use the following
$(':input').focusin(function(){
	$(this).css('background-color', 'yellow');
});
$(':input').focusout(function(){
	$(this).css('background-color', 'white');
});
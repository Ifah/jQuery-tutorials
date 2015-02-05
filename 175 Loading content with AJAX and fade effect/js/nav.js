$(document).ready(function(){
	//$('#content_area').load($('.menu_top:first').attr('href'));
	$('#content_area').load($('.menu_top:last').attr('href'));
});

$('.menu_top').click(function(){
	var href = $(this).attr('href');
	$('#content_area').hide().load(href).fadeIn('normal');
	return false;
});
$(document).ready(function() {
	//names item
	//$('.names li:first').append(' (First)');
	//$('.names li:last').append(' (Last)');


	$('.names').find('li').first().append(' (First)');
	$('.names').find('li').last().append(' (Last)');
	$('.names').find('li').first().next().append(' (Second)');

	//menu item click
	//$('.menu').find('li').first().addClass('bold').click(function(){
	//	$(this).nextAll().toggle();
	//}).nextAll().hide();

	//menu item - hover
	$('.menu').find('li').first().addClass('bold').hover(function(){
		$(this).nextAll().show();
	}).nextAll().hide();

});
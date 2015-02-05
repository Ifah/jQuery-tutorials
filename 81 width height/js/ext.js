$(document).ready(function(){
	//var div_height = $('#div').css('height');
	//var div_width = $('#div').css('width');

	//var div_height = parseInt($('#div').css('height'));
	//var div_width = parseInt($('#div').css('width'));

	var div_height = $('#div').height();
	var div_width = $('#div').width();
	$('#div').text('Width: ' + div_width + ' / Height: ' + div_height);
})
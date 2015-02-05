$(document).ready(function(){
	$('.fadeto').css('opacity', '0.4');
	$('.fadeto').mouseover(function(){
		$(this).fadeTo(500, 1);
		$('.fadeto').not(this).fadeTo(100, 0.4);
	});
});





//$(document).ready(function(){
//	$('.fadeto').click(function(){
//		$(this).fadeTo(100, 0.4, function(){
//			alert('Animation Complete');
//		});
//	});
//});
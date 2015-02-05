$(document).ready(function(){
	$('#countdown').countdown({ from: 10 }, function(){
		alert('Done!');
	});
});
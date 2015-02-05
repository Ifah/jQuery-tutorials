$(document).ready(function(){
	$('#countdown').countdown({ date: '18 November 2014 13:36:9' }, function(){
		$('#countdown').text('We\'re live!');
	});
});
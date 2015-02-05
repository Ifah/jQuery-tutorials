$('#sometext').click(function(){
	$('#sometext').toggleClass('highlight bold');
});

$('#input').focus(function(){
	$('#input').toggleClass('highlight');
});

//can be used in form validation when user supplies wrong input
//can take unlimited number of classes and add them or remove them
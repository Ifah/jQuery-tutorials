$(document).ready(function(){
	$('#textarea').scroll(function(){
		var scroll_top = $(this).scrollTop();
		$('#feedback').text('Currently at position: ' + scroll_top);
	});
});


//can be useful in case of feeds like twitter or facebook.
//when you reach to the bottom of the feed, load more feeds

//also to enable a checkbox in terms and condtion / agreement
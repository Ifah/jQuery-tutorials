$('#some_text').scroll(function() {
	var scroll_pos = $('#some_text').scrollTop();
	$('#menu_feedback').html('You have scrolled, and are at position ' + scroll_pos);

	//can be useful in agreements where user has to scroll down and then click i agree
});

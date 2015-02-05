$(document).ready(function(){
	$('#search_button').click(function(){
		var search_text = $('#search_term').val();
		$('body').removeHighlight().highlight(search_text);
	})
})
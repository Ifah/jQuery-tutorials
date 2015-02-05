$('#button').click(function(){
	$.ajax({
		url: 'page.html',
		success: function(data) {
			$('#content').html(data);
		}
	});
});

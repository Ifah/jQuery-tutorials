$('#button').click(function(){
	$.ajax({
		//url: 'page.html',
		url: 'page1.html',
		statusCode: {
			404: function(){
				$('#content').html('Page not found.');
			}
		},
		success: function(data) {
			$('#content').html(data);
		}
	});
});

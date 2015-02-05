$('#button').click(function(){
	var name = $('#name').val();

	$.ajax({
		url: 'php/page.php',
		data: 'name='+name,
		success: function(data) {
			$('#content').html(data);
		}
	}).error(function(){
		alert('An error has occured');
	}).success(function(){
		alert('Request successful');
	}).complete(function(){
		alert('Request completed');
	});
});

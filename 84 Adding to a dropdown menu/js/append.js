$('.link').click(function(){
	var item = $(this).text();
	$('#list').append('<option>' + item + '</option>');
});


//above code adds item as many times it is clicked. so check if item alreay in list
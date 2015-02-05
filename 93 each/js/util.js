$(document).ready(function(){
	function display_array(){
		$('#names').text('');

		$.each(names, function(index, value){
			$('#names').append(value + '<br />');
		});
	}

	var names = ['Alex','Billy','Dale','Garret'];
	display_array();

	 $('#insert').click(function(){
		var name = $('#name').val();
		names.push(name);
		display_array();
	});
});


//above code does not check for white spaces
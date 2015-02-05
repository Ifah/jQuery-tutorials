//$(document).ready(function() {
//	$('#combine').click(function() {
//		var combined_text = '';
//
//		$('input[type="text"]').each(function() {
//			combined_text += $(this).val() + ' ';
//		});
//		$('#combined').text(combined_text);
//	});
//});

//another example
$(document).ready(function() {
	$('#combine').click(function() {
		var flag = false;

		$('input[type="text"]').each(function() {
			if($(this).val() == ''){
				flag = true;
			}
		});

		if(flag == true){
			alert('Fill out all fields.');
		} else if(flag == false){
			alert('Thanks for filling out all the fields.');
		}
	});
});
//above code does not check fo white spaces!!
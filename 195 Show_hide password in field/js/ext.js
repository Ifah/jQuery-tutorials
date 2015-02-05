$(document).ready(function(){
	$('input[type="password"]').after('<input type="checkbox" class="sp_checkbox" /> Show password');
	
	$('.sp_checkbox').change(function() {
		var previous = $(this).prev();

		var value = previous.val();
		var type = previous.attr('type');

		var name = previous.attr('name');
		var id = previous.attr('id');
		var class1 = previous.attr('class');
		var maxl = previous.attr('maxlength');

		var new_type = (type == 'password') ? 'text' : 'password';

		previous.remove();
		$(this).before('<input type="' + new_type + '" value="' + value + '" name="' + name + '" id="' + id + '" class="' + class1 + '" maxlength="' + maxl + '" />');
	});
});
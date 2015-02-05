$(document).ready(function() {
	$('.file').live({
		change: function() {
			$(this).after('<input class="file" type="file" />');
		}
	})
});
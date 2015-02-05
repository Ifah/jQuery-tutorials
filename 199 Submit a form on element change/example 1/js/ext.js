$(document).ready(function(){
	$('input[type="file"]').change(function(){
		$(this).parent().submit();
	});
});
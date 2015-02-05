$(document).ready(function(){
	$('#options').change(function(){
		val = $(this).attr('value');
		if(val !== 'default'){
			$(this).parent().submit();
		}
	});
});
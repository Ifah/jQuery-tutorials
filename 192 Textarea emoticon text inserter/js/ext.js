$(document).ready(function(){
	$('.emoticon').click(function(){
		var textarea_val = jQuery.trim($('#comment').val());
		var emoticon_val = $(this).attr('value');

		if(textarea_val == ''){
			var sp = '';
		}else{
			var sp = ' ';
		}

		$('#comment').focus().val(jQuery.trim(textarea_val + sp + emoticon_val + sp));
	});
});
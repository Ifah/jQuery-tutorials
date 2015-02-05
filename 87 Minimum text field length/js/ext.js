$(document).ready(function(){
	$('input[type="text"]').focus(function(){
		this_sel = $(this);
		minlength = this_sel.attr('minlength');

		if(minlength !=0 && minlength > 0 && this_sel.val().length < minlength){
			this_sel.after('<span>' + minlength + ' characters required.</span>');
		}
	}).keyup(function(){
		if(this_sel.val().length >= minlength){
			this_sel.next().remove();
		}else if(this_sel.val().length < minlength){
			this_sel.next().remove();
			this_sel.after('<span>' + minlength + ' characters required.</span>');
		}
	}).blur(function(){
		this_sel.next().remove();
	});
});

//above code does not check if user has entered white spaces
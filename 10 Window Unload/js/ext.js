$(window).unload(function(){
	//alert('Youre leaving this page');
	//do something when the user leaves
	var c = confirm('Are you sure you want to leave?');
	if(c){
		return true;
	}else{
		false;
	}
	// can be used in chat, to indicate user has left
});
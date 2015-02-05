$('#upload').click(function(){
	//$('#pb').progressbar({ });
	var val = 0;
	var interval = setInterval(function(){
		val = val + 1;
		$('#pb').progressbar({ value: val });
		$('#percent').text(val + '%');
		if(val == 100){
			clearInterval(interval);
		}
	}, 50);
});
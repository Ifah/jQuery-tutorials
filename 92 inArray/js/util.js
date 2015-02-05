$(document).ready(function(){
	var names = ['Alex','Billy','Dale','Garret'];
	
	$('#check').click(function(){
		var name = $('#name').val();
		if(jQuery.inArray(name, names) != '-1'){
			alert(name + ' Found in the array.');
		}else{
			alert(name + ' is NOT in the array.');
		}
	});
});

//above code does not check for white spaces



//$(document).ready(function(){
//	var names = ['Alex','Billy','Dale','Garret'];
//	if(jQuery.inArray('Dale', names) != '-1'){
//		alert('Found');
//	}
//});
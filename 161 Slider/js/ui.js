var min_value = 1;
var max_value = 100;


$('#slider').slider({ 

min: min_value,
max: max_value,
orientation: 'vertical',

slide: function(event, ui){
	$('#slider_value').html(ui.value);
},
stop: function(event, ui){
	alert(ui.value);
}

});
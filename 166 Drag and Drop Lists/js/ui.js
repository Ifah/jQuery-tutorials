$(document).ready(function(){
	array_list = [];
	$('li').draggable({ containment: 'document', revert: true,
	start: function(){
		contents = $(this).text();
	}
	});

	$('#list').droppable({ hoverClass: 'border', accept: '.item',
	drop: function(){
		if(jQuery.inArray(contents, array_list) != '-1'){
			alert(contents + ' already in the list.');
		}else{
			$('#list').append(contents + '<br/>');
			array_list.push(contents);
		}
	}
	});
});
$(document).ready(function(){
	//$('#drag').draggable();
	//options
	//$('#drag').draggable({ axis: 'x' });
	//$('#drag').draggable({ axis: 'y' });
	//$('#drag').draggable({ containment: 'document' });
	//$('#drag').draggable({ containment: 'window' });
	//$('#drag').draggable({ containment: 'parent' }); //within the bounds of an element like div
	//$('#drag').draggable({ containment: [0, 0, 200, 200] });//starting and ending area
	//$('#drag').draggable({ cursor: 'crosshair' });//
	//$('#drag').draggable({ cursor: 'pointer' });
	//$('#drag').draggable({ cursor: 'crosshair', opacity: 0.60 });//opacity when dropping
	//$('#drag').draggable({ cursor: 'crosshair', opacity: 0.60, grid: [20,20] });//snap to grid
	//$('#drag').draggable({ cursor: 'crosshair', opacity: 0.60, revert: true }); //revert returns element to its original position
	//$('#drag').draggable({ cursor: 'crosshair', opacity: 0.60, revert: true, revertDuration: 10000 });
	

	$('.name, .place').draggable({ containment: 'document', opacity: 0.60, revert: true });

	//$('#drop').droppable({ hoverClass: 'border', tolerance: 'fit' });
	//$('#drop').droppable({ hoverClass: 'border', tolerance: 'intersect' });//intersect = 50% inside
	//$('#drop').droppable({ hoverClass: 'border', tolerance: 'pointer' });//pointer = when mouse pointer inside 
	//$('#drop').droppable({ hoverClass: 'border', tolerance: 'touch' });//touch = when the element being dragged touches by any amount
	$('#drop').droppable({ hoverClass: 'border', tolerance: 'pointer', accept: '.name',
	over: function(){
		$('#drop').text('Something has hovered over me');
	}, out: function(){
		$('#drop').text('Something has been dragged out');
	}, drop: function(){
		$('#drop').text('Something has dropped');
	}

});


});
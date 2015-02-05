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
	

	$('#drag').draggable({ cursor: 'crosshair', opacity: 0.60, revert: true, 
		start:function(){
		$('#event').text('Dragging started.');
	}, drag: function(){
		$('#event').text('Dragging...');
	}, stop: function(){
		$('#event').text('Dragging stopped');
	} });



});
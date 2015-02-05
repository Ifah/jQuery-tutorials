$(document).ready(function(){
	//$('#box').resizable({ containment: 'parent', });
	//$('#box').resizable({ animate: true, ghost: true });
	//$('#box').resizable({ animate: true, animateDuration: 'slow', ghost: true });
	//$('#box').resizable({ animate: true, animateDuration: 3000, animateEasing: 'linear', ghost: true });
	//$('#box').resizable({ animate: true, ghost: true, aspectRatio: true });
	//$('#box').resizable({ animate: true, ghost: true, aspectRatio: 0.40 });
	//$('#box').resizable({ animate: true, ghost: true, aspectRatio: 9/10 });
	//$('#box').resizable({ animate: true, ghost: true, autoHide: true });
	//$('#box').resizable({ grid: [50,50] });
	//$('#box').resizable({ handles: 'e, se' });
	//$('#box').resizable({ handles: 'n, e, s, w' });
	//$('#box').resizable({ handles: 'all' });
	$('#box').resizable({ maxHeight: 200, minHeight: 100, maxWidth:200, minWidth: 100 });
});
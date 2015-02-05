$(document).ready(function(){
	$('#names, #numbers').sortable({ containment: 'document', tolerance: 'pointer', cursor: 'pointer', revert: true,
							opacity: 0.60, connectWith: '#names, #numbers',
							update: function(){
								content = $(this).text();
								$('#sort_status').text(content);
							} });
});
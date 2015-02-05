$('#save').click(function(){
	$('#dialog').attr('title', 'Saved').text('Settings were saved').dialog({ buttons:{ 'Ok': function(){
		$(this).dialog('close');
	} }, closeOnEscape: true, draggable: false, resizable: false, modal: true,
	 });
});
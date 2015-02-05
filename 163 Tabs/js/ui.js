
// $('#tabs').tabs({
// 	ajaxOptions: { 
// 		error: function(xhr, index, status, anchor)
// 		{
// 			$(anchor.hash).text('Could not load page')
// 		}
// 	}, event: 'mouseover' });
//------------------------------------------------------------

// $('#tabs').tabs({
// 	ajaxOptions: { 
// 		error: function(xhr, index, status, anchor)
// 		{
// 			$(anchor.hash).text('Could not load page')
// 		}
// 	}, collapsible: true });
//-------------------------------------------------------------

// $('#tabs').tabs({
// 	ajaxOptions: { 
// 		error: function(xhr, index, status, anchor)
// 		{
// 			$(anchor.hash).text('Could not load page')
// 		}
// 	} }).find('.ui-tabs-nav').sortable({ axis: 'x' });
//----------------------------------------------------------------

$('#tabs').tabs({
	ajaxOptions: { 
		error: function(xhr, index, status, anchor)
		{
			$(anchor.hash).text('Could not load page')
		}
	}, cookie: { expires: 2 } });
//cookie save the last tab you were on when browser closed or page refreshed and open that tab
//when you come back again
//for cookies to work you need the following file
//development-bundle/external/jquery.cookie.js
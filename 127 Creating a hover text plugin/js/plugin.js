(function($){
	$.fn.hoverText = function(fade){
		$(this).after('<div id="hoverText"></div>');

		$(this).mouseover(function(){
			title = $(this).attr('title');
			$(this).attr('title', '');
		}).mousemove(function(e){
			var top = e.clientY + 10;
			var left = e.clientX + 10;

			$('#hoverText').css('top', top).css('left', left).text(title);

			if(fade == true){
				$('#hoverText').fadeIn('fast');
			} else if(fade == false || fade == undefined){
				$('#hoverText').show();
			}
		}).mouseout(function(){
			$(this).attr('title', title);
			$('#hoverText').hide();
		});
	}
}) (jQuery);
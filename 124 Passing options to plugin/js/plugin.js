(function($){
	$.fn.highlight = function(options){
		var settings = { 
			'color': null,
			'foreground': null
		};

		if(options){ $.extend(settings, options); }

		this.css('background-color', settings['color']).css('color', settings['foreground']);
	}
}) (jQuery);
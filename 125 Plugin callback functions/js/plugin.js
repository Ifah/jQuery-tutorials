(function($){
	$.fn.countdown = function(options, callback){
		this_selected = this;

		var settings = { 'from': 60 };
		if(options){ $.extend(settings, options) }

		current = settings['from'];

		function countdown_exec(){
			if(current == 0){
				clearInterval(interval);
				callback.call(this);
			}
			
			this_selected.text(current);
			current = current - 1;
		}

		interval = setInterval(countdown_exec, 1000);
	}
}) (jQuery);
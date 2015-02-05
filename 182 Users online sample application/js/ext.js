$(document).ready(function(){
	var user_name = prompt('Please enter your name');
	$.post('php/users.php', { user_name: user_name, action: 'joined' });


	setInterval(function(){
		$.post('php/users.php', {action: 'list'}, function(data){
			$('#users_online').html(data);
		});
	},  500);

	$(window).unload(function(){
		$.post('php/users.php', { user_name: user_name, action: 'left' });
	});
}); 
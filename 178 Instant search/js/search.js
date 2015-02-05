$('#search').keyup(function(){
	var search_term = $(this).val();


	if(search_term != ''){
		$.post('php/search.php', { search_term: search_term }, function(data){
			$('#search_results').html(data);
		});
	}else{
		$('#search_results').html('');
	}
});
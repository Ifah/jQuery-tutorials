<?php
require 'db.php';

if(isset($_POST['search_term']) && !empty($_POST['search_term'])){
	$search_term = mysqli_real_escape_string($mysql_connect, htmlentities($_POST['search_term']));
	$result = mysqli_query($mysql_connect, "SELECT place, description FROM places WHERE place LIKE '%$search_term%'");
	$result_count = mysqli_num_rows($result);

	$suffix = ($result_count != 1) ? 's' : '';
	echo '<p>Your search for <strong>', $search_term, '</strong> returned <strong>', $result_count, '</strong> result', $suffix, '</p>';

	while($results_row = mysqli_fetch_assoc($result)){
		echo '<p><strong><a href="#">', $results_row['place'], '</a></strong><br/>', $results_row['description'], '</p>';
		
	}
}

?>
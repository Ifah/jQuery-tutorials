<?php
require 'db.php';

if(isset($_POST['username']) && !empty($_POST['username'])){
	$username = mysqli_real_escape_string($mysql_connect, $_POST['username']);
	$result = mysqli_query($mysql_connect, "SELECT user_id FROM users WHERE name='$username'");
	if(mysqli_num_rows($result)==0){
		echo 'Username available!';
	}else if(mysqli_num_rows($result)==1){
		echo 'Sorry, that username is already taken.';
	}
}

?>
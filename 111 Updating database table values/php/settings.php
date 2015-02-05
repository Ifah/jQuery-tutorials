<?php
require 'connect.inc.php';
include 'init.php';

if(isset($_POST['name'], $_POST['email']) && !empty($_POST['name']) && !empty($_POST['email'])){
	$name = mysqli_real_escape_string($mysql_connect, htmlentities($_POST['name']));
	$email = mysqli_real_escape_string($mysql_connect, htmlentities($_POST['email']));
	$query = "UPDATE users SET name = '$name', email = '$email' WHERE user_id = ".$_SESSION['user_id']."";
		if($query_run = mysqli_query($mysql_connect, $query))
		{
			echo 'Settings have been updated.';
		}
		else
		{
			echo 'There was an error updating your settings.';
		}
}
else{
	echo 'Please fill in all fields.';
}
?>
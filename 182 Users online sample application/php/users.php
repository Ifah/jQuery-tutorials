<?php
require 'db.php';

function user_joined($user_name){
	global $mysql_connect;
	$user_name = mysqli_real_escape_string($mysql_connect, htmlentities($user_name));
	$result = mysqli_query($mysql_connect, "INSERT INTO users1 (user_name) VALUES ('$user_name')");
}

function user_left($user_name){
	global $mysql_connect;
	$user_name = mysqli_real_escape_string($mysql_connect, $user_name);
	$result2 = mysqli_query($mysql_connect, "DELETE FROM users1 WHERE user_name='$user_name' ");
}

function user_list(){
	global $mysql_connect;
	$user_list = array();
	$users_query = mysqli_query($mysql_connect, "SELECT user_name FROM users1");
	while($users_row = mysqli_fetch_assoc($users_query)){
		$user_list[] = $users_row['user_name'];
	}
	return $user_list;
}

if(isset($_POST['user_name'], $_POST['action']) || isset($_POST['action'])){
	if(!empty($_POST['user_name'])){
		$user_name = $_POST['user_name'];
	}
	if(!empty($_POST['action'])){
		$action = $_POST['action'];
	}

	if($action == 'joined'){
		user_joined($user_name);
	}else if($action == 'list'){
		foreach(user_list() as $user){
			echo $user.'<br/>';
		}
	}else if($action == 'left'){
		user_left($user_name);
	}
}
?>
<?php
if(isset($_POST['email']) && !empty($_POST['email'])){
	$email = $_POST['email'];
	if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
		echo 'That doesn\'t appear to be a valid email address...';
	}else{
		echo 'Valid email address!';
	}
}
?>
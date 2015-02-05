<?php
if(isset($_POST['input'])){
	$string = $_POST['input'];
	echo strrev($string);
}
?>
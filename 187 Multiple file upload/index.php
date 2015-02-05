<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>jQuery Example</title>
</head>
<body>
	<form id="file_upload" action="#" method="get" enctype="multipart/form-data">
		<p><input type="file" name="file_1" /></p>
		<p>
			<input type="submit" value="Upload" />
			<a href="#" id="add_more">Add more</a>
		</p>
	</form>

<!-- 	alternate
	<form id="file_upload" action="php/upload.php" method="post" enctype="multipart/form-data">
		<p><input type="file" name="file_1" /></p>
		<p>
			<input type="submit" value="Upload" />
			<a href="#" id="add_more">Add more</a>
		</p>
	</form>
 -->

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/ext.js"></script>
</body>
</html>
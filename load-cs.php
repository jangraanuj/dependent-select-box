<?php

	$conn = mysqli_connect("localhost","root","","database") or die("Connection failed");

	if($_POST['type'] == ""){
		$sql = "SELECT * FROM countries";

		$query = mysqli_query($conn,$sql) or die("Query Unsuccessful.");

		$str = "";
		while($row = mysqli_fetch_assoc($query)){
		  $str .= "<option value='{$row['id']}'>{$row['name']}</option>";
		}
	}else if($_POST['type'] == "stateData"){

		$sql = "SELECT * FROM states WHERE country_id = {$_POST['id']}";

		$query = mysqli_query($conn,$sql) or die("Query Unsuccessful.");

		$str = "";
		while($row = mysqli_fetch_assoc($query)){
		  $str .= "<option value='{$row['id']}'>{$row['name']}</option>";
		}
	}

	echo $str;
 ?>

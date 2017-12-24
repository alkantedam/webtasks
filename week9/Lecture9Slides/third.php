<?php
if (isset($_GET["surname"])){
	$name = $_GET["name"];
	$surname = $_GET["surname"];
	echo "Hello Mr. $name $surname";
}
else
	echo "No surname";
?>

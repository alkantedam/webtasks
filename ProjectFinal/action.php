<?php	

	function set_data(){
		$connect = mysqli_connect('localhost', 'root', 'root');

		if(!$connect){
			echo "Failed to connect to the server";
		}

		if(!mysqli_select_db($connect, 'Project')){
			echo "Failed to connect to Database";
		}

		$name = $_POST['name'];
		$description = $_POST['description'];
		$price = $_POST['price'];
		$image = $_FILES['image']['name'];

		$sql = "INSERT INTO Discounts (Name, Description, Price, Image) VALUES ('$name', '$description', '$price', '$image')";

		if(!mysqli_query($connect, $sql)){
			echo 'Not inserted';
		}
		else {
			header("Location: index.php");
			die();

		}
		
	}
	set_data();
?>
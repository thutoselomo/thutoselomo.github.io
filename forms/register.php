<?php

include './dpo.php';

if(isset($_POST['name']) && isset($_POST['age']) && isset($_POST['email']))	{
	$name = $_POST['name'];
	$age = $_POST['age'];
	$email = $_POST['email'];

	$sql = "INSERT INTO pageants (name, email, age, status)
		VALUES ('$name', '$email', '$age', 'Not_Paid')";

		if ($conn->query($sql) === TRUE) {

			$array = array(
				"status" => true,
				"message" => "Registered successfully"
			);

			echo json_encode($array);

		} else {
		  $array = array(
				"status" => false,
				"message" => $conn->error
			);

			echo json_encode($array); 
		}

		$conn->close();
}
?>
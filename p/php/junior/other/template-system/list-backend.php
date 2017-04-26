<?php
$link = mysqli_connect("localhost", "nachovz", "", "c9");
if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

$result = mysqli_query($link,"select * from users");

if($result){
	//echo json_decode($result);
	
	while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row; //PUSH to Array
    }
    
    echo json_encode($myArray);
	return void;
}
?>
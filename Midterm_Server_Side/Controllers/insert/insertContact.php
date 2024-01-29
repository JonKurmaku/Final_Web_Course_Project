<?php
include "../../connector.php";
include "../../corsConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'), true);

    if (empty($postData['name1']) || empty($postData['surname1']) || empty($postData['email1']) || empty($postData['msg1'])) {
        http_response_code(400); 
        echo json_encode(array('error' => 'Invalid data format'));
        exit;
    }

 $name = $postData['name1'];
 $surname = $postData['surname1'];
 $email = $postData['email1'];
 $msg = $postData['msg1'];

 $sql = "INSERT INTO contact (name, surname, email, message) VALUES ('$name', '$surname', '$email', '$msg')";

 if ($conn->query($sql) === TRUE) {
     http_response_code(201); 
     echo json_encode(array('message' => 'Contact data inserted successfully'));
 } else {
     http_response_code(500); 
     echo json_encode(array('error' => 'Failed to insert contact data'));
 }

 $conn->close();
} else {
 http_response_code(405); 
 echo json_encode(array('error' => 'Only POST requests are allowed'));
}
?>

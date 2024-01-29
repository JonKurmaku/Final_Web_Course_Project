<?php
include "../../connector.php";
include "../../corsConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $contactId = $_GET['id'];

    $data = json_decode(file_get_contents('php://input'));


    $name = $data->name1;
    $surname = $data->surname1;
    $email = $data->email1;
    $message = $data->message1;

    $sql = "UPDATE contact SET name = '$name', surname = '$surname', email = '$email', message = '$message' WHERE id = $contactId";

    if ($conn->query($sql) === TRUE) {
        http_response_code(200); 
        echo json_encode(array('message' => 'Contact updated successfully'));
    } else {
        http_response_code(500); 
        echo json_encode(array('error' => 'Failed to update contact'));
    }

    $conn->close();
} else {
    http_response_code(405); 
    echo json_encode(array('error' => 'Only PUT requests are allowed'));
}
?>

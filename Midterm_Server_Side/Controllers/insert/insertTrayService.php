<?php
include "../../connector.php";
include "../../corsConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'), true);

    if (empty($postData['name1']) || empty($postData['surname1']) || empty($postData['date1']) || empty($postData['type1'])) {
        http_response_code(400); 
        echo json_encode(array('error' => 'Invalid data format'));
        exit;
    }

    $name = mysqli_real_escape_string($conn, $postData['name1']);
    $surname = mysqli_real_escape_string($conn, $postData['surname1']);
    $date = mysqli_real_escape_string($conn, $postData['date1']);
    $type = mysqli_real_escape_string($conn, $postData['type1']);

    $sql = "INSERT INTO tray_service (name, surname, shipment_date, load_type) VALUES ('$name', '$surname', '$date', '$type')";

    if ($conn->query($sql) === TRUE) {
        http_response_code(201); 
        echo json_encode(array('message' => 'Tray service data inserted successfully'));
    } else {
        http_response_code(500); 
        echo json_encode(array('error' => 'Failed to insert tray service data'));
    }

    $conn->close();
} else {
    http_response_code(405); 
    echo json_encode(array('error' => 'Only POST requests are allowed'));
}
?>

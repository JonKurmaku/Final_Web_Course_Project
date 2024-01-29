<?php
include "../../connector.php";
include "../../corsConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $contactId = $_GET['id'];

    $data = file_get_contents('php://input');
    $data = json_decode($data);

    $name = $data->name1;
    $surname = $data->surname1;
    $date = $data->date1;
    $type = $data->type1;

    // Update the database record
    $sql = "UPDATE tray_service SET name = '$name', surname = '$surname', shipment_date = '$date', load_type = '$type' WHERE id = $contactId";

    if ($conn->query($sql) === TRUE) {
        http_response_code(200); 
        echo json_encode(array('text' => 'TS updated successfully'));
    } else {
        http_response_code(500); 
        echo json_encode(array('error' => 'Failed to update TS'));
    }

    $conn->close();
} else {
    http_response_code(405); 
    echo json_encode(array('error' => 'Only PUT requests are allowed'));
}
?>

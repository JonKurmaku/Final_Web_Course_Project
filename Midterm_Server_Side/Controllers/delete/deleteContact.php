<?php
include "../../connector.php";
include "../../corsConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];

    if (empty($id)) {
        http_response_code(400); 
        echo json_encode(array('error' => 'Invalid data format'));
        exit;
    }

    $sql = "DELETE FROM contact WHERE id = $id";
    
    if ($conn->query($sql) === TRUE) {
        http_response_code(201); 
        echo json_encode(array('message' => 'Contact deleted successfully'));
    } else {
        http_response_code(500); 
        echo json_encode(array('error' => 'Failed to delete contact'));
    }
    
} else {
    http_response_code(405); 
    echo json_encode(array('error' => 'Only DELETE requests are allowed'));
}

?>

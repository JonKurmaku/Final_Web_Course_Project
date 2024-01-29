<?php
include "../connector.php";
include "../corsConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $trayServiceData = array();

    $sql = "SELECT * FROM tray_service";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $trayServiceData[] = $row;
        }
    }

    $contactsData = array();

    $sql = "SELECT * FROM contact";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $contactsData[] = $row;
        }
    }

    $responseData = array(
        'trayService' => $trayServiceData,
        'contacts' => $contactsData
    );

    header('Content-Type: application/json');
    echo json_encode($responseData);
} else {
    http_response_code(405);
    echo json_encode(array('error' => 'Method Not Allowed'));
}

$conn->close();
?>

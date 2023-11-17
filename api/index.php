<?php
header('Content-Type: application/json; charset=utf-8');

require_once './FibApi.php';

try {
    $api = new FibApi();
    echo $api->run();
} catch (Exception $e) {
    echo json_encode(array('error' => $e->getMessage()));
}
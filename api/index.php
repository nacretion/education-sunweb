<?php

spl_autoload_register(function ($class) {
    include './' . str_replace('Services\\', '', $class) . '.php';
});
header("Content-Type: application/json");

use Services\FibApi;

try {
    $api = new FibApi();
    echo $api->run();
} catch (Exception $e) {
    echo json_encode(array('error' => $e->getMessage()));
}

<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');

    $_DATA = json_decode(file_get_contents("php://input"));
    $_DATA->servidor = $_SERVER["HTTP_HOST"];


    $f = fopen($_SERVER["REQUEST_TIME_FLOAT"].".json", "w+");
    fwrite($f, json_encode($_DATA,JSON_PRETTY_PRINT));
    fclose($f);
    
    echo json_encode($_DATA,JSON_PRETTY_PRINT);
?>
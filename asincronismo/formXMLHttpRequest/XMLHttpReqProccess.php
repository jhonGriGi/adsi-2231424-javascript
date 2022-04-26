<?php
$num1 = isset($_POST['num1']) ? $_POST['num1'] : 0;
$num2 = isset($_POST['num2']) ? $_POST['num2'] : 0;

$suma = $num1 + $num2;
$data = array(
    "resultado" => $suma,
    "msg" => "Proceso exitoso"
);
echo json_encode($data);

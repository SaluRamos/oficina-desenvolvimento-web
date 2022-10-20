<?php

    $num01 = filter_input(INPUT_POST, "number_1");
    $num02 = filter_input(INPUT_POST, "number_2");
    $opera = filter_input(INPUT_POST, "operation");
    $resul = "";

    if($num01 && $num02){
        switch($opera){
            case "+":
            $resul = ($num01 + $num02);
            break;
            case "-":
            $resul = ($num01 - $num02);
            break;
            case "*":
            $resul = ($num01 * $num02);
            break;
            case "/":
            $resul = ($num01 / $num02);
            break;
        }
    }

?>
<h1><?=$resul;?></h1>
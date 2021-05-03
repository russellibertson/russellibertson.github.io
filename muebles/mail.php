<?php

$recepient = "ruslan1404a@gmail.com";
$sitename = "muebles.com";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$comment = trim($_POST["comment"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $tel \nТекст: $comment \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
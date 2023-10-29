<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$to = "azalena@yandex.ru";
$subject = "Сообщение формы обратной связи";
$txt = "Сообщение от $name ($email):\n$message";
$headers = "From: webmaster@example.com" . "\r\n";

if (mail($to, $subject, $txt, $headers)) {
echo "Сообщение отправлено.";
} else {
echo "Ошибка при отправке сообщения.";
}
}
?>
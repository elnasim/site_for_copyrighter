<?php 
 
$sendto   = "kulikov.s91@mail.ru"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$source = $_POST['source']; // сохраняем в переменную данные полученные из поля c источником перехода
$term = $_POST['term'];
$url = $_POST['url'];
$medium = $_POST['medium'];
$campaign = $_POST['campaign'];
$content = $_POST['content'];
$host = $_SERVER['SERVER_NAME'];

 
// Формирование заголовка письма
$subject  = "Общий лендинг 2е напр";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>Сайт:</strong> ".$host."</p>\r\n";
$msg .= "<p><strong>Имя заказчика:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Контакт заказчика:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>utm_source:</strong> ".$source."</p>\r\n";
$msg .= "<p><strong>utm_term:</strong> ".$term."</p>\r\n";
$msg .= "<p><strong>utm_medium:</strong> ".$medium."</p>\r\n";
$msg .= "<p><strong>utm_campaign:</strong> ".$campaign."</p>\r\n";
$msg .= "<p><strong>utm_content:</strong> ".$content."</p>\r\n";
$msg .= "</body></html>";
 
// отправка сообщения
@mail($sendto, $subject, $msg, $headers)
?>
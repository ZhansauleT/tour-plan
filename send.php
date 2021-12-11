<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
if(isset($_POST['email']) && !isset($_POST['name'], $_POST['phone'])){ //for subscribe
    $body = "
        <h2>Новое обращение</h2>
        <b>Почта:</b><br>$email
        ";
}elseif(isset($_POST['email'], $_POST['name'], $_POST['message'], $_POST['phone'])){ //for modal window
    $body = "
        <h2>Новое обращение</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br>
        <b>Почта:</b>$email<br><br>
        <b>Сообщение:</b><br>$message
        ";
}elseif(isset($_POST['phone'], $_POST['name'], $_POST['message'])){ // for footer form
        $body = "
        <h2>Новое обращение</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br>
        <b>Сообщение:</b><br>$message
        ";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'zhansauletelisheva@gmail.com'; // Логин на почте
    $mail->Password   = 'IphoneIphone87754636133'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('zhansauletelisheva@gmail.com', 'Zhansaule T'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('jansaule97@mail.ru');  

//     // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');
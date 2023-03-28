<?php
$file = 'data.json';
$data = json_decode(file_get_contents($file), true);
$newData = json_decode($_POST['json'], true);
foreach ($newData as $user) {
    if (!in_array($user, $data)) {
        $data[] = $user;
    }
}
file_put_contents($file, json_encode($data));
?>

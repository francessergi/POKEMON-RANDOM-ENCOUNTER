<?php
$conn = mysqli_connect("localhost", "sergi", "password");
if (!$conn) {
    $log->error('Could not connect: ' . mysql_error());
    die('Could not connect: ' . mysql_error());
}
mysqli_select_db($conn, "POKEMON") or die('Could not select POKEMON database.');
mysqli_set_charset($conn,'utf8');
?>

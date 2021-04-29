<?php
$json = file_get_contents('php://input');
$jsonDecode = json_decode($json);
$db = new mysqli('localhost', 'root', '','anime_db1');
$res1 = mysqli_query($db,"SELECT * FROM `anime_serials` WHERE `name` LIKE '%$jsonDecode->name%' order by id desc limit 5");
$data1 = array();
while($row = mysqli_fetch_assoc($res1)){
   $data1[] = $row;
}
echo json_encode($data1);
?>
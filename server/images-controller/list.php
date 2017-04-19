<?php
header('Content-Type: application/json');
$images = [];

$uploaddir = "uploads/";
$base_url = 'server/images-controller/uploads/';
foreach(glob($uploaddir.'*') as $key => $filename){
    $images[] = [
    	'id' => $key,
    	'src' => $base_url.basename($filename),
    	'thumb' => $base_url.basename($filename)
    ];
}
echo json_encode($images);
?>
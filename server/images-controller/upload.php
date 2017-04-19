<?php
header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'No image');

$uploaddir = "uploads/";
$uploadfile = $uploaddir . basename($_FILES["file"]["name"]);
if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
	$response['data'] = array('src' => 'server/images-controller/'.$uploadfile, 'thumb' => 'server/images-controller/'.$uploadfile);
	$response['status'] = 'success';
	$response['message'] = 'Image successfully uploaded';
}
echo json_encode($response);
?>
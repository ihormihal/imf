<?php
header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'Undefined error');

if(isset($_POST['src'])){
	$file = $_POST['src'];
	$file = str_replace('server/images-controller/','',$file);
	if(file_exists($file)){
		if(unlink($file)){
			$response['status'] = 'success';
			$response['message'] = 'Image removed';
		}
	}else{
		$response['message'] = 'Image not found';
	}
	
}

echo json_encode($response);
?>
<?php
error_reporting(E_ALL^E_NOTICE);
	if ($_POST['url']=='ycku') {
		echo "baidu.com";
	}elseif ($_GET['url']=='ycku') {
		echo "google";
	}
?>
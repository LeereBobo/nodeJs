<?php 
	$openid = $_GET['openid'];
	$newScore = $_GET['score'];
	//连接数据库
	$mysqli = new mysqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
	if ($mysqli->connect_errno) {
		die($mysqli_connect_errno);


	}
	//设置编码
	$mysqli->query("set names utf8");
	//执行插入语句
	$sql = "UPDATE  userinfo SET score = $newScore WHERE openid = '$openid'"; 
	$result = $mysqli->query($sql);
	//断开连接
	$mysqli->close();





 ?>
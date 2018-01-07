<?php 
	$appid = 'wx2fa3c9d0631d1192';
	$secret = '64ad1e6c0ed9290c3f25ca316b4307b7';
	$code = $_GET['code'];
	/*echo $code;*/
	$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid={$appid}&secret={$secret}&code={$code}&grant_type=authorization_code";
	$response = httpGet($url);
	//解析
	$obj = json_decode($response);
	$access_token = $obj->access_token;
	$openid = $obj->openid;
	session_start();
	$_SESSION['openid'] = $openid;
	/*echo $openid;*/
	//获取用户信息
	$infoUrl = "https://api.weixin.qq.com/sns/userinfo?access_token={$access_token}&openid={$openid}&lang=zh_CN "; 
	$userinfo = json_decode(httpGet("$infoUrl"));
/*	echo $userinfo->nickname;
	echo "<img src='{$userinfo->headimgurl}'>";*/
	//将用户信息存储到数据库
	//连接数据库
	function insertData ($userinfo,$sql) {
		$openid = $userinfo->openid;
		$nickname = $userinfo->nickname;
		$sexNum = $userinfo->sex;
		if ($sexNum == 0) {
			$sex = '未知';

		}elseif ($sexNum == 1) {
			$sex = '男';

		}elseif ($sexNum == 2) {
			$sex = '女';
		}
		$province = $userinfo->province;
		$city = $userinfo->city;
		$country = $userinfo->country;
		$headimgurl = $userinfo->headimgurl;
		//连接数据库
		$mysqli = new mysqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
		if ($mysqli->connect_errno) {
			die($mysqli_connect_errno);


		}
		//设置编码
		$mysqli->query("set names utf8");
		//执行插入语句
		$sql = "INSERT INTO userinfo(openid,nickname,sex,province,city,country,headimgurl) VALUES ('$openid','$nickname','$sex','$province','$city','$country','$headimgurl')"; 
		$result = $mysqli->query($sql);
		if($result) {
			echo "成功";

		}else {
			echo "失败";
		}
		//断开连接
		$mysqli->close();
	}
	//判断数据库中是否有字段
	if(isuserExist($openid) == false) {
		insertData($userinfo);
	}
	function isuserExist($openid) {
		$mysqli = new mysqli(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
		if ($mysqli->connect_errno) {
			die($mysqli_connect_errno);
		}
		//设置编码
		$mysqli->query("set names utf8");
		//执行插入语句
		$sql = "SELECT * FROM userinfo WHERE openid = '$openid'"; 
		$result = $mysqli->query($sql);
		$isExist = false;
		if($result->num_rows) {
			$isExist = true;

		}else {
			$isExist = false;
		}
		//断开连接
		$mysqli->close();
		return $isExist;

	} 
	
	//跳转页面
	echo "<script>window.location.href='../index.html'</script>";
	//get方式
	function httpGet ($url) {
		$curl = curl_init();
		curl_setopt($curl,CURLOPT_URL,$url);
		curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
		$res = curl_exec($curl);
		curl_close($curl);
		return $res;
	}
	//POST方式
	function httpPost ($url,$data) {
		$curl = curl_init();
		curl_setopt($curl,CURLOPT_POST,true);
		curl_setopt($curl,CURLOPT_URL,$url);
		curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
		curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
		$res = curl_exec($curl);
		curl_close($curl);
		return $res;
	}



 ?>
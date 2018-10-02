## 1.load方法 ##
load方法默认使用get方式。

	$('.asc').click(function(){
		$('#box').load('a.html .url');
	});

load()方法中带回调函数

	$('.asc').click(function(){
		$('#box').load('a.php',{
			url:'ycku'
		},function(response,status,xhr){
			alert(response+'|'+status+'|'+xhr);
		});
	});

注意：status得到的值，如果成功返回数据为success，否则为error。

<table>
		<caption>http状态码说明</caption>
		<tr>
			<th>http状态码</th>
			<th>状态码字符串</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>200</td>
			<td>ok</td>
			<td>服务器成功返回了页面</td>
		</tr>
		<tr>
			<td>400</td>
			<td>Bad Request</td>
			<td>语法错误导致服务器不识别</td>
		</tr>
		<tr>
			<td>401</td>
			<td>Unauthorized</td>
			<td>请求需要用户认证</td>
		</tr>
		<tr>
			<td>404</td>
			<td>Not Found</td>
			<td>指定的URL在服务器上找不到</td>
		</tr>
		<tr>
			<td>500</td>
			<td>Internal Sever Error</td>
			<td>服务器遇到意外错误，无法完成请求</td>
		</tr>
		<tr>
			<td>503</td>
			<td>ServiceUnavailable</td>
			<td>由于服务器过载或者维护导致无法完成请求</td>
		</tr>
	</table>

2.$.get()和$.post()

$.get()传值的几种方式   

	$('.asc').click(function(){
		$.get('a.php?url=ycku',function(response,status,xhr){
			$('#box').html(response);
		});
	});

第二个参数中传值


	$('.asc').click(function(){
		$.get('a.php?','url=ycku&name=aaa',function(response,status,xhr){
			$('#box').html(response);
		});
	});

键值对传值


	$('.asc').click(function(){
		$.get('a.php',{
			url:'ycku'
		},function(response,status,xhr){
			$('#box').html(response);
		});
	});

$.post()传值  

	$('.asc').click(function(){
		$.post('a.php','url=ycku',function(response,status,xhr){
			$('#box').html(response);
		});
	});

返回特定格式的数据


	$('.asc').click(function(){
		$.post('a.php','url=ycku',function(response,status,xhr){
			$('#box').html(response);
		},'json');
	});

## 3.$.getSCript()和$.getJSON() ##
有时我们需要在特定的情况下加载js,而不是一开始把所有的js都加载了，这时可用到$.getScript()方法。

	$('input').click(function () {
		$.getScript('test.js');
	});

加载json文件方法

	$('.asc').click(function(){
		$.getJSON('test.json',function(response,status,xhr){
			alert(response[0].url);
		});
	});


## 4.$.ajax() ##

	$('.asc').click(function(){
		$.ajax({
			type:'POST',
			url:'a.php',
			data:{
				url:'ycku'
			},
			success:function(response,status,xhr){
				$('#box').html(response);
			}
		});
	});

## 5.表单序列化 ##

	//表单序列化
	$('.submit').click(function(){
		$.ajax({
			type:'POST',
			url:'user.php',
			data:$('form').serialize(),
			success:function(response,status,xhr){
				$('#box').html(response);
			}
		});
	});

除了serialize()方法外还有一个可以返回json数据的方法


	$('input[name=sex]').click(function(){
		var json=$(this).serializeArray();
		$('#box').html(json[0].name);
		console.log(json);
	});
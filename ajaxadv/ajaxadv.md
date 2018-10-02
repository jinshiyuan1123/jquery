## 1.加载请求 ##


	$('.submit').click(function(){
		$.ajax({
			type:'POST',
			url:'http://www.google.com',
			data:$('form').serialize(),
			success:function(response){
				$('#box').html(response);
			},
			timeout:3000
		});
	});

	$(document).ajaxStart(function(){
		$('.loading').show();
	}).ajaxStop(function(){
		$('.loading').hide();
	});

## 2.错误处理 ##


	$('.submit').click(function(){
		$.ajax({
			type:'POST',
			url:'user1.php',
			data:$('form').serialize(),
			success:function(response){
				$('#box').html(response);
			},
			error:function(xhr,errorText,errorStatus){
				alert(xhr.status+'|'+errorText+'|'+errorStatus);//输出 404|error|Not Found
			}
		});
	});


$.post()全局ajaxError()提示错误



	$('.submit').click(function(){
	 	$.post('user1.php');
	 });
	$(document).ajaxError(function(event,xhr,setting,info){
		//查找所有event对象
		for(var i in event){
			document.write(i+'<br />');
			//返回值
			/**
			type
			timeStamp
			jQuery321040771644911737903
			isTrigger
			namespace
			rnamespace
			result
			target
			delegateTarget
			currentTarget
			handleObj
			data
			constructor
			isDefaultPrevented
			isPropagationStopped
			isImmediatePropagationStopped
			isSimulated
			preventDefault
			stopPropagation
			stopImmediatePropagation
			altKey
			bubbles
			cancelable
			changedTouches
			ctrlKey
			detail
			eventPhase
			metaKey
			pageX
			pageY
			shiftKey
			view
			char
			charCode
			key
			keyCode
			button
			buttons
			clientX
			clientY
			offsetX
			offsetY
			pointerId
			pointerType
			screenX
			screenY
			targetTouches
			toElement
			touches
			which  */
		}
		 for(var m in setting){
		 	document.write(m+'<br />');
		//返回值
		/**
		url
		type
		isLocal
		global
		processData
		async
		contentType
		accepts
		contents
		responseFields
		converters
		flatOptions
		xhr
		jsonp
		jsonpCallback
		dataTypes
		crossDomain
		hasContent
		*/
		}
		alert(info);//Not Found

	});



## 3.请求全局事件 ##

	$('.submit').click(function(){
		$.post('user1.php',$('form').serialize());
	});
	$(document).ajaxSend(function(){
		alert('发送请求之前执行');
	}).ajaxComplete(function(){
		alert('请求完成后，不管成功失败都执行');
	}).ajaxSuccess(function(){
		alert('请求成功后执行');
	}).ajaxError(function(){
		alert('请求失败后执行');
	});

局部方法

	$('.submit').click(function(){
		$.ajax({
			type:'POST',
			url:'user1.php',
			data:$('form').serialize(),
			success:function(response){
				$('#box').html(response);
			},
			error:function(xhr,errorText,errorStatus){
				alert(xhr.status+'|'+errorText+'|'+errorStatus);//输出 404|error|Not Found
			},
			complete:function(){
				alert('请求完成后');
			},
			beforeSend:function(){
				alert('请求发送前执行');
			}
		});
	});


## 4.json和jsonp跨域请求 ##
如果想跨域操作文件的话，必须使用JSONP,JSONP是一个非官方的协议，它允许在服务器端集成script tags返回至客户端，通过JavaScript callback的形式实现跨域访问。


## 5.jqxhr对象 ##
jqxhr对象的方法有done(),always(),fail()代替success(),complete()和error().


	$('.submit').click(function(){
		var jqXHR=$.ajax({
			type:'POST',
			url:'user.php',
			data:$('form').serialize()
		});
		jqXHR.done(function(response){
			alert(response);
		}).done(function(response){
			alert(response+'1');
		});
	});
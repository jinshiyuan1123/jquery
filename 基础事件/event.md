## 1.绑定事件 ##

	$('input').bind({
	 	mouseover:function(){
			alert('移入');
	 	},
	 	mouseout:function(){
	 		alert('移除');
		}
	 });

解绑事件

	$('input').unbind();

## 2.简写事件 ##


<table>
		<caption>简写事件绑定方法</caption>
		<tr>
			<th>方法名</th>
			<th>触发事件</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>click(fn)</td>
			<td>鼠标</td>
			<td>点击事件</td>
		</tr>
		<tr>
			<td>dblclick(fn)</td>
			<td>鼠标</td>
			<td>双击事件</td>
		</tr>
		<tr>
			<td>mousedown(fn)</td>
			<td>鼠标</td>
			<td>点击后事件</td>
		</tr>
		<tr>
			<td>mouseup(fn)</td>
			<td>鼠标</td>
			<td>点击弹起</td>
		</tr>
		<tr>
			<td>moueover(fn)</td>
			<td>鼠标</td>
			<td>鼠标移入</td>
		</tr>
		<tr>
			<td>mouseout(fn)</td>
			<td>鼠标</td>
			<td>鼠标移出</td>
		</tr>
		<tr>
			<td>mousemove(fn)</td>
			<td>鼠标</td>
			<td>鼠标移动</td>
		</tr>
		<tr>
			<td>mouseenter</td>
			<td>鼠标</td>
			<td>鼠标穿过</td>
		</tr>
		<tr>
			<td>mouseleave(fn)</td>
			<td>鼠标</td>
			<td>鼠标穿出</td>
		</tr>
		<tr>
			<td>keydown(fn)</td>
			<td>键盘</td>
			<td>键盘按下</td>
		</tr>
		<tr>
			<td>keyup(fn)</td>
			<td>键盘</td>
			<td>键盘按下弹起</td>
		</tr>
		<tr>
			<td>keypress(fn)</td>
			<td>键盘</td>
			<td>键盘按下</td>
		</tr>
		<tr>
			<td>unload(fn)</td>
			<td>文档</td>
			<td>当卸载本页面时绑定一个要执行的函数</td>
		</tr>
		<tr>
			<td>resize(fn)</td>
			<td>文档</td>
			<td>文档改变大小</td>
		</tr>
		<tr>
			<td>scroll()</td>
			<td>文档</td>
			<td>滚动条拖动事件</td>
		</tr>
		<tr>
			<td>focus()</td>
			<td>表单</td>
			<td>焦点激活</td>
		</tr>
		<tr>
			<td>blur(fn)</td>
			<td>表单</td>
			<td>失去焦点</td>
		</tr>
		<tr>
			<td>focusin(fn)</td>
			<td>表单</td>
			<td>焦点激活</td>
		</tr>
		<tr>
			<td>focusout(fn)</td>
			<td>表单</td>
			<td>焦点丢失</td>
		</tr>
		<tr>
			<td>select(fn)</td>
			<td>表单</td>
			<td>文本选定</td>
		</tr>
		<tr>
			<td>change(fn)</td>
			<td>表单</td>
			<td>值改变事件</td>
		</tr>
		<tr>
			<td>submit(fn)</td>
			<td>表单</td>
			<td>表单提交</td>
		</tr>
	</table>


mouseover()和mouseenter()说明

	$('div').mouseover(function(event) {  //mouseover会触发子节点
		// Act on the event 
	 	$('strong').html(function(index,value){
	 		return value +'1';
	 	});
	 });
	 $('div').mouseenter(function(event) {  //mouseenter会触发子节点
		/* Act on the event */
		$('strong').html(function(index,value){
			return value +'1';
		});
	});

keydown()和keypress()区别

	$('input').keydown(function(event) {
	 // 	 Act on the event 
	 	alert(event.keyCode);
	  });
	  $('input').keypress(function(event) {
	 // 	 Act on the event 
	  	alert(event.charCode);
	  });

## 3.复合事件 ##

<table>
		<caption>复合方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>ready(fn)</td>
			<td>当DOM加载完毕触发事件</td>
		</tr>
		<tr>
			<td>hover(fn1,fn2)</td>
			<td>当鼠标移入时触发fn1,移除时触发fn2</td>
		</tr>
	</table>


注意：.hover()方法是结合了.mouseenter()和mouseleave()方法。
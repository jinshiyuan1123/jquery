## 1.创建节点 ##

	var box=$('<div id="box">插入节点</div>');//创建一个节点

## 2.插入节点 ##

<table>
		<caption>内部插入节点方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>append(content)</td>
			<td>向指定元素内部后面插入节点</td>
		</tr>
		<tr>
			<td>append(function(index,html){})</td>
			<td>使用匿名函数向指定元素内部后面插入节点</td>
		</tr>
		<tr>
			<td>appendTo(content)</td>
			<td>将指定元素移入指定元素content内部后面</td>
		</tr>
		<tr>
			<td>prepend(content)</td>
			<td>向指定元素内部的前面插入节点</td>
		</tr>
		<tr>
			<td>prepend(function(index,html){})</td>
			<td>使用匿名函数向指定元素内部前面插入节点</td>
		</tr>
		<tr>
			<td>prependTo(content)</td>
			<td>将指定元素移入指定元素content内部前面</td>
		</tr>
	</table>

	$('body').append(box);//向body的内部的后面插入元素
	$('#pox').append(function(index,html){
	 	return '<strong>DOM</strong>'+index+html;
	 });
	 
	$('strong').appendTo('#pox');//将strong移入到pox的内部的后面
	
    $('#pox').prepend('<em>内部前面</em>');



<table>
		<caption>外部插入节点方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>after(content)</td>
			<td>向指定元素外部后面插入节点</td>
		</tr>
		<tr>
			<td>after(function(index,html){})</td>
			<td>使用匿名函数向指定元素外部后面插入节点</td>
		</tr>
		<tr>
			<td>before(content)</td>
			<td>向指定元素外部的前面插入节点</td>
		</tr>
		<tr>
			<td>before(function(index,html){})</td>
			<td>使用匿名函数向指定元素外部前面插入节点</td>
		</tr>
		<tr>
			<td>prependTo(content)</td>
			<td>将指定元素移入指定元素content内部前面</td>
		</tr>
		<tr>
			<td>insertAfter(content)</td>
			<td>将指定节点移到指定元素content外部的前面</td>
		</tr>
		<tr>
			<td>insertBefore(content)</td>
			<td>将指定节点移到指定元素content外部的前面</td>
		</tr>
	</table>

例子

	 $('#pox').after('外部后面');
	 $('#pox').before('外部前面');
	 $('strong').insertAfter('#pox');


## 3.包裹节点 ##


<table>
		<caption>包裹节点</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>wrap(html)</td>
			<td>向指定元素包裹一层html代码</td>
		</tr>
		<tr>
			<td>wrap(element)</td>
			<td>向指定元素包裹一层DOM对象节点</td>
		</tr>
		<tr>
			<td>wrap(function(index){})</td>
			<td>使用匿名函数向指定元素包裹一层自定义内容</td>
		</tr>
		<tr>
			<td>unwrap()</td>
			<td>移除一层包裹指定元素的内容</td>
		</tr>
		<tr>
			<td>wrapAll(html)</td>
			<td>用html将所有元素包裹到一起</td>
		</tr>
		<tr>
			<td>wrapAll(element)</td>
			<td>用DOM对象将所有元素包裹在一起</td>
		</tr>
		<tr>
			<td>wrapInner(html)</td>
			<td>向指定元素内部包裹一层html</td>
		</tr>
		<tr>
			<td>wrapInner(element)</td>
			<td>向指定元素的子内容包裹一层DOM对象节点</td>
		</tr>
		<tr>
			<td>warpInner(function(index){})</td>
			<td>使用匿名函数向指定元素的子内容包裹一层</td>
		</tr>
	</table>

例子

	$('#pox').wrap('<strong></strong>');
	$('#pox').unwrap();
	$('div').wrap('<strong></strong>');
	$('div').wrapAll('<strong></strong>');
	$('#box').wrapInner('<strong></strong>');



## 4.节点操作 ##

复制节点

	$('div').click(function(event) {
		alert('yc.com');
	});

	$('div').clone(true).appendTo('body');

注意：clone()参数可以为空，当为空或者false时表示只复制元素和内容，不复制其行为。
 

删除节点   

	$('div').remove();

注意：当remove()不带参数时，删除前面对象选择器指定的元素，而remove()本省也可以带选择符参数，$('div').remove('#box')表示只删除id=box的div。   

保留事件的删除节点

	$('div').detach();

注意：remove()和detach()都是删除节点，而删除后本身方法可以返回当前被删除的节点对象，但区别在于前者在恢复时不保留事件行为，后者则保留。    
清空节点

	$('div').empty();

替换节点

	$('div').replaceWith('<span>节点</span>');//将div替换成span元素
	$('<span>节点</span>').replaceAll('div');

注意：节点被替换后，所包含的事件行为就全部消失了。
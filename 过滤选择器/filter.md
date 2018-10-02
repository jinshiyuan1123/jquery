## 1.基本过滤器 ##
基本过滤器主要通过特定的过滤规则来筛选所选的dom元素，和CSS中的伪类语法类似

<table>
		<tr>
			<th>过滤器名称</th>
			<th>jQuery语法</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>:first</td>
			<td>$('li:first')</td>
			<td>选取第一个元素</td>
		</tr>
		<tr>
			<td>:last</td>
			<td>$('li:last')</td>
			<td>选取最后一个元素</td>
		</tr>
		<tr>
			<td>not(selector)</td>
			<td>$('li:not(.red)')</td>
			<td>选取class不是red的li元素</td>
		</tr>
		<tr>
			<td>:even</td>
			<td>$('li:even')</td>
			<td>选取索引是偶数的元素</td>
		</tr>
		<tr>
			<td>:odd</td>
			<td>$('li:odd')</td>
			<td>选取索引是奇数的所有元素</td>
		</tr>
		<tr>
			<td>:eq(index)</td>
			<td>$('li:eq(2)')</td>
			<td>选取第三个li元素</td>
		</tr>
		<tr>
			<td>:gt(index)</td>
			<td>$('li:gt(2)')</td>
			<td>选取第三个以后的li元素</td>
		</tr>
		<tr>
			<td>:lt(index)</td>
			<td>$('li:lt(3)')</td>
			<td>选取索引小于3的li元素</td>
		</tr>
		<tr>
			<td>:header</td>
			<td>$(':header')</td>
			<td>选取标题元素 h1~h6</td>
		</tr>
		<tr>
			<td>:animated</td>
			<td>$(':animated')</td>
			<td>选取正在执行动画的元素</td>
		</tr>
		<tr>
			<td>:foucs</td>
			<td>$('focus')</td>
			<td>选择当前被焦点的元素</td>
		</tr>
	</table>   


jQuery为最常用的过滤器提供了专用的方法

	$('li').eq(2).css('color','red');
	$('li').first().css('color','red');
	$('li').last().css('color','red');
	$('li').not('red').css('color','red');

## 2.内容过滤器 ##


<table>
		<tr>
			<th>过滤器名称</th>
			<th>jQuery语法</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>:contains(text)</td>
			<td>$(':contains("sunday")')</td>
			<td>选取含有Sunday文本的元素</td>
		</tr>
		<tr>
			<td>:empty</td>
			<td>$('div:empty')</td>
			<td>选取不包含子元素或者空文本的元素</td>
		</tr>
		<tr>
			<td>:has(selector)</td>
			<td>$(':has(red)')</td>
			<td>选取含有class是red的元素</td>
		</tr>
		<tr>
			<td>:parent</td>
			<td>$(':parent')</td>
			<td>选取含有子元素或者文本的元素</td>
		</tr>
	</table>


jQuery提供了一个has()方法提高has过滤器的性能

	$('ul').has('.red').css('color','red');

jQuery提供了一个名称和：parent相似的方法，但是这个方法并不是选取含有子元素或者文本的元素，而是获取当前元素的父元素，返回的是元素集合     

	$('li').parent().css('color','red');//获取li元素的父元素
	$('li').parents().css('color','red');//获取li元素的父元素及祖先元素
	$('li').parentsUntil('div').css('color','red');//获取当前元素的祖先元素直到遇到div停止


## 3.可见性过滤器 ##


<table>
		<tr>
			<th>过滤器名称</th>
			<th>jQuery语法</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>:hidden</td>
			<td>$('p:hidden').size()</td>
			<td>选取所有不可见元素</td>
		</tr>
		<tr>
			<td>:visible</td>
			<td>$('p:visible').size()</td>
			<td>选取所有可见元素</td>
		</tr>
	</table>


## 4.子元素过滤器 ##


<table>
		<tr>
			<th>过滤器名称</th>
			<th>jQuery语法</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>:first-child</td>
			<td>$('li:first-child')</td>
			<td>获取li的父元素的第一个子元素</td>
		</tr>
		<tr>
			<td>:last-child</td>
			<td>$('li:last-child')</td>
			<td>获取每个父元素的最后一个子元素</td>
		</tr>
		<tr>
			<td>:only-child</td>
			<td>$('li:only-child')</td>
			<td>获取只有一个子元素的元素</td>
		</tr>
		<tr>
			<td>:nth-child(index)</td>
			<td>$('li:nth-child(3n)')</td>
			<td>获取li的父元素下3的倍数的子元素</td>
		</tr>
	</table>


## 5.其他方法 ##


<table>
		<tr>
			<th>过滤器名称</th>
			<th>jQuery语法</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>is(s/o/e/f)</td>
			<td>$('.red').is('li')</td>
			<td>检测class为red的元素是否为li</td>
		</tr>
		<tr>
			<td>hasClass(class)</td>
			<td>$('li').eq(2).hasClass('red')</td>
			<td>判断第三个li元素有没有clas为red</td>
		</tr>
		<tr>
			<td>silce(start,end)</td>
			<td>$('li').slice(0,3)</td>
			<td>选择从第一个开始到3个li元素</td>
		</tr>
		<tr>
			<td>filter(s/o/e/f)</td>
			<td>$('li').filter('.red')</td>
			<td>选择li的class为red的元素</td>
		</tr>
		<tr>
			<td>end()</td>
			<td>$('div').find('p').end()</td>
			<td>获取当前元素的前一次状态</td>
		</tr>
		<tr>
			<td>contents</td>
			<td>$('div').contents()</td>
			<td>获取某元素下面所有节点，包括文本节点，如果是iframe，则可以查找文本内容</td>
		</tr>
	</table>
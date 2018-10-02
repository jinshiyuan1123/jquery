## 1.设置元素及内容 ##
 

<table>
		<caption>html()和text()的用法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>html()</td>
			<td>获取元素中html内容</td>
		</tr>
		<tr>
			<td>html(value)</td>
			<td>设置元素中html的值</td>
		</tr>
		<tr>
			<td>text()</td>
			<td>获取元素中文本内容</td>
		</tr>
		<tr>
			<td>text(value)</td>
			<td>设置元素文本内容</td>
		</tr>
		<tr>
			<td>val()</td>
			<td>获取表单中的文本内容</td>
		</tr>
		<tr>
			<td>val(value)</td>
			<td>设置表单中的文本内容</td>
		</tr>
	</table>

如果想要设置多个选项的选定状态，比如下拉列表，单选复选框等，可以通过数组传递操作  

	$('input').val(['男'，'女']);

## 2.元素属性操作 ##


<table>
		<caption>attr()和removeAttr()的用法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>attr(key)</td>
			<td>获取某个元素key属性的属性值</td>
		</tr>
		<tr>
			<td>attr(key,value)</td>
			<td>设置某个元素key属性的属性值</td>
		</tr>
		<tr>
			<td>attr({key1:val1,key2:val2...})</td>
			<td>设置某个元素多个key属性的属性值</td>
		</tr>
		<tr>
			<td>attr(key,function(index,value){})</td>
			<td>设置某个元素key通过fn来设置</td>
		</tr>
	</table>

attr里面的function(){}的使用

	$('div').html(function(index,value){
	 	return value + '<em>www.li.com</em>';
	 });

移除指定的属性  

	$('div').removeAttr('title');


3.元素样式操作

<table>
		<caption>CSS操作方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>css(name)</td>
			<td>获取某个元素行内的css样式</td>
		</tr>
		<tr>
			<td>css([name1,name2,name3])</td>
			<td>获取某个元素行内多个css样式</td>
		</tr>
		<tr>
			<td>css(name,value)</td>
			<td>设置某个元素行内的css样式</td>
		</tr>
		<tr>
			<td>css(name,function(index,value){})</td>
			<td>设置某个元素行内的css样式</td>
		</tr>
		<tr>
			<td>css({name1:val1,name2:val2})</td>
			<td>设置某个元素行内多个css样式</td>
		</tr>
		<tr>
			<td>addClass(class)</td>
			<td>给某个元素添加一个css类</td>
		</tr>
		<tr>
			<td>addClass(class1,class2,class3)</td>
			<td>给元素添加多个css类</td>
		</tr>
		<tr>
			<td>removeClass(clss)</td>
			<td>删除某个元素的一个class类</td>
		</tr>
		<tr>
			<td>removeClass(class1,class2,class3)</td>
			<td>删除某个元素的多个class类</td>
		</tr>
		<tr>
			<td>toggleClass(class)</td>
			<td>来回切换默认样式和指定样式</td>
		</tr>
		<tr>
			<td>toggleClass(class,switch)</td>
			<td>来回切换样式的时候设置切换频率</td>
		</tr>
		<tr>
			<td>toggleClass(function(){})</td>
			<td>通过匿名函数设置切换的规则</td>
		</tr>
	</table>

如果想要设置某个元素的css样式，但这个值是通过计算得来的，我们可以传递一个匿名函数

	$('div').css('width',function(index,value){
	 		return parseInt(value)-500+'px';	
	 });


4.css方法


<table>
		<caption>CSS方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>width()</td>
			<td>获取某个元素的宽度</td>
		</tr>
		<tr>
			<td>width(value)</td>
			<td>设置某个元素的宽度</td>
		</tr>
		<tr>
			<td>width(function(index,width){})</td>
			<td>通过匿名函数设置某个元素的长度</td>
		</tr>
		<tr>
			<td>height()</td>
			<td>获取某个元素的高度</td>
		</tr>
		<tr>
			<td>height(value)</td>
			<td>设置某个元素的高度</td>
		</tr>
		<tr>
			<td>height(function(index,height){})</td>
			<td>通过匿名函数设置某个元素的高度</td>
		</tr>
	</table>

说明 

	$('div').width();//获取div宽度，返回number
	$('div').width(500)//设置div宽度，默认px
	$('div').width(function(index,value){
		return value-500;
	});


<table>
		<caption>内外边距和边框尺寸方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>innerWidth()</td>
			<td>获取元素宽度，包含内边距padding</td>
		</tr>
		<tr>
			<td>innerHeight()</td>
			<td><获取元素高度，包含内边距padding/td>
		</tr>
		<tr>
			<td>outerWidth()</td>
			<td>获取元素宽度，包含内边距padding和border</td>
		</tr>
		<tr>
			<td>outerHeight()</td>
			<td>获取元素高度，包含内边距padding和border</td>
		</tr>
		<tr>
			<td>outerWidth(true)</td>
			<td>获取元素宽度，包含内边距padding和border以及外边距margin</td>
		</tr>
		<tr>
			<td>outerHeight(true)</td>
			<td>获取元素高度，包含内边距padding和border以及外边距margin</td>
		</tr>
	</table>

说明

	alert($('div').outerWidth(true));//获取div的宽度 包括内边距，外边距和border


<table>
		<caption>元素偏移方法</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>offset()</td>
			<td>获取某元素相对于视口的偏移位置</td>
		</tr>
		<tr>
			<td>position()</td>
			<td>获取某个元素相对于父元素的偏移位置</td>
		</tr>
		<tr>
			<td>scrollTop()</td>
			<td>获取垂直滚动条的值</td>
		</tr>
		<tr>
			<td>scrollTop(value)</td>
			<td>设置垂直滚动条的值</td>
		</tr>
		<tr>
			<td>scrollLeft()</td>
			<td>获取水平滚动条的值</td>
		</tr>
		<tr>
			<td>scrollLeft(value)</td>
			<td>设置水平滚动条的值</td>
		</tr>
	</table>
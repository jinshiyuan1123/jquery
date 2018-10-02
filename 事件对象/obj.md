## 1.事件对象 ##
事件对象就是event对象，通过处理函数默认传递接受。之前处理函数的e就是event事件对象，event对象有很多的方法和属性。


<table>
		<caption>event对象的属性</caption>
		<tr>
			<th>属性名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>type</td>
			<td>获取这个事件的事件类型</td>
		</tr>
		<tr>
			<td>traget</td>
			<td>获取绑定时间的DOM元素</td>
		</tr>
		<tr>
			<td>data</td>
			<td>获取事件调用时额外数据</td>
		</tr>
		<tr>
			<td>relatedTarget</td>
			<td>获取移入移除目标点离开或进入的那个DOM元素</td>
		</tr>
		<tr>
			<td>currentTarget</td>
			<td>获取冒泡前触发的DOM元素，等同于this</td>
		</tr>
		<tr>
			<td>pageX/pageY</td>
			<td>获取相当于页面原点的水平垂直坐标</td>
		</tr>
		<tr>
			<td>screenX/screenY</td>
			<td>获取显示器屏幕位置的水平垂直坐标</td>
		</tr>
		<tr>
			<td>clientX/clientY</td>
			<td>获取相当于页面视口的水平/垂直坐标</td>
		</tr>
		<tr>
			<td>result</td>
			<td>获取上个相同事件的返回值</td>
		</tr>
		<tr>
			<td>timeStamp</td>
			<td>获取事件触发时的时间戳</td>
		</tr>
		<tr>
			<td>whick</td>
			<td>获取鼠标的左中右键</td>
		</tr>
	</table>

例子

	('input').click(function(event) {
		alert(event.type);
	 });
	 $('input').click(function(event) {
	 	alert(event.target);
	 });


## 2.冒泡和默认行为 ##
如果在页面中重叠了多个元素，并且重叠的这些元素都绑定了同一个事件，那么就会出现冒泡问题。   
jQuery提供了一个阻止冒泡的方法

	event.stopPropagation();

jQuery提供了一个阻止默认行为的事件

	event.preventDefault();
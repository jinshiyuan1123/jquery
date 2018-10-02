## 1.常规选择器 ##

	 alert($('input[type=password]').val());
	 alert($('input[name=uname]').val());
	alert($('input').size());

## 2.表单选择器 ##


<table>
		<caption>表单选择器</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>:input</td>
			<td>选取所有input，textarea，select和button元素</td>
		</tr>
		<tr>
			<td>:text</td>
			<td>选择所有的单行文本框，即type=text</td>
		</tr>
		<tr>
			<td>:password</td>
			<td>选择所有密码框type=password</td>
		</tr>
		<tr>
			<td>:radio</td>
			<td>选择所有的单选框</td>
		</tr>
		<tr>
			<td>:checkbox</td>
			<td>选择所有的复选框</td>
		</tr>
		<tr>
			<td>:submit</td>
			<td>选择所有的提交按钮</td>
		</tr>
		<tr>
			<td>:reset</td>
			<td>选取所有的重置按钮</td>
		</tr>
		<tr>
			<td>:image</td>
			<td>选取所有的图像按钮</td>
		</tr>
		<tr>
			<td>:button</td>
			<td>选取所有的普通按钮</td>
		</tr>
		<tr>
			<td>:file</td>
			<td>选取所有的文件按钮</td>
		</tr>
		<tr>
			<td>:hidden</td>
			<td>选择所有的不可见字段</td>
		</tr>
	</table>


	lert($(':input[type=radio]').val());
	alert($(':radio').val());

## 3.表单过滤器 ##

<table>
		<caption>表单过滤器</caption>
		<tr>
			<th>方法名</th>
			<th>描述</th>
		</tr>
		<tr>
			<td>:enabled</td>
			<td>选取所有的可用元素</td>
		</tr>
		<tr>
			<td>:disabled</td>
			<td>选取所有的不可用元素</td>
		</tr>
		<tr>
			<td>:checked</td>
			<td>选取所有的被选中元素，单选和复选框</td>
		</tr>
		<tr>
			<td>:selected</td>
			<td>选取所有的被选中元素，下拉列表</td>
		</tr>
	</table>
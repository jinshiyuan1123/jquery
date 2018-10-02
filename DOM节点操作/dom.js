$(function(){
	//var box=$('<div id="box">插入节点</div>');//创建一个节点
	//$('body').append(box);//向body的内部的后面插入元素
	// $('#pox').append(function(index,html){
	// 	return '<strong>DOM</strong>'+index+html;
	// });
	// 
	//$('strong').appendTo('#pox');//将strong移入到pox的内部的后面
	//
	// $('#pox').prepend('<em>内部前面</em>');
	// $('#pox').after('外部后面');
	// $('#pox').before('外部前面');
	//$('strong').insertAfter('#pox');
	// $('#pox').wrap('<strong></strong>');
	// $('#pox').unwrap();
	//$('div').wrap('<strong></strong>');
	//$('div').wrapAll('<strong></strong>');
	//$('#box').wrapInner('<strong></strong>');
	$('div').click(function(event) {
		alert('yc.com');
	});

	$('div').clone(true).appendTo('body');
});
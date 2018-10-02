$(function(){
	//alert($('#box').html());
	//alert($('#box').text());
	//$('#box').html('<em>www.baidu.com</em>');
	//alert($('input').val());
	//$('input').val(['男','女']);
	// $('div').html(function(index,value){
	// 	return value + '<em>www.li.com</em>';
	// });
	// var box=$('div').css(['color','width','height']);
	// $.each(box,function(attr, value) {
	// 	alert(attr+':'+value);
	// });
	// $('div').each(function(index, el) {
	// 	alert(index+':'+el);
	// });
	// $('div').css('width',function(index,value){
		
		
	// 		return parseInt(value)-500+'px';
		
	// });
	$('div').click(function(){
		$(this).toggleClass('red','blue');
	});
});
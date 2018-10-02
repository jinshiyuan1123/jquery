$(function(){
	//模拟用户操作
	// $('input').click(function(event) {
	// 	alert('模拟用户操作');
	// }).trigger('click');
	
	// $('input').click(function(event,data1,data2,data3) {
	// 	 Act on the event 
	// 	alert(data1+'|'+data2+'|'+data3);
	// }).trigger('click',['123','abc',['a','b','c']]);
	// $('input').bind('myevvent', function(event) {
	// 	alert('自定义事件');
	// }).trigger('myevvent');
	
	// $('div').bind('myevent', function(event) {
	// 	 Act on the event 
	// 	alert('自定义事件');
	// });
	// $('.d3').trigger('myevent');//会冒泡
	
	// $('input').bind('click.abv',  function(event) {
	// 	/* Act on the event */
	// 	alert('abv');
	// });

	// $('input').bind('click.zyz',function () {
	// 	alert('zyz');
	// });
	// $('input').unbind('click.abv');
	// 
	//事件绑定 bind
	//解除绑定 unbind
	//用on代替bind()
	// $('input').on('click',function(){
	// 	alert('代替bind');
	// });
	// // $('input').off('click');
	// $('#box').on('click', '.btn', function(event) {
	// 	$(this).clone().appendTo('#box');
	// 	/* Act on the event */
	// });
	// $('#box').off('click','.btn');
	$('.btn').one('click', function(event) {
		/* Act on the event */
		alert('触发一次');
	});
});
$(function () {
	// $('input[type=button]').click(function(event) {
	// 	alert('点击');
	// });
	// $('input').bind('mouseover mouseout', function(event) {
	// 	 Act on the event 
	// 	$('div').html(function(index,value){
	// 		return value +'1';
	// 	});
	// });
	// $('input').bind({
	// 	mouseover:function(){
	// 		alert('移入');
	// 	},
	// 	mouseout:function(){
	// 		alert('移除');
	// 	}
	// });
	// $('input').unbind();
	// $('div').mouseover(function(event) {
	// 	/* Act on the event */
	// 	$(this).css('background-color', 'red');
	// }).mouseout(function(event) {
	// 	/* Act on the event */
	// 	$(this).css('background-color', 'green');
	// });;
	// $('div').mouseenter(function(event) {
	// 	/* Act on the event */
	// 	$(this).css('background-color', 'red');
	// }).mouseleave(function(event) {
	// 	/* Act on the event */
	// 	$(this).css('background-color', 'green');
	// });
	// $('div').mouseover(function(event) {  //mouseover会触发子节点
	// 	 Act on the event 
	// 	$('strong').html(function(index,value){
	// 		return value +'1';
	// 	});
	// });
	 $('div').mouseenter(function(event) {  //mouseenter会触发子节点
		/* Act on the event */
		$('strong').html(function(index,value){
			return value +'1';
		});
	});
	 // $('input').keydown(function(event) {
	 // 	 Act on the event 
	 // 	alert(event.keyCode);
	 // });
	 // $('input').keypress(function(event) {
	 // 	 Act on the event 
	 // 	alert(event.charCode);
	 // });
	 // 
	 // $('input').focus(function(event) {
	 // 	 Act on the event 
	 // 	alert('光标激活');
	 // });
	 $('div').hover(function() {
	 	$(this).css('background-color', 'red');
	 }, function() {
	 	/* Stuff to do when the mouse leaves the element */
	 	$(this).css('background-color', 'green');
	 });
});  
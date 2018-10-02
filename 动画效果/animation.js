$(function () {
	
	// $('.hide').click(function(event) {
	// 	$('#box').hide('1000', function() {
	// 		alert('隐藏完毕');
	// 	});
	// });

	// $('.show').click(function(event) {
	// 	$('#box').show('slow', function() {
	// 		alert('显示完毕');
	// 	});	
	// });
	// $('.qiehuan').click(function(event) {
	// 	$('#box').toggle('slow');
	// });
	//列队动画
	// $('.show').click(function(event) {
	// 	$('.test').first().show('fast', function testshow() {
	// 		$(this).next().show('fast', testshow);
	// 	});
	// });
	// $('.hide').click(function(event) {
	// 	$('.test').last().hide('fast', function testshow() {
	// 		$(this).prev().hide('fast',testshow);
	// 	});
	// });
	
	// $('.up').click(function(event) {
	// 	$('#box').slideUp('fast');
	// });
	// $('.down').click(function(event) {
	// 	$('#box').slideDown('fast');
	// });
	// $('.qh').click(function(event) {
	// 	$('#box').slideToggle('slow');
	// });
	// 
	// $('.in').click(function(event) {
	// 	$('#box').fadeIn('slow');
	// });
	// $('.out').click(function(event) {
	// 	$('#box').fadeOut('slow');
	// });
	// $('.io').click(function(event) {
	// 	$('#box').fadeToggle('slow');
	// });
	// $('.to').click(function(event) {
	// 	$('#box').fadeTo('slow', 0.5);
	// });
	// $('.my').click(function(event) {
	// 	$('#box').animate({
	// 		width: '300px',
	// 		height: '200px',
 //            opacity:0.5,
 //            fontsize:'50px'
	// 	},
	// 		1000, function() {
	// 		alert('动画完毕');
	// 	});
	// });
	// 
	// $('.my').click(function(event) {
	// 	$('#box').animate({
	// 		left: '300px',
	// 		top: '200px'
	// 	}, 'slow');
	// });
	// 
	// $('.my').click(function(event) {
	// 	$('#box').animate({
	// 		left:'+=50px'
	// 	}, 'slow');
	// });
	// 列队动画
	// $('.my').click(function(event) {
	// 	$('#box').animate({
	// 		width:'200px'
	// 	},function(){
	// 		$('#box').animate({
	// 			height:'300px'
	// 		},function(){
	// 			$('#box').animate({
	// 				opacity:0.5
	// 			},function(){
	// 				$('#box').animate({
	// 					fontSize:'50px'
	// 				},function(){
	// 					alert('动画完毕');
	// 				});
	// 			});
	// 		});
	// 	});
	// });
	//连缀方法实现，列队动画
	// $('.my').click(function(event) {
	// 	$('#box').animate({width:'200px'})
	// 	         .animate({height:'300px'})
	// 	         .animate({opacity:0.5})
	// 	         .animate({fontSize:'50px'});
	// });
	// $('.my').click(function(){
	// 	$('#box').slideUp('slow')
	// 			.slideDown('slow')
	// 			.queue(function(next){
	// 				$(this).css('background-color', 'orange');
	// 				next();
	// 			}).hide('slow');
	// });
	// 
	// 
	// $('.start').click(function(event) {
	// 	$('#box').animate({
	// 		left:'300px'
	// 	},4000);
	// });
	// $('.stop').click(function(event) {
	// 	$('#box').stop();
	// });
	// $('.start').click(function(event) {
	// 	$('#box').animate({left:'400px'},4000)
	// 			.animate({top:'400px'},4000)
	// 			.animate({width:'300px'},4000)
	// 			.animate({height:'300px'},4000)
	// });
	//如果有列队动画，按停止的话，会停止当前列队，继续执行下一个列队。
	// $('.stop').click(function(event) {
	//  	$('#box').stop();
	//  });

	// $('.start').click(function(event) {
	// 	$('#box').animate({left:'1200px'},4000).delay(1000)
	// 			.animate({top:'400px'},4000)
	// 			.animate({width:'300px'},4000)
	// 			.animate({height:'300px'},4000)
	// });
	$('.start').click(function(){
		$('#box').animate({
			left:'400px'
		},'slow','swing');
		$('#pox').animate({
			left:'400px'
		},'slow','linear');
	});

});
;(function($){
	$.fn.extend({
		'nav':function(){
			$(this).find('.nav').css({
			'list-style':'none',
			'margin':0,
			'padding':0,
			'display':'none'
			});
			$('.nav').parent().hover(function(){
				$(this).find('.nav').slideDown('normal');
			},function(){
				$(this).find('.nav').stop().slideUp('normal');
			});
		}
	});
	
})(jQuery);
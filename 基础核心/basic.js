// $(function(){
// 	$('#box').css('color','red');//添加行内css
// });
// 


//jQuery(function(){
	//jQuery('#box').css('color','red');
	//alert($===jQuery);
	//alert($());//返回[object Object]
	//alert($('#box'));//返回[object Object]
	//
//});

/*
$(function(){
	alert($('#box'));//返回jQuery对象  [object Object]
	alert(document.getElementById('box'));//返回原生DOM对象 [object HTMLDivElement]
	alert($('#box').get(0));//返回原生dom对象[object HTMLDivElement]
});


 */

jQuery.noConflict();//剔除$的所有权 
$(function(){
	alert($('#box'));
});//报错，$ is not a function 因为所有权被剔除了
/*
在延迟等待加载，js提供了一个事件为load
window.onload=function(){}
而jQuery的等待加载为
$(document).ready(function(){});

window.onload    必须等待网页全部加载完毕包括图片等，然后再执行代码      

只能执行一次，如果第二次，那么第一次执行的会被覆盖


$(document).ready()   只需等待网页中的DOM结构加载完毕，就能执行包裹的代码

可以执行多次，都不会被上次覆盖   简写  $(function(){});
 */

$(function(){
	// $('input').click(function(event) {
	// 	alert(event.type);
	// });
	// $('input').click(function(event) {
	// 	alert(event.target);
	// });
	// 
	// $('div').click(function(event) {
	// 	 Act on the event 
	// 	alert(event.target);
	// });
	// $('div').click(function(event) {
	// 	alert(event.currentTarget);
	// });
	// $('div').mouseover(function(event) {
	// 	alert(event.relatedTarget);
	// });
	// $('div').mouseout(function(event) {
	// 	 Act on the event 
	// 	alert(event.relatedTarget);
	// });
	// $('input').bind('click', '1233', function(event) {
	// 	/* Act on the event */
	// 	alert(event.data);
	// });
	// $(document).bind('click',  function(e) {
	// 	 Act on the event 
	// 	alert(e.pageX+','+e.pageY);
	// });
	// 
	// $('input').click(function(event) {
	// 	 Act on the event 
	// 	alert(event.timeStamp);
	// });
	// $('span').click(function(event) {
	// 	event.stopPropagation();
	// 	alert('span');
	// });
	// $('div').click(function(event) {
	// 	 Act on the event 
	// 	alert('div');
	// });
	// $(document).click(function(event) {
	// 	/* Act on the event */
	// 	alert('document');
	// });
	$('a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		alert('111');
	});
});
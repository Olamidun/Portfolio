// ANIMATE ON SCROLL
$(Document).ready(function(){
	$('p').click(function(){
		$(this).css('background-color', '#ff0000');
	})
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	})
});

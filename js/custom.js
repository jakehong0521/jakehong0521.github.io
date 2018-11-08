function setup(target) {
	$('body').css('background', 'none');
	$(target).hide(function() {
		$(".main").fadeIn(700, 'linear');
	});
}
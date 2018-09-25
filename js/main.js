$(document).ready(function(){
	$('.params-form, .menu-hidden').hide();
	$('#params_button').on('click', function(e){
		if ($('.params-form').css('display')=='none') {
			$('.params-form').slideToggle();
			$(this).find('.arrow-d').toggleClass('arrow-d-rot');
		};
	});
	$('#params_hide').on('click', function(e){
		$('.params-form').slideToggle();
		$(this).find('.arrow-d').toggleClass('arrow-d-rot');
	});

	$('.arrow').on('click', function(){
		$(this).siblings('.menu-hidden').slideToggle();
		$(this).find('.arrow-d').toggleClass('arrow-d-rot');
	});
});
$(function(){
	$('.j_toggler').on('click', function(){
		var 
			subs = $(this).next(),
			childs = subs.find('.straightBox');
		if(subs.hasClass('v_hidden')){
			subs.show(200);
			subs.removeClass('v_hidden ');
			subs.prepend('<div class = "j_subs substree blackLeftBorder">');
			childs.each(function(){
				$(this).append('<div class = "j_hyphen hyphen">');
			});
		}else{
			subs.hide(200);
			subs.addClass('v_hidden ');
			subs.remove('.j_subs')
		}
	})
});
$(function(){
	var imgs=$('.zhasnhi>img');
	var lise=$('.right>ul>li');
	console.log(lise);
	imgs.hide().eq(0).show();
	lise.click(function(){
		index=$(this).index();
		lise.removeClass('click').eq(index).addClass('click');
		imgs.fadeOut().eq(index).fadeIn();

	});
})
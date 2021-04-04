$(function(){
	//컴퓨터이미지 호버하면 자동 스크롤
	$('.css_device .pc_main_page').hover(function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:ah-imgh},4000);

	},function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:0},4000);
	});
	
});

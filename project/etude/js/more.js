//그래픽영역 호버기능
$(function(){
	var menu=$('.tab_content ul li');
	menu.find('.hover').hide();
	menu.hover(function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		
		ti.fadeIn(300);
	},function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		
		ti.fadeOut(300);
	});
	
	$('.loadmore').on('click',function(){
	$('.hide').slideDown(400);
	$(".loadmore").css({"display":"none",});
	$(".close").css({"display":"block",});
	});

	$('.close').on('click',function(){
	$('.hide').slideUp(400);
	$(".loadmore").css({"display":"block",});
	$(".close").css({"display":"none",});
	});
	
});

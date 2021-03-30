$(function(){

    //subslide
    var slide1=$('.play>ul.slide1'); //슬라이드 이미지1

    var slideWidth=slide1.width();

    //슬라이드 이미지를 감싸는 li
    var slideList1=$('.play>ul.slide1>li');

    var slideListWidth1=$('.play>ul>li').width();//상단 슬라이드 배너 리스트영역
    var slideListwidth2=$('.ip2Wrap>ul>li').width();//하단 슬라이드 배너 리스트영역

    var current=0;
    var current5=0;

    var setInterval01;

	mainSlide1()
	function mainSlide1(){
		setInterval01=setInterval(function(){
			slide1.stop().animate({left:-slideListWidth1},500,function(){
                $('ul.slide1>li:first').insertAfter('ul.slide1>li:last'); 
                //슬라이드 다음이미지 삽입하기
				slide1.css('left',0);
			});
		},2500);
	}	
	
	
	$('.slide1, .prev1_1, .next1_1').hover(function(){
		clearInterval(setInterval01);
	},function(){
		mainSlide1();
	});
	
	function next1_1(){
		slide1.stop().animate({left:-slideListWidth1},500,function(){  
			$('ul.slide1>li:first').insertAfter('ul.slide1>li:last'); 
			slide1.css('left',0);
		});
	}
	function prev1_1(){
		$('ul.slide1>li:last').insertBefore('ul.slide1>li:first');  //슬라이드 이전이미지 삽입하기
		slide1.css('left',-slideListWidth1);
		slide1.animate({left:0},500);
	}
	
	$('.prev1_1').click(function(){
		prev1_1();
	});
	$('.next1_1').click(function(){
		next1_1();
	}); // slide1

});
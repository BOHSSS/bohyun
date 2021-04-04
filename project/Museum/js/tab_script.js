$(function(){

    //상단배너
    $('.top_event').find('.close_btn').on('click',function(){
        $('.top_event').slideUp(1000);
    });


    //tabmenu
    $('.tabSet').each(function(){
        var topDiv=$(this);
        var anchors=topDiv.find('ul.tabs a');
        var playDivs=topDiv.find('div.play');
        var lastAnchor;
        var lastPlay;
        anchors.show();
        lastAnchor=anchors.filter('.tabOn');
        lastPlay=$(lastAnchor.attr('href'));
        playDivs.hide();
        lastPlay.show();
        anchors.click(function(event){ //앵커에 클릭시 이벤트
            var currentAnchor=$(this);
            var currentPannel=$(currentAnchor.attr('href'));
            lastAnchor.removeClass('tabOn'); //온해제
            currentAnchor.addClass('tabOn');//해당 앵커 온

            lastPlay.hide();
            currentPannel.show(); //현재 패널 보이기

            lastAnchor=currentAnchor;
            lastPlay=currentPannel;
            return false;

        });
    });

    //tabSlide

    var slide1=$('.play>ul.slide1'); //슬라이드 이미지1
    var slide2=$('.play>ul.slide2'); //슬라이드 이미지1
    var slide3=$('.play>ul.slide3'); //슬라이드 이미지1
    var slide4=$('.play>ul.slide4'); //슬라이드 이미지1
    var slide5=$('.play>ul.slide5'); //슬라이드 이미지1

    var slideWidth=slide1.width();

    //슬라이드 이미지를 감싸는 li
    var slideList1=$('.play>ul.slide1>li');
    var slideList2=$('.play>ul.slide2>li');
    var slideList3=$('.play>ul.slide3>li');
    var slideList4=$('.play>ul.slide4>li');
    var slideList5=$('.play>ul.slide5>li');
    var slideListWidth1=$('.play>ul>li').width();//상단 슬라이드 배너 리스트영역
    var slideListwidth2=$('.ip2Wrap>ul>li').width();//하단 슬라이드 배너 리스트영역

    var current=0;
    var current5=0;

    var setInterval01;
    var setInterval02;
    var setInterval03;
    var setInterval04;
    var setInterval05;
    var btnList1=$('ul.btn1>li');//인터파크홀 작은버튼


	mainSlide1()
	function mainSlide1(){
		setInterval01=setInterval(function(){
			slide1.stop().animate({left:-slideListWidth1},500,function(){
                $('ul.slide1>li:first').insertAfter('ul.slide1>li:last'); 
                //슬라이드 다음이미지 삽입하기
				slide1.css('left',0);
			});
		},2000);
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


	mainSlide2()
	function mainSlide2(){
		setInterval02=setInterval(function(){
			slide2.stop().animate({left:-slideListWidth1},500,function(){
				$('ul.slide2>li:first').insertAfter('ul.slide2>li:last');
				slide2.css('left',0);
			});
		},2000);
	}	
	$('.slide2, .prev2_1, .next2_1').hover(function(){
		clearInterval(setInterval02);
	},function(){
		mainSlide2();
	});
	
	function next2_1(){
		slide2.stop().animate({left:-slideListWidth1},500,function(){
			$('ul.slide2>li:first').insertAfter('ul.slide2>li:last');
			slide2.css('left',0);
		});
	}
	function prev2_1(){
		$('ul.slide2>li:last').insertBefore('ul.slide2>li:first');
		slide2.css('left',-slideListWidth1);
		slide2.animate({left:0},500);
	}
	
	$('.prev2_1').click(function(){
		prev2_1();
	});
	$('.next2_1').click(function(){
		next2_1();
	}); // slide2
	

	mainSlide3()
	function mainSlide3(){
		setInterval03=setInterval(function(){
			slide3.stop().animate({left:-slideListWidth1},500,function(){
				$('ul.slide3>li:first').insertAfter('ul.slide3>li:last');
				slide3.css('left',0);
			});
		},2000);
	}	
	$('.slide3, .prev3_1, .next3_1').hover(function(){
		clearInterval(setInterval03);
	},function(){
		mainSlide3();
	});
	
	function next3_1(){
		slide3.stop().animate({left:-slideListWidth1},500,function(){
			$('ul.slide3>li:first').insertAfter('ul.slide3>li:last');
			slide3.css('left',0);
		});
	}
	function prev3_1(){
		$('ul.slide3>li:last').insertBefore('ul.slide3>li:first');
		slide3.css('left',-slideListWidth1);
		slide3.animate({left:0},500);
	}
	
	$('.prev3_1').click(function(){
		prev3_1();
	});
	$('.next3_1').click(function(){
		next3_1();
	}); // slide3
	
	mainSlide4()
	function mainSlide4(){
		setInterval04=setInterval(function(){
			slide4.stop().animate({left:-slideListWidth1},500,function(){
				$('ul.slide4>li:first').insertAfter('ul.slide4>li:last');
				slide4.css('left',0);
			});
		},2000);
	}	
	$('.slide4, .prev4_1, .next4_1').hover(function(){
		clearInterval(setInterval04);
	},function(){
		mainSlide4();
	});
	
	function next4_1(){
		slide4.stop().animate({left:-slideListWidth1},500,function(){
			$('ul.slide4>li:first').insertAfter('ul.slide4>li:last');
			slide4.css('left',0);
		});
	}
	function prev4_1(){
		$('ul.slide4>li:last').insertBefore('ul.slide4>li:first');
		slide4.css('left',-slideListWidth1);
		slide4.animate({left:0},500);
	}
	
	$('.prev4_1').click(function(){
		prev4_1();
	});
	$('.next4_1').click(function(){
		next4_1();
	}); // slide4	


    //하단슬라이드
    mainSlide5()
    function mainSlide5(){

        setInterval05=setInterval(function(){
            slide5.stop().animate({left:-slideListwidth2},500, function(){
                $('ul.slide5>li:first').insertAfter('ul.slide5>li:last');
                slide5.css('left',0);
            });
            btnList1.removeClass('bg_black');
            current5++;
            if(current5==btnList1.size()){
                current5=0;
            }
            btnList1.eq(current5).addClass('bg_black');
        },2000);
    }

    $('.slide5, btn5, .prev5_1, .next5_1').hover(function(){
        clearInterval(setInterval05);
    }, function(){
        mainSlide5();
    });

    function prev5_1(){
        $('ul.slide5>li:last').insertBefore('ul.slide5>li:first');
        slide5.css('left', -slideListwidth2);
        slide5.animate({left:0},500);

        btnList1.removeClass('bg_black');
        current5--;
        if(current5==btnList1.size()){
            current5=0;
        }
        btnList1.eq(current5).addClass('bg_black');
    }

    function next5_1(){
        slide5.stop().animate({left:-slideListwidth2},500, function(){
            $('ul.slide5>li:first').insertAfter('ul.slide5>li:last');
            slide5.css('left',0);
        });
        btnList1.removeClass('bg_black'); //동그란버튼 활성화 해제
        current5++;
        if(current5==btnList1.size()){ //버튼 5번째이면 0으로
            current5=0;
        }
        btnList1.eq(current5).addClass('bg_black');
    }

    $('.prev5_1').click(function(){
        prev5_1();
    });

    $('.next5_1').click(function(){
        next5_1();
    });  

});
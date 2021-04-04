$(function(){


    //배너 슬라이드
    
    var visual=$('#brandVisual>ul>li'); // 슬라이드 이미지
	var button=$('#buttonList>li');	 // 버튼
	var leftBtn=$('.btnImg .prev');
	var rightBtn=$('.btnImg .next');
	var current=0 // 현재 보이는 이미지
	var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함
	
	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
		
			current++;
			
			if(current == visual.size()) current=0;
			
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next, '100%',0);
			pnn.addClass('on');
		}, 3000);
	};
	
	function move(tg, start, end){
		tg.css('left', start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'}); //점점빨라지게
	}  
	
	
	//버튼을 클릭 했을 때
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index(); // 선택한 버튼의 인덱스 번호
		
		button.removeClass('on'); // 현재 활성화된 'on'이 두 번 생기는 일을 방지
		tg.addClass('on'); // 선택한 버튼에 'on' 활성화
		
		move1(i); 
		}
	});
	
	function move1(i){
		if(current == i) return // 현재 보이는 이미지가 i랑 같으면 종료
		
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i)
		
		currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500); // 현재 보이는 이미지 이동, %가 붙어서 ''안에 작성
		nextEl.css({left: '100%'}).stop().animate({left: 0}, 500); // 이미지 이동
		
		current=i;
	}
	
	
	
	//호버시 멈추게 하는 기능
	$('#wrap').on({
		mouseover:function(){
			clearInterval(setIntervalId);  //setInterval()메서드로 설정된 타이머를 해제. 
		}, mouseout:function(){
			timer();
		}
	});

	
	
	/* 화살표클릭 */
	rightBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
        	move(prev, 0, '-100%');
			pn.removeClass('on');
			
			
        	current++;

        	if(current == visual.size()) current=0;

        	var next=visual.eq(current);
			var pnn=button.eq(current);
        	move(next,'100%', 0);
			pnn.addClass('on');
			return false;
		});	
	
	leftBtn.click(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
        	move(prev, 0, '100%');
			pn.removeClass('on');
			
        	current--;
			

        	if(current == -visual.size()) current=0;

        	var next=visual.eq(current);
			var pnn=button.eq(current);
        	move(next,'-100%', 0);
			pnn.addClass('on');
			return false;
		});	






    //공지 슬라이드
    var current1=0;
    var subtext=$('.sub_text>li');
    var tim;
  
    function set(){ //set객체를 만듬. 
  
        tim = setInterval( function(){ //반복실행되는 서브텍스트들을 tim으로 지정
  
            var prev1=subtext.eq(current1); //현재 초기화된 상태에서 서브텍스트를 prev1에 할당
            move1(prev1, 0, '-100%'); //위로 이동
  
            current1++; //하나씩 추가되어 보여지도록
  
            if(current1==subtext.size()){ //만약 서브텍스트의 사이즈(개수)가 끝까지 갔다면
                current1=0; //초기화
            }
  
            var next=subtext.eq(current1);
            move1(next,'100%',0);
  
        },3500);
    }
  
    set();
  
    $('.sub_text').hover( function(){ //서브텍스트에 마우스 올리면
        clearInterval(tim); //반복실행 해제
    }, function(){      //마우스를 떼면
        set();         //set함수를 다시 불러와 실행
    });
    function move1(tgg,start,end){
        tgg.css('top',start).stop().animate({top:end},800); //위쪽으로
    }
  
  
    

    
    
    //sns호버
    $('.cont5_sns>ul>li>a').hover(function(){
        $(this).find('img').css({'transform':'scale(1.1)','transition':'all 0.2s'});
    }, function(){
        $(this).find('img').css({'transform':'scale(1)'});
    });
    

    
    //top버튼
    $('#top_btn>a').hide();
        $(window).scroll(function(){ //브라우저에 스크롤 변화가 발생하면 호출
            
            if($(this).scrollTop()>500){ //스크롤의 위치가 500보다 크다면
                $('#top_btn>a').fadeIn(); //버튼이 서서히 나타나도록
            } else{
                $('#top_btn>a').fadeOut(); //그렇지 않다면 버튼 서서히 사라지도록
            }

        });
    $('#top_btn>a').click(function(){ //탑버튼을 클릭했을 때 (click이벤트)
        $('html,body').animate({scrollTop:0},400); //스크롤의 위치를 탑 0으로 이동
        return false; //원래 가지고 있는 링크속성 무시
    });

	
	
});

	

	
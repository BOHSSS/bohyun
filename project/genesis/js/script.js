$(function(){

    //슬라이드 이미지
    var visual = $('.pc_main>ul>li'); //슬라이드 이미지
    var button = $('.slide_num>ul>li'); //슬라이드 버튼
    var current = 0 ; //현재상태 초기화
    var setIntervalId; //변수선언
    
    function move(tg, start, end){ //move함수를 이용해 해당객체를 시작과 끝지점으로 이동
        tg.css('left',start).stop().animate({left:end},500);
    }
    
    function timer(){ //일정시간 호출하기위해 타이머를 만듬.
    
        setIntervalId = setInterval(function(){ //반복실행 지정
    
            var prev = visual.eq(current);//현재 자신의 위치를 prev에 담고
            var pn = button.eq(current);//현재 순번 버튼을 pn으로 담고
            move(prev, 0, '-100%'); //오른쪽에서 왼쪽으로 이동
    
            pn.removeClass('on'); //순번 버튼 on해제
            current++; //현재 상태에서 하나씩 추가
    
            if(current==visual.size()){current=0;}
            //비주얼 이미지의 사이즈가 끝까지 갔다면 current에 담아서 초기화 
    
            var next = visual.eq(current);
            var pnn = button.eq(current);
            move(next,'100%',0); 
            pnn.addClass('on')
        },3000);
    
    }
    
        timer();
    
        $('.sd_stop').click(function(){ //stop버튼을 클릭하면
            clearInterval(setIntervalId); //반복취소
            $('.sd_stop').hide();
            $('.sd_start').show();
        });
    
        $('.sd_start').click(function(){ //stop버튼을 클릭하면
            timer(); //반복실행
            $('.sd_stop').show();
            $('.sd_start').hide();
        });
    
        button.click(function(){
    
            var tg = $(this); //클릭한 버튼을 tg라 하고
            var i = tg.index(); //클릭되어진 요소(인덱스0~2)를 i라하고
            button.removeClass('on');
            tg.addClass('on');
            movel(i); //버튼을 누르면 현재 화면에서 해당요소의 이미지가 보여지도록
    
        });
    
        function movel(i){
            if(current==i){return} //i가 현재화면과 같다면 되돌아가~~
            var currentEl=visual.eq(current);
            var nextEl=visual.eq(i);
    
            currentEl.css({left:0}).stop().animate({left:'-100%'},500);
            nextEl.css({left:'100%'}).stop().animate({left:0},500);
    
            current=i;
        }
    
    
    
});
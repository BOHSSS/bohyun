jQuery(document).ready(function(){


    
//검색 모달
var page = $('body>div');
var search_btn = page.find('.search');
var search = page.find('#search');
var search_close =search.find('.btn-close');

search_btn.click(function(){
    search.css('display','block');
});

search_close.click(function(){
    search.css('display','none');
});

//메인 슬라이드
var visual=$('#slide_img_wrap1 ul li');
var button=$('.slide_num>ul>li');
var leftBtn=$('#btnImg .prev');
var rightBtn=$('#btnImg .next');
var current=0;
var setIntervalId;

function move(tg, start, end){  //매개 변수 tg, start, end를 만든다.
    tg.css('left',start).stop().animate({left: end},500);
}
function timer(){ //사용자 정의함수
    setIntervalId=setInterval(function(){
        var prev=visual.eq(current);
        var pn=button.eq(current);
        move(prev, 0, '-100%'); //target은 prev
        pn.removeClass('on');
        current++; //1씩 증가
        if(current==visual.size()){current=0;}
        var next=visual.eq(current);
        var pnn=button.eq(current);
        move(next, '100%', 0)
        pnn.addClass('on');
    },3000);
}

timer();

$('#slide_img_wrap1').on({mouseover:function(){
    clearInterval(setIntervalId);
},mouseout:function(){
    timer();
}
});


button.click(function(){
    var tg=$(this);
    var i=tg.index();

    button.removeClass('on');
    tg.addClass('on');
    move1(i);

});

function move1(i){
    if(current==i){return}
    var currentEl=visual.eq(current);
    var nextEl=visual.eq(i);
    currentEl.css({left:0}).stop().animate({left:'-100%'},500);
    nextEl.css({left:'100%'}).stop().animate({left:0},500);

    current=i;
}

rightBtn.click(function(){
    var prev=visual.eq(current);
        var pn=button.eq(current);
        move(prev, 0, '-100%');
        pn.removeClass('on');
        current++; 
        if(current==visual.size()){current=0;}
        var next=visual.eq(current); 
        var pnn=button.eq(current);
        move(next, '100%', 0)
        pnn.addClass('on');

});

leftBtn.click(function(){
    var prev=visual.eq(current)
        var pn=button.eq(current);
        move(prev, 0, '100%');
        pn.removeClass('on');
        current--; //1씩 감소
        if(current==-visual.size()){current=0;}
        var next=visual.eq(current);
        var pnn=button.eq(current);
        move(next, '-100%', 0)
        pnn.addClass('on');
});


//마카롱 슬라이드
var visual4=$('#cont4_img ul li');
var current4=0;
var setIntervalIdd;
var leftBtn1=$('.btn .prev');
var rightBtn1=$('.btn .next');

function move5(tg, start, end) {
    tg.css('left',start).stop().animate({left:end},700);
}

function timer1() {
    setIntervalIdd=setInterval(function () {
        var prev=visual4.eq(current4);
        move5(prev, 0, '-100%');
        current4++;
        if(current4==visual4.size()){current4=0;}
        var next=visual4.eq(current4);
        move5(next, '100%', 0);
    },3000);
}

timer1();

rightBtn1.click(function() {
    var prev=visual4.eq(current1);
        move5(prev, 0, '-100%');
        current4++;
        if(current4==visual4.size()){current4=0;}
    var next=visual4.eq(current4);
        move5(next, '100%', 0)
});

leftBtn1.click(function() {
    var prev=visual4.eq(current4);
        move5(prev, 0, '100%');
        current4--;
        if(current4==visual4.size()){current4=0;}
    var next=visual4.eq(current4);
        move5(next, '-100%', 0)
});

//스와이퍼
var swiper=0;
$(window).on("load",function () {
    swiper = new Swiper('.swiper-container',{
        slidesPerView: 'auto',
        spaceBetween:10,
        freeMode:false,
    });
});



});
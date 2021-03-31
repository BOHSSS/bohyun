$(function(){
    $('.type').typed({
        strings:["웹 포트폴리오 사이트 입니다."+"<br>"+"WEB PUBLISHER"+"<br>"+"사보현 입니다."],
        typeSpeed:150, //타이핑속도
        backDelay:200,
        loop: true //false는 한번만 실행
    });
});

$(function(){
    //WHEEL SCROLL
    var wheelDelta=0; 
    var browser=0; 
    var wheeltime=false;
    
    $('.section').each(function(index){
        $(this).on('mousewheel DOMMouseScroll', function(event){
            event.preventDefault(); 
            
            //wheeltime
            if(wheeltime==true){
                return;
            }
            setTimeout(function(){
                wheeltime=false;
            },1000)
            wheeltime=true;
            browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');

            if(browser>=0){
                wheelDelta=-event.detail*40;
            }else{
                wheelDelta = event.originalEvent.wheelDelta;
            }
            console.log(wheelDelta);
            
            if(wheelDelta<0){
                if(index< $('.section').length-1){
                    $('html,body').stop().animate({scrollTop: $(this).next().offset().top },500);
                }
            }else{
                if(index>0){
                    $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},500);
                }
            }
            
        });
    });

    //MENU BUTTON
    var $menuListMain = $(".left .menu_list .main > li > a"),
        $scrollDownBtn = $("#title .scrollIcon a"),
        $mobileMenu=$("#title .m_nav .nav .nav_list li a");
    
    $menuListMain.add($scrollDownBtn).add($mobileMenu).on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, "easeInOutQuint", function () {
                window.location.hash = hash;
            });
        }
    });

    //MOBILE MENU BUTTON
    var mBtn=$("#title .m_nav .nav .menuBtn .hamburger"),
        mMenu=$("#title .m_nav .nav .nav_list");
    
    mBtn.click(function(){
        $(this).toggleClass("active");
        mMenu.stop().slideToggle(500);
    });
    
    
    
    //SWIPER
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    //MENU
    var $menuBtn = $("#frame .left .menuBtn .hamburger"),
      $btnCaption = $("#frame .left .menuBtn .caption"),
      $menuList = $("#frame .left .menu_list"),
      $navTop = $("#frame .top"),
      $navBottom = $("#frame .bottom"),
      $navLeft = $("#frame .left .white"),
      $navRight = $("#frame .right"),
      $auroraBg = $("#frame .left .gradient"),
      $eachMenuList = $("#frame .left .menu_list .main > li");
    
    $menuBtn.on({ 
      
    mouseenter: function() { 

      if ($navLeft.width() === 40) {
        $menuBtn.children(".line").eq(1).animate({ width: "18px", margin: "6px 4px" }, 200, "swing");
        $btnCaption.animate({ top: "24px", left:"58px", letterSpacing: "1px" }, 100, "swing");
        $navLeft.animate({ width: "105px" }, 300, "easeOutBack");
        menuRotate(-90, 0, $btnCaption);
      }
    },

    mouseleave: function() {

      if ($navLeft.width() > 40 && $navLeft.width() <= 120) {
        $menuBtn.children(".line").eq(1).animate({ width: "26px", margin: "6px 0" }, 200, "swing");
        $btnCaption.animate({ top: "21px", left: "45px" , letterSpacing: "4px" }, 100, "swing");
        $navLeft.animate({ width: "40px" }, 300, "easeInOutBack" );
        menuRotate(0, -90, $btnCaption);
      };
    },

    click: function(e) { 
        e.preventDefault();
        if ($navLeft.width() !== 400) {
        openMenu();
      }else if ($navLeft.width() === 400) { 
        closeMenu();
      };
        
    }
  }); 
    
      function menuRotate(d1, d2, elmt) {
    $({deg: d1}).animate({deg: d2}, { duration: 100,
      step: function(now) {
        elmt.css({
          "-webkit-transform": "rotate(" + now + "deg)",
          "-moz-transform": "rotate(" + now + "deg)",
          "-ms-transform": "rotate(" + now + "deg)",
          "-o-transform": "rotate(" + now + "deg)",
          transform: "rotate(" + now + "deg)"
        });
      }
    });
  }
  
  function transY(d1, d2, d3, elmt) { 
    $({ deg: d1 }).animate({ deg: d2 }, { duration: 100,
      step: function (now) {
        elmt.css({
          "-webkit-transform": "translateY(" + now + "px) rotate(" + d3 + "deg)",
          "-moz-transform": "translateY(" + now + "px) rotate(" + d3 + "deg)",
          "-ms-transform": "translateY(" + now + "px) rotate(" + d3 + "deg)",
          "-o-transform": "rtranslateY(" + now + "px) rotate(" + d3 + "deg)",
          transform: "translateY(" + now + "px) rotate(" + d3 + "deg)"
        });
      }
    });
  }
     function openMenu() {
    menuRotate(0, 135, $menuBtn);
    transY(0, 10, 0, $menuBtn.children(".line").eq(0));
    transY(0, -6, 90, $menuBtn.children(".line").eq(2));
    $menuBtn.children(".line").eq(1).animate({ opacity: "0" }, 200, "swing");
    $btnCaption.animate({ opacity: "0" }, 200, "swing");
    $menuBtn.animate({ left: "88px" }, 200, "swing");
    $navTop.animate({ height: "60px", padding: "0 60px" }, 300, "swing");
    $navBottom.animate({ height: "60px" }, 300, "swing");
    $navLeft.animate({ width: "400px" }, 300, "swing");
    $navRight.animate({ width: "60px" }, 300, "swing");
    $menuList.animate({ left: "160px" }, 300, "swing");
    $auroraBg.fadeTo(300, 0.4);
    $("html, body").css('overflow', 'hidden');
  }
  
  function closeMenu() {
    menuRotate(135, 0, $menuBtn);
    transY(10, 0, 0, $menuBtn.children(".line").eq(0));
    transY(-6, 0, 0, $menuBtn.children(".line").eq(2));
    $menuBtn.children(".line").eq(1).animate({ width: "26px", margin: "6px 0", opacity: "1" }, 200, "swing");
    menuRotate(0, -90, $btnCaption);
    $btnCaption.animate({ top: "21px", left: "45px", letterSpacing: "4px", opacity: "1" }, 200, "swing");
    $menuBtn.animate({ left: "21px" }, 200, "swing");
    $navTop.animate({ height: "40px", padding: "0 40px" }, 300, "swing");
    $navBottom.animate({ height: "40px" }, 300, "swing");
    $navLeft.animate({ width: "40px" }, 300, "swing");
    $navRight.animate({ width: "40px" }, 300, "swing");
    $menuList.animate({ left: "-300px" }, 300, "swing");
    $auroraBg.fadeOut(300);
    $("html, body").css('overflow', 'visible');
  };
    
  $eachMenuList.add($auroraBg).on("click", function(){
    closeMenu();
  });

});
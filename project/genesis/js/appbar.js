$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
);

$(function(){ 
	$('.appBarBtn').on({  
		click:	function(){ 
			$('.bar').toggleClass('addAppbar');  
		}
	})
});


let open = false;

$(document).ready(function(){
	$(".appBarBtn").click(function(){
		if(open == false){
			$('.menu_bg').show();
			$('.sidebar_menu').show().animate({
				left:0
			});
	        open = true;
		}else if(open == true){
			$('.menu_bg').hide(); 
			$('.sidebar_menu').animate({
					left: '-' + 50 + '%'
						   },function(){
				$('.sidebar_menu').hide(); 
				}); 	
			
			open = false;

		}
			
	});
});


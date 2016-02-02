$(document).ready(function(){
	$('.welcome-design').hover(function(){
		$('.design-desc').toggleClass('hidden');
	});

	$('.welcome-dev').hover(function(){
		$('.dev-desc').toggleClass('hidden');
	});

	$(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        console.log(sc);
        if(sc<50){
        	$('#logo').css("top", 60-sc);
        } else if(sc>50){
        	$('#logo').css("top", 10);
        };

        if(sc<55){
            $('#head-nav').css("margin-top", 50-sc);
        	$('#head-nav').css("margin-bottom", 50-sc);
        } else if(sc>55){
        	$('#head-nav').css("margin-top", -5);
        	$('#head-nav').css("margin-bottom", -5);
        };

        if(sc<100){
        	$('header').css("height", 200-sc);
        	$('header').css("background-color", "rgba(255, 255, 255,"+sc*.007+")");
        } else if(sc>100){
        	$('header').css("height", 100);
        	$('header').css("background-color", "rgba(255, 255, 255, 0.7)");
        };
    });
});

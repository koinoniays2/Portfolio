$(document).ready(function() {
// 스크롤 부드럽게
    $('nav a').click(function(e){
        $.scrollTo(this.hash || 0, 400); // 속도 조절, 숫자가 작을수록 빠름
        e.preventDefault();
    });
// 토글 클릭시 페이드인
    $("#toggle-icon").click(function(){
        $("#menu-nav").fadeToggle();
    });

// 데스크톱 브라우저인 경우 마우스 호버를 통해 서브메뉴를 표시
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('#menu-nav ul li').mouseenter(function() {
            $(this).find('.sub-menu').stop().slideDown(200);
        }).mouseleave(function() {
            $(this).find('.sub-menu').stop().slideUp(200);
        });
// 모바일 기기인 경우 클릭을 통해 서브메뉴를 표시
    } else {
        $('#menu-nav ul li').click(function() {
            if($('.sub-menu').is(':visible')) {
                $('.sub-menu').slideUp(200);
            }else {
                $(this).find('.sub-menu').slideDown(200);
            }
        });

    }
});
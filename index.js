$(document).ready(function() {
// 토글 클릭시 페이드인
    $("#toggle-icon").click(function(){
        $("#menu-nav").fadeToggle();
    });

// 클릭 이벤트
    $('#menu-nav ul li').hover(function() {
        let subMenu = $(this).find('.sub-menu');
        // 서브메뉴가 열려있으면 닫고, 아니면 열기
        if (subMenu.is(':visible')) {
            subMenu.stop().slideUp(200);
        } else {
            subMenu.stop().slideDown(200);
        }
    });
// 서브메뉴 클릭시 닫기
    $('#menu-nav').on('click', '.sub-menu ul li', function() {
        $(this).closest('.sub-menu').stop().slideUp(200);
    });
// 스크롤 부드럽게
    $('nav a').click(function(e){
        $.scrollTo(this.hash || 0, 400); // 속도 조절, 숫자가 작을수록 빠름
        e.preventDefault();
    });
});
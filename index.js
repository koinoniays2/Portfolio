$(document).ready(function() {
// 토글 클릭시 페이드인
    $("#toggle-icon").click(function(){
        $("#menu-nav").fadeToggle();
    });
// 호버시 서브메뉴
    $('#menu-nav ul li').hover(function() {
        $(this).find('.sub-menu').stop().slideDown(300);
    }, function() {
        $(this).find('.sub-menu').stop().slideUp(300);
    });
// 서브메뉴 클릭시 닫기
    $('#menu-nav ul li').click(function() {
        $(this).find('.sub-menu').stop().slideUp(300);
    });
// 스크롤 부드럽게
    $('nav a').click(function(e){
        $.scrollTo(this.hash || 0, 400); // 속도 조절, 숫자가 작을수록 빠름
        e.preventDefault();
    });
});
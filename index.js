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
            let subMenu = $(this).find('.sub-menu');
            subMenu.stop().slideToggle(200);
        });
    }
// 클릭 & 터치시 배경색 적용
    $('#menu-nav .sub-menu li').on('click touchstart', function() {
        $(this).addClass('active');
            setTimeout(function() {
                $('#menu-nav .sub-menu li').removeClass('active');
            }, 300);
    });
// 서브메뉴 클릭시 닫기
    $('#menu-nav').on('click touchstart', '.sub-menu ul li', function() {
        $(this).closest('.sub-menu').stop().slideUp(200);
    });
// 다른 곳 클릭시 닫기
    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('#menu-nav ul li').length) {
            $('#menu-nav ul li .sub-menu').stop().slideUp(200);
        }
    });
/* 
//서브메뉴 클릭 이벤트
    $('#menu-nav ul li').click(function() {
        let subMenu = $(this).find('.sub-menu');
        // 서브메뉴가 열려있으면 닫고, 아니면 열기
        if (subMenu.is(':visible')) {
            subMenu.stop().slideUp(200);
        } else {
            subMenu.stop().slideDown(200);
        }
    });*/
/*
// 마우스 호버
    $('#menu-nav ul li').mouseenter(function() {
        let subMenu = $(this).find('.sub-menu');
        if (!subMenu.is(':visible')) {
            subMenu.stop().slideDown(200);
        }
    })
// 마우스가 벗어나면 닫기
    $('#menu-nav ul li').mouseleave(function() {
        $(this).find('.sub-menu').stop().slideUp(200);
    });
*/
});
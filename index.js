$(document).ready(function () {
// 스크롤 부드럽게
    $('nav a').click(function (e) {
        $.scrollTo(this.hash || 0, 400); // 속도 조절, 숫자가 작을수록 빠름
        e.preventDefault();
    });
// 토글 클릭시 슬라이드
    $("#toggle-icon").click(function () {
        $("#menu-nav").slideToggle(200);
    });

    function setBackWhite() {
        $('#header').css('background-color', '#ffffff');
        $('.sub-menu').css('background-color', '#ffffff');}
    function setBackOrigin() {
        $('#header').css('background-color', '');
        $('.sub-menu').css('background-color', '');}

// 데스크톱 브라우저인 경우 마우스 호버를 통해 서브메뉴를 표시, 호버시 헤더 및 서브메뉴 배경색 변경
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('#menu-nav ul li').mouseenter(function () {
            $(this).find('.sub-menu').stop().slideDown(300);
            setBackWhite();
        }).mouseleave(function () {
            $(this).find('.sub-menu').stop().hide();
            setBackOrigin();
        });
// 서브메뉴 호버시 li 백그라운드
        $('#header .sub-menu li').hover(function() {
            $(this).css('background-color', '#fbc2eb');
        }, function() {
            $(this).css('background-color', ''); // 마우스가 벗어날 때 원래 스타일로 복원
        });
// 모바일 기기인 경우 클릭을 통해 서브메뉴를 표시
    } else {
        $('#menu-nav ul li').on('click', function () {
            let submenu = $(this).find('.sub-menu');
            // 현재 서브메뉴가 열려있는지 확인하여 토글
            if (submenu.is(':visible')) {
                submenu.stop().slideUp(300);
            } else {
                // 다른 서브메뉴를 닫은 후 현재 서브메뉴 열기
                $('.sub-menu').not(submenu).slideUp(300);
                submenu.stop().slideDown(300);
            }
        });
    }
// 스크롤이 발생하면 메뉴 닫기(모바일에서만)
    let scrollTimeout;
    $(window).scroll(function() {
// 스크롤이 멈추면 1초 후 배경색 돌아옴
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            $('#header').css('background-color', '');
        }, 100);
        const windowWidth = $(window).width();
        if (windowWidth <= 640) {
            $('#menu-nav').hide();
            $('.sub-menu').hide();
        }
    });
// 토글 클릭시 헤더 백그라운드
    $('#toggle-icon').click(function() {
        const headerBackgroundColor = $('#header').css('background-color');
        if (headerBackgroundColor === 'rgb(255, 255, 255)' || headerBackgroundColor === '#ffffff') {
            setBackOrigin();
        } else {
            setBackWhite();
        }
    });
});
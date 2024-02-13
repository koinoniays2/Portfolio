$(document).ready(function() {
    $("#toggle-icon").click(function(){
        $("#menu-nav").fadeToggle();
    });

    $('nav a').click(function(e){
        $.scrollTo(this.hash || 0, 400); // 속도 조절, 숫자가 작을수록 빠름
        e.preventDefault();
    });
});
 window.scrollReveal = new scrollReveal();

 

$(document).ready(function () {
    $("ul[data-liffect] li").each(function (i) {
        $(this).attr("style", "-webkit-animation-delay:" + i * 300 + "ms;"
                + "-moz-animation-delay:" + i * 300 + "ms;"
                + "-o-animation-delay:" + i * 300 + "ms;"
                + "animation-delay:" + i * 300 + "ms;");
        if (i == $("ul[data-liffect] li").size() -1) {
            $("ul[data-liffect]").addClass("play")
        }
    });
});

var nice = false;
$(document).ready(
    function() {
        nice = $("html").niceScroll();
    }
);


// Defer pointer events on animated header
$(window).load(function (){
  $('header').css({
    'pointer-events': 'auto'
  });
});

$(function() {
    
    $(".imgLiquidFill").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "top"
    }); 
    
});


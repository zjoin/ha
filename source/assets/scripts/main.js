//$(document).ready(function() {
//  $(".animsition").animsition({
//    inClass               :   'fade-in',
//    outClass              :   'fade-out',
//    inDuration            :    3500,
//    outDuration           :    800,
//    linkElement           :   '.animsition-link', 
//    touchSupport          :    true, 
//    loading               :    true,
//    loadingParentElement  :   'body', 
//    loadingClass          :   'animsition-loading',
//    unSupportCss          : [ 'animation-duration',
//                              '-webkit-animation-duration',
//                              '-o-animation-duration'
//                            ]
// 
//  });
//}); 

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
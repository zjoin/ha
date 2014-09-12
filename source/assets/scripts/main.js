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


!function(a,b){var c=function(a,b,c){var d;return function(){function g(){c||a.apply(e,f),d=null}var e=this,f=arguments;d?clearTimeout(d):c&&a.apply(e,f),d=setTimeout(g,b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",c(a)):this.trigger(b)}}(jQuery,"smartresize"),function(a){a.fn.fluidbox=function(b){var c=a.extend(!0,{viewportFill:.95,debounceResize:!0,stackIndex:1e3,stackIndexDelta:10,closeTrigger:[{selector:".fluidbox-overlay",event:"click"},{selector:"document",event:"keyup",keyCode:27}]},b);c.stackIndex<c.stackIndexDelta&&(c.stackIndexDelta=c.stackIndex),$fbOverlay=a("<div />",{"class":"fluidbox-overlay",css:{"z-index":c.stackIndex}});var f,d=this,e=a(window),g=function(){a(".fluidbox-opened").trigger("click")},h=function(a){var b=a.find("img"),d=a.find(".fluidbox-ghost"),g=a.find(".fluidbox-wrap"),h=a.data(),i=0,j=0;f>b.data().imgRatio?(i=h.natHeight<e.height()*c.viewportFill?h.natHeight:e.height()*c.viewportFill,h.imgScale=i/b.height()):(j=h.natWidth<e.width()*c.viewportFill?h.natWidth:e.width()*c.viewportFill,h.imgScale=j/b.width());var k=e.scrollTop()-b.offset().top+.5*b.data("imgHeight")*(b.data("imgScale")-1)+.5*(e.height()-b.data("imgHeight")*b.data("imgScale")),l=.5*b.data("imgWidth")*(b.data("imgScale")-1)+.5*(e.width()-b.data("imgWidth")*b.data("imgScale"))-b.offset().left,m=h.imgScale;d.css({transform:"translate("+parseInt(10*l)/10+"px,"+parseInt(10*k)/10+"px) scale("+parseInt(1e3*m)/1e3+")",top:b.offset().top-g.offset().top,left:b.offset().left-g.offset().left})},i=function(){d.each(function(){j(a(this))})},j=function(a){function i(){h.imgWidth=b.width(),h.imgHeight=b.height(),h.imgRatio=b.width()/b.height(),d.css({width:b.width(),height:b.height(),top:b.offset().top-g.offset().top+parseInt(b.css("borderTopWidth"))+parseInt(b.css("paddingTop")),left:b.offset().left-g.offset().left+parseInt(b.css("borderLeftWidth"))+parseInt(b.css("paddingLeft"))}),h.imgScale=f>h.imgRatio?e.height()*c.viewportFill/b.height():e.width()*c.viewportFill/b.width()}if(f=e.width()/e.height(),a.hasClass("fluidbox")){var b=a.find("img"),d=a.find(".fluidbox-ghost"),g=a.find(".fluidbox-wrap"),h=b.data();i(),b.load(i)}},k=function(b){if(a(this).hasClass("fluidbox")){var d=a(this),e=a(this).find("img"),f=a(this).find(".fluidbox-ghost"),g=a(this).find(".fluidbox-wrap"),i={};0!==a(this).data("fluidbox-state")&&a(this).data("fluidbox-state")?(d.data("fluidbox-state",0).removeClass("fluidbox-opened").addClass("fluidbox-closed"),i.open&&window.clearTimeout(i.open),i.close=window.setTimeout(function(){a(".fluidbox-overlay").remove(),g.css({"z-index":c.stackIndex-c.stackIndexDelta})},10),a(".fluidbox-overlay").css({opacity:0}),f.css({transform:"translate(0,0) scale(1)",opacity:0,top:e.offset().top-g.offset().top+parseInt(e.css("borderTopWidth"))+parseInt(e.css("paddingTop")),left:e.offset().left-g.offset().left+parseInt(e.css("borderLeftWidth"))+parseInt(e.css("paddingLeft"))}),e.css({opacity:1})):a("<img />",{src:e.attr("src")}).load(function(){a("<img />",{src:d.attr("href")}).load(function(){d.data("natWidth",a(this)[0].naturalWidth).data("natHeight",a(this)[0].naturalHeight),d.append($fbOverlay).data("fluidbox-state",1).removeClass("fluidbox-closed").addClass("fluidbox-opened"),i.close&&window.clearTimeout(i.close),i.open=window.setTimeout(function(){a(".fluidbox-overlay").css({opacity:1})},10),a(".fluidbox-wrap").css({zIndex:c.stackIndex-c.stackIndexDelta-1}),g.css({"z-index":c.stackIndex+c.stackIndexDelta}),f.css({"background-image":"url("+e.attr("src")+")",opacity:1}),e.css({opacity:0}),f.css({"background-image":"url("+d.attr("href")+")"}),h(d)})}),b.preventDefault()}};c.closeTrigger&&a.each(c.closeTrigger,function(b){var d=c.closeTrigger[b];"window"!=d.selector?"document"==d.selector?d.keyCode?a(document).on(d.event,function(a){a.keyCode==d.keyCode&&g()}):a(document).on(d.event,g):a(document).on(d.event,c.closeTrigger[b].selector,g):e.on(d.event,g)}),d.each(function(){if(a(this).is("a")&&1===a(this).children().length&&a(this).children().is("img")&&"none"!==a(this).css("display")&&"none"!==a(this).parents().css("display")){var d=a("<div />",{"class":"fluidbox-wrap",css:{"z-index":c.stackIndex-c.stackIndexDelta}}),e=a(this);e.addClass("fluidbox").wrapInner(d).find("img").css({opacity:1}).after('<div class="fluidbox-ghost" />').each(function(){var b=a(this);b.width()>0&&b.height()>0?(j(e),e.click(k)):b.load(function(){j(e),e.click(k)})})}});var l=function(){i();var b=a("a.fluidbox.fluidbox-opened");b.length>0&&h(b)};return c.debounceResize?a(window).smartresize(l):a(window).resize(l),d}}(jQuery);

jQuery(function( $ ){
	$('a.fluidbox').fluidbox();    
});


function openMenu(){var o=$("nav");$(".fa-navicon").on("click",function(){o.toggle(50),$(".content").toggleClass("opac")})}window.scrollReveal=new scrollReveal,$(document).ready(function(){$("ul[data-liffect] li").each(function(o){$(this).attr("style","-webkit-animation-delay:"+300*o+"ms;-moz-animation-delay:"+300*o+"ms;-o-animation-delay:"+300*o+"ms;animation-delay:"+300*o+"ms;"),o==$("ul[data-liffect] li").size()-1&&$("ul[data-liffect]").addClass("play")})});var nice=!1;$(document).ready(function(){nice=$("html").niceScroll()}),$(window).load(function(){$("header").css({"pointer-events":"auto"})}),function(o){"use strict";function n(o){return new RegExp("(^|\\s+)"+o+"(\\s+|$)")}function e(o,n){var e=a(o,n)?t:l;e(o,n)}var a,l,t;"classList"in document.documentElement?(a=function(o,n){return o.classList.contains(n)},l=function(o,n){o.classList.add(n)},t=function(o,n){o.classList.remove(n)}):(a=function(o,e){return n(e).test(o.className)},l=function(o,n){a(o,n)||(o.className=o.className+" "+n)},t=function(o,e){o.className=o.className.replace(n(e)," ")});var s={hasClass:a,addClass:l,removeClass:t,toggleClass:e,has:a,add:l,remove:t,toggle:e};"function"==typeof define&&define.amd?define(s):o.classie=s}(window);var modules={$window:$(window),$html:$("html"),$body:$("body"),$container:$(".container"),init:function(){$(function(){modules.modals.init()})},modals:{trigger:$(".modal-trigger"),modal:$(".modal"),scrollTopPosition:null,init:function(){var o=this;o.trigger.length>0&&o.modal.length>0&&(modules.$body.append('<div class="modal-overlay"></div>'),o.triggers())},triggers:function(){var o=this;o.trigger.on("click",function(n){n.preventDefault();var e=$(this);o.openModal(e,e.data("modalId"))}),$(".modal-overlay").on("click",function(n){n.preventDefault(),o.closeModal()}),modules.$body.on("keydown",function(n){27===n.keyCode&&o.closeModal()}),$(".modal-close").on("click",function(n){n.preventDefault(),o.closeModal()})},openModal:function(o,n){var e=this,a=modules.$window.scrollTop(),l=$("#"+n);e.scrollTopPosition=a,modules.$html.addClass("modal-show").attr("data-modal-effect",l.data("modal-effect")),l.addClass("modal-show"),modules.$container.scrollTop(a)},closeModal:function(){var o=this;$(".modal-show").removeClass("modal-show"),modules.$html.removeClass("modal-show").removeAttr("data-modal-effect"),modules.$window.scrollTop(o.scrollTopPosition)}}};modules.init(),openMenu();
"use strict";function fn(e){$("#search .right ul").html(""),$("<ul></ul>").css({width:$("#search .right input").width(),position:"absolute",border:"1px solid ",left:"0",top:"30px",background:"white","z-index":100}).appendTo("#search .right div");for(var t=e.g,n=0;n<t.length;n++){var i=t[n].q;$("<li></li>").text(i).appendTo("#search .right ul")}}$(function(){function e(e){e.hover(function(){$(this).css("color","#b61d22")},function(){$(this).css("color","#808080")})}function r(e){e.hover(function(){$(this).css({"background-position-y":"-60px"})},function(){$(this).css({"background-position-y":"0"})})}function s(e){$(".carousel img").not($(".carousel img").eq(e)).each(function(){$(this).fadeOut(1500)}),$(".carousel img").eq(e).fadeIn(1500),$(".carousel ul li").not($(".carousel ul li").eq(e)).each(function(){$(this).css({background:"#dddddd"})}),$(".carousel ul li").eq(e).css({background:"#a10000"})}function i(e){for(var t=0,n=0;n<e.length;n++)e.eq(n).height()<e.eq(t).height()&&(t=n);return e.eq(t)}$(".top .box p a").eq(0).click(function(){location.href="login.html"}),$(".top .box p a").eq(1).click(function(){location.href="register.html"}),e($(".top .box p a").eq(2)),$("#search .right input").focus(function(){this.value=""}),$("#search .right input").blur(function(){$("#search .right ul").remove()}),window.onkeyup=function(){var e=document.querySelector("input").value,t=document.createElement("script");t.src="https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1443,21118,29522,29520,29099,29568,28831,29221&wd=".concat(e,"&req=2&csor=3&pwd=bb&cb=fn&_=1565862666223"),document.querySelector("head").appendChild(t)},$("#nav li a").each(function(){e($(this))}),$("#nav li").not(".first").each(function(){!function(e){e.mouseenter(function(){$(this).children("div").slideDown(300)}),e.mouseleave(function(){$(this).children("div").slideUp(300)})}($(this))}),$("#nav li").each(function(){$(this).children("div").each(function(){$(this).children("p").each(function(){e($(this))})})}),$.get("carousel.json",function(e){var t=e,n=0,i=0;for(var o in t)$("<img/>").attr("src",t[o]).css({position:"absolute",display:"none",width:"100%",height:"100%"}).appendTo(".carousel");$(".carousel img").eq(0).css({display:"block"}),$("<ul></ul>").css({width:"140px",height:"12px",position:"absolute",top:"500px",right:"46%","z-index":100}).appendTo(".carousel");for(var c=0;c<t.length;c++)$("<li></li>").css({width:"12px",height:"12px","border-radius":"50%",background:"#dddddd",float:"left","margin-right":"8px"}).appendTo(".carousel ul");r($(".carousel .left")),r($(".carousel .right")),$(".carousel .left").click(function(){0==n?n=t.length-1:n--,s(n)}),$(".carousel .right").click(function(){n==t.length-1?n=0:n++,s(n)}),$(".carousel ul li").each(function(){$(this).click(function(){s(n=$(".carousel ul li").index($(this)))})}),i=setInterval(function(){n==t.length-1?n=0:n++,s(n)},2e3),$(".carousel").mouseenter(function(){clearInterval(i)}),$(".carousel").mouseleave(function(){i=setInterval(function(){n==t.length-1?n=0:n++,s(n)},2e3)})}),setInterval(function(){var e=new Date(2019,8,3,12,0,0),t=parseInt((e.getTime()-(new Date).getTime())/1e3),n=parseInt(t/3600),i=parseInt((t-3600*n)/60),o=t-3600*n-60*i;$("#date span").eq(0).text(n),$("#date span").eq(1).text(i),$("#date span").eq(2).text(o)},1e3),$.get("pull.json",function(e){var t=e;console.log($("main ul").length);for(var n=0;n<t.length;n++)$("<img/>").attr("src",t[n]).appendTo(i($("main ul")))})});
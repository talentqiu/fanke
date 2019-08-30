//jsonp
function fn(date){
	$('#search .right ul').html('');
	$('<ul></ul>').css({
		"width" : $('#search .right input').width(),
		"position" : "absolute",
		"border" : "1px solid ",
		"left" : "0",
		"top" : "30px",
		"background" : "white",
		"z-index" : 100
	}).appendTo('#search .right div');
	let arr = date.g;
	for(let i = 0;i < arr.length;i ++){
		let txt = arr[i].q;
		$('<li></li>').text(txt).appendTo('#search .right ul');
	}
}
$(function(){
	//顶部
	$('.top .box p a').eq(0).click(function(){
		location.href = 'login.html';
	})
	
	$('.top .box p a').eq(1).click(function(){
		location.href = 'register.html';
	})
	changeColor($('.top .box p a').eq(2));
	
	//搜索栏
	$('#search .right input').focus(function(){
		this.value = '';
	})
	$('#search .right input').blur(function(){
		$('#search .right ul').remove();
	})
	//jsonp获取数据
	window.onkeyup = function(){
		let str = document.querySelector('input').value;
		let sc = document.createElement('script');
		sc.src = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1443,21118,29522,29520,29099,29568,28831,29221&wd=${str}&req=2&csor=3&pwd=bb&cb=fn&_=1565862666223`
		document.querySelector('head').appendChild(sc);
	}
	
	//导航栏
	$('#nav li a').each(function(){
		changeColor($(this));
	})
	$('#nav li').not('.first').each(function(){
		show($(this))
	})
	$('#nav li').each(function(){
		$(this).children('div').each(function(){
			$(this).children('p').each(function(){
				changeColor($(this))
			})
		})
	})

	//轮播图
	$.get('carousel.json',function(data){
		let arr = data;
		let indexA = 0;
		let timer = 0;
		//添加图片
		for(let i in arr){
			$('<img/>').attr('src',arr[i]).css({
				"position" : "absolute",
				"display" : "none",
				"width" : "100%",
				"height" : "100%"
			}).appendTo('.carousel')
		}
		$('.carousel img').eq(0).css({
			"display" : "block"
		})
		//添加ul
		$('<ul></ul>').css({
			"width" : "140px",
			"height" : "12px",
			"position" : "absolute",
			"top" : "500px",
			"right" : "46%",
			"z-index" : 100
		}).appendTo('.carousel');
		//添加li
		for(let i = 0;i < arr.length;i ++){
			$('<li></li>').css({
				"width" : "12px",
				"height" : "12px",
				"border-radius" : "50%",
				"background" : "#dddddd",
				"float" : "left",
				"margin-right" : "8px"
			}).appendTo('.carousel ul')
		}
		//添加事件
		//移入事件
		changeBg($('.carousel .left'));
		changeBg($('.carousel .right'));
		//左右
		//点击事件
		$('.carousel .left').click(function(){
			if(indexA == 0){
				indexA = arr.length - 1;
			}else{
				indexA --;
			}
			carousel(indexA)
		})
		$('.carousel .right').click(function(){
			if(indexA == arr.length - 1){
				indexA = 0
			}else{
				indexA ++;
			}
			carousel(indexA)
		})
		//小图标点击事件
		$('.carousel ul li').each(function(){
			$(this).click(function(){
				indexA = $('.carousel ul li').index($(this));
				carousel(indexA);
			})
		})
		//自动轮播
		timer = setInterval(function(){
			if(indexA == arr.length - 1){
				indexA = 0
			}else{
				indexA ++;
			}
			carousel(indexA)
		},2000)
		$('.carousel').mouseenter(function(){
			clearInterval(timer)
		})
		$('.carousel').mouseleave(function(){
			timer = setInterval(function(){
				if(indexA == arr.length - 1){
					indexA = 0
				}else{
					indexA ++;
				}
				carousel(indexA)
			},2000)
		})
	})
	//倒计时
	setInterval(function(){
		let targetDate = new Date(2019,8,3,12,0,0);
		let all = parseInt((targetDate.getTime() - new Date().getTime())/1000);
		let hours = parseInt(all/3600);
		let minites = parseInt((all - hours * 3600)/60);
		let seconds = all - hours*3600 - minites*60;
		$('#date span').eq(0).text(hours);
		$('#date span').eq(1).text(minites);
		$('#date span').eq(2).text(seconds);
	},1000)
	//瀑布流
	$.get('pull.json',function(data){
		let arr = data;
		console.log($('main ul').length)
		for(let i = 0;i < arr.length;i ++){
			$('<img/>').attr('src',arr[i]).appendTo(lowHeight($('main ul')))
		}
	})
	//工具库
	//移入字体颜色改变
	function changeColor(obj){
		obj.hover(function(){
			$(this).css('color','#b61d22')
		},
		function(){
			$(this).css('color','#808080')
		})
	}
	//二级下拉
	function show(obj){
		obj.mouseenter(function(){
		$(this).children('div').slideDown(300);	
	})
		obj.mouseleave(function(){
			$(this).children('div').slideUp(300)
		})
	}
	//移入改变背景图片
	function changeBg(obj){
		obj.hover(function(){
			$(this).css({
				"background-position-y" : "-60px"
			})
		},function(){
			$(this).css({
				"background-position-y" : "0"
			})
		})
	}
	//轮播
	function carousel(indexA){
		//图片轮播
		$('.carousel img').not($('.carousel img').eq(indexA)).each(function(){
			$(this).fadeOut(1500);
		})
		$('.carousel img').eq(indexA).fadeIn(1500);
		//小图标颜色
		$('.carousel ul li').not($('.carousel ul li').eq(indexA)).each(function(){
			$(this).css({
				"background" : "#dddddd"
			})
		})
		$('.carousel ul li').eq(indexA).css({
			"background" : "#a10000"
		})
	}
	//求最小高度的列
	function lowHeight(arr){
		let index = 0;
//		console.log(arr)
		for(let i = 0;i < arr.length;i ++){
			if(arr.eq(i).height() < arr.eq(index).height()){
				index = i;
			}
		}
		return arr.eq(index);
	}
})


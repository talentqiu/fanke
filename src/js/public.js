$('.header').load('header.html');
$('.footer').load('footer.html');
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



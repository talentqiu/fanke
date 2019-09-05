$(function(){
	$('.main-left ul li img').eq(0).clone().appendTo('.small-box')
	//小图移入事件
	$('.main-left ul li').each(function(){
		$(this).mouseenter(function(){
			$('.small-box').children('img').remove();
			$(this).children('img').clone().appendTo('.small-box');
			$('.main-left ul li').not($(this)).css({
				"border" : "1px solid #B4B4B4"
			})
			$(this).css({
				"border" : "1px solid #a10000"
			})
		})
	})
	//放大镜
	$('.mark').mouseenter(function(){
		$(this).prev().css({
			"display" : "block"
		})
		let width = $('.small-box').width();
		let height = $('.small-box').height();
		//创建大的大图以及放大图的盒子
		$('<div></div>').attr('id','show').css({
			"width" : $('.small-box span').width()*2 + 'px',
			"height" : $('.small-box span').height()*2 + 'px',
			'position' : "fixed",
			"border" : "1px solid",
			"left" : "750px",
			"top" : "20%",
			"z-index" : "1000",
			"overflow" : "hidden"
		}).appendTo('body').append($(this).parent().children('img').clone().css({
			"width" : width*2 + 'px',
			"height" : height*2 + 'px',
			"position" : "absolute"
		}))
		//鼠标跟随
		$('.mark').mousemove(function(evt){
			let left = evt.offsetX - $('.small-box span').width()/2;
			let top = evt.offsetY - $('.small-box span').height()/2;
			
			//设置边界
			if(left <= 0){
				left = 0
			}
			if(left >= $('.small-box').width()-$('.small-box span').width()){
				left = $('.small-box').width()-$('.small-box span').width()
			}
			if(top <= 0){
				top = 0
			}
			if(top >= $('.small-box').height()-$('.small-box span').height()){
				top = $('.small-box').height()-$('.small-box span').height()
			}
			let mulX = parseFloat(left/width);
			let mulY = parseFloat(top/height);
			//滑块位置
			$(this).prev().css({
				"left" : left + 'px',
				"top" : top + 'px'
			})
			//大图位置
			$('#show').children('img').css({
				"left" : -mulX * width*2 + 'px',
				"top" : -mulY * height*2 + 'px'
			})
		})
	})
	//移出事件
	$('.mark').mouseleave(function(){
		$(this).prev().css({
			"display" : "none"
		})
		$('#show').remove();
	})
	
	
	//右边购物区
	//商品名
	let name = $('.name').text();
	let price = $('.price').text();
	let color = '白色';
	let size = 'L';
	let num = 1;
	//商品颜色
	$('.main-right .color span').eq(0).css({
		"border" : "2px solid #b43333"
	})
	$('.main-right .color').children('span').each(function(){
		$(this).click(function(){
			$('.main-right .color span').not($(this)).css({
				"border" : "2px dashed #c9cbca"
			})
			$(this).css({
				"border" : "2px solid #b43333"
			})
			color = $(this).text();
		})
	})
	//商品尺码
	$('.size span').eq(0).css({
		"border" : "2px solid #b43333"
	})
	$('.size span').each(function(){
		$(this).click(function(){
			$('.size span').not($(this)).css({
				"border" : "1px solid #c9cbca"
			})
			$(this).css({
				"border" : "2px solid #b43333"
			})
			size = $(this).text();
		})
	})
	//点击加入购物车
	$('.buy input').eq(1).click(function(){
		num = $('.num select').val();
//		key:goods 
//		value:{
//			"name":name,
//			"color":color,
//			"size":size,
//			"price":price,
//			"num":num
//		}
		let storage = window.localStorage;
		storage['goods'] = `{
			"name":"${name}",
			"color":"${color}",
			"size":"${size}",
			"price":"${price}",
			"num":"${num}"
		}`
		alert('商品成功加入购物车')
		location.href = "cart.html"
	})
	
})

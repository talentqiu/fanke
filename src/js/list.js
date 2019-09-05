$(function(){
	$.get('list-pull.json',function(data){
		let lowUl = $('main ul').eq(0);
		for(let i in data){
			lowUl = lowHeight($('main ul'));
			$('<li></li>').css({
				"width" : "230px",
				"height" : "300px",
				"margin-bottom" : "10px",
				"position" : "relative"
			}).appendTo(lowUl).append($('<img/>').attr("src",data[i]).css({
				"width" : "230px",
				"height" : "230px",
				"display" : "block",
				"border" : "1px solid #eee"
			})).append($('<p>衬衫&nbsp;易打理&nbsp;短袖&nbsp;领尖扣&nbsp;男款</p>').css({
				"margin" : "10px auto",
				"color" : "#727171",
				"text-align" : "center"
			})).append($('<span>售价&yen;398</span>').css({
				"color" : "#b81c22",
				"width" : "230px",
				"display" : "block",
				"text-align" : "center"
			}))	
		}
		//每个图片的移入事件
		$('main ul li img').each(function(){
			$(this).hover(function(){
				$(this).parent().clone().addClass('clone').css({
					"position" : "absolute",
					"left" : "240px",
					"top" : "-30px",
					"z-index" : "100",
					"background" : "#e6eaf3",
					"border" : "1px solid #eee",
					"width" : "300px",
					"height" : "400px",
				}).appendTo($(this).parent())
			},function(){
				console.log($('.clone'))
				$('.clone').remove();
			})
		})
		$('main ul:nth-child(3) li:nth-child(2)').click(function(){
			location.href = 'detail.html'
		})
	})
	//获取最小高度的ul
	function lowHeight(obj){
		let low = obj.eq(0);
		obj.each(function(){
			if(low.height() > $(this).height()){
				low = $(this)
			}
		})
		return low;
	}
})

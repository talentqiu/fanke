let cookieStr = $.cookie('users');
let cookieObj = convert(cookieStr);
console.log(cookieObj)
let name;
let pwd;
//事件
$("input[type='text']").each(function(){
	$(this).focus(function(){
		$(this).val('')
	})
})
$("input[type='text']").eq(0).blur(function(){
	name = $(this).val();
})
$("input[type='text']").eq(1).blur(function(){
	pwd = $(this).val();
})

$('input').eq(2).click(function(){
	if(name in cookieObj){
		if(cookieObj[name] === pwd){
			location.href = 'index.html'
		}else{
			$('.prompt').text('用户名和密码不匹配！')
		}
	}else{
		$('.prompt').text('用户名不存在！')
	}
})
//工具库
//转字符串
function convert(str){
	if(str){
		return JSON.parse(str)
	}
	return {};
}

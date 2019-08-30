let count = 0;
let pwd = 0;
let str = $.cookie('users') ? $.cookie('users') : '';
let obj = convertStr(str);
console.log(obj)
//key: users  value:{"count":count,"pwd":pwd}
$('.right #registor').each(function(){
	$(this).focus(function(){
		$(this).val('');
	})
	$('<p></p>').css({
		"position" : "absolute",
		"top" : "35px",
		"font-size" : "14px"
	}).appendTo($(this).parent())
})
//手机号验证
$('.right #registor').eq(1).focus(function(){
	$(this).next().next().text('请输入真实的手机号，并进行验证')
	$(this).next().next().css({
		"color" : "#999"
	})
})
$('.right #registor').eq(1).blur(function(){
	let str = $(this).val();
	if(/^1[3456789]\d{9}$/.test(str)){
		count = str;
		$(this).next().next().text('')
	}else{
		$(this).next().next().css({
			"color" : "#a10000"
		})
		$(this).next().next().text('请输入有效的手机号')
	}
})
//手机验证码  
$('.right #registor').eq(2).focus(function(){
	$(this).next().text('请输入4位数字或者字母')
	$(this).next().css({
		"color" : "#999"
	})
})
$('.right #registor').eq(2).blur(function(){
	let str = $(this).val()
	
	if(/^\w{4}$/i.test(str)){
		$(this).next().text('')
	}else{
		$(this).next().css({
			"color" : "#a10000"
		})
		$(this).next().text('输入的验证码错误，请重试')
	}
})
//密码
$('.right #registor').eq(3).focus(function(){
	$(this).next().text('6-16位字符，可使用字母和数字组合')
	$(this).next().css({
		"color" : "#999"
	})
})
$('.right #registor').eq(3).blur(function(){
	let str = $(this).val()
	if(/^\w{6,16}$/i.test(str)){
		$(this).next().text('')
	}else{
		$(this).next().css({
			"color" : "#a10000"
		})
		$(this).next().text('不合要求，请重新输入')
	}
})
//验证密码
$('.right #registor').eq(4).focus(function(){
	$(this).next().text('请再次输入密码，两次输入必须一致')
	$(this).next().css({
		"color" : "#999"
	})
})
$('.right #registor').eq(4).blur(function(){
	let str = $(this).val()
	if(str == $('.right #registor').eq(3).val()){
		pwd = str;
		$(this).next().text('')
	}else{
		$(this).next().css({
			"color" : "#a10000"
		})
		$(this).next().text('两次输入的密码不一致，请重新输入')
	}
})
$(".right input[type='checkbox']").click(function(){
	if($(".right input[type='checkbox']").is(':checked')){
		$('input').last().css({
			"background" : "#b52024"
		})
		$('input').last().click(function(){
			obj[count] = pwd;
			let str = convertObj(obj);
			$.cookie('users',str,{
				"expires" : 7,
				"path" : "/"
			})
		})
	}else{
		$('input').last().css({
			"background" : "#9A9A9A"
		})
	}
})
//对象转字符串
function convertObj(obj){
	if(obj){
		return JSON.stringify(obj)
	}
	return '';
}
//字符串转对象
function convertStr(str){
	if(str){
		return JSON.parse(str);
	}
	return {}
}


//获取localStorage
$(function(){
	let storage = window.localStorage;
	let storageStr = storage['goods'] ? storage['goods'] : '';
	let storageObj = convertStr(storageStr);
	let sum = storageObj.num * parseInt(storageObj.price.match(/\d+/));
	
	$('<tr></tr>').html(`<td><input type="checkbox"/></td>
		<td>${storageObj.name}</td>
		<td>${storageObj.size}</td>
		<td>${storageObj.price}</td>
		<td><input type="button" value="-" id="down"/><input type="text" value="${storageObj.num}" style="width:20px;text-align:center"/><input type="button" value="+" id="up"/></td>
		<td>-</td>
		<td>&yen;<span>${sum}</span>.00</td>
		<td id="remove">删除</td>`).appendTo('table');
	//-事件
	$('#down').click(function(){
		let a = parseInt($(this).next().val());
		if( a == 1){
			$(this).next().val(1)
		}else{
			a--;
			$(this).next().val(a)
		}
		let b = a * parseInt(storageObj.price.match(/\d+/));
		$(this).parent().next().next().children('span').text(b);
		storageObj['num'] = a;
		storage.goods = JSON.stringify(storageObj);
	})
	//+事件
	$('#up').click(function(){
		let a = parseInt($(this).prev().val());
		a ++;
		$(this).prev().val(a);
		let b = a * parseInt(storageObj.price.match(/\d+/));
		$(this).parent().next().next().children('span').text(b);
		storageObj['num'] = a;
		storage.goods = JSON.stringify(storageObj);
	})
	//删除事件
	$('#remove').click(function(){
		$(this).parent().remove();
		storage.goods = '';
	})
	//工具箱
	function convertStr(str){
		if(str){
			return JSON.parse(str)
		}
		return {};
	}
})

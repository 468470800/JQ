$(function(){
	// 1.数量+ 	1-》1
	$("#table button:contains('+')").click(function(){
		// alert(11);
		var num = $(this).next().val()-0;
		//最大库存101个
		if(num >=101){
			alert("最大库存101个");
			return false;
		}

		$(this).next().val(num+1);

		//小计
		var oTr = $(this).parents('tr');
		xiaoJi(oTr);
	})

	// 2.数量- 	1-》1
	$("#table button:contains('-')").click(function(){
		// alert(11);
		var num = $(this).prev().val()-0;
		//至少购买1个
		if(num <= 1){
			alert("至少购买1个");
			return false;
		}

		$(this).prev().val(num-1);
		//小计
		var oTr = $(this).parents('tr');
		xiaoJi(oTr);
	})

	// 3.单删 		1-》1
	$("#table tbody td:contains('删除')").click(function(){
		$(this).parent('tr').remove();
	})

	// 4.清空购物车 	1-》多
	$("#table tfoot button:eq(1)").click(function(){
		$('#table>tbody').empty();
	})

	// 5.删除所选  1-》多
	$("#table tfoot button:eq(0)").click(function(){
		// alert(1);
		$("#table tbody :checked").parents('tr').remove();
	})
	// 6.全选 		2-》多
	$("#table thead :checkbox,#table tfoot :checkbox").click(function(){
		// alert(1);
		//1.获取thead中全选框checked的属性值
		var bool = $(this).prop('checked');

		//2.将1中结果赋给tbody中所有复选框的checked
		$("#table :checkbox").prop("checked",bool);
	})
	// 7.反选 		1-》2
	//当tbody中所有的复选框数量=tbody中被选中的所有复选框数量 ，此时就为全选
	$("#table tbody :checkbox").click(function(){
		var checkboxNum = $("#table tbody :checkbox").length;
		var checkedNum = $("#table tbody :checked").length;

		if(checkboxNum == checkedNum){
			$("#table thead :checkbox,#table tfoot :checkbox").prop("checked",true);
		}else{
			$("#table thead :checkbox,#table tfoot :checkbox").prop("checked",false);
		}
	})

	// 8.小计    2==》1
	// 由于三个事件影响小计，所有需要多次被调用，于是封装小计函数
	//作用：小计并修改对应的小计内容
	//参数：一个参数，tbody中tr
	//返回值：无
	function xiaoJi(oTr){
		// console.log(oTr);
		var num = oTr.find('[type=text]').val()-0;
		var price = oTr.find('td').eq(2).html()-0;
// console.log(num,price);
		var xj = num*price;
		oTr.find('td').eq(4).html(xj);
	}
	var oTr = $('#table>tbody>tr').eq(0);
	// console.log(oTr);
	xiaoJi(oTr);

	// 9.总计   多--》1


})
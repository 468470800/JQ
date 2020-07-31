//倒计时功能
setInterval(function(){
	var lll_time = new Date("2019-10-17 21:00:00");
	var lll_time_me = lll_time.getTime();
	
	//2.当前时间
	var lll_time_a = new Date();
	//将时间对象转化为数字
	var lll_time_b = lll_time_a.getTime();
	//3.未来时间-当前时间==需要倒计时时间
	var lll_ = lll_time_me - lll_time_b;
	
	//4.讲差值转化为时分秒
	
	var lll_seconde = parseInt(lll_/1000%60)<10?"0"+parseInt(lll_/1000%60):parseInt(lll_/1000%60);
	var lll_minutes = parseInt(lll_/1000/60%60)<10?"0"+parseInt(lll_/1000/60%60):parseInt(lll_/1000/60%60);
	var lll_houses = parseInt(lll_/1000/60/60%24)<10?"0"+parseInt(lll_/1000/60/60%24):parseInt(lll_/1000/60/60%24);

	//5.将时分秒添加到span中
	
	$("#lll_left>span:eq(0)").html(lll_houses);
	$("#lll_left>span:eq(1)").html(lll_minutes);
	$("#lll_left>span:eq(2)").html(lll_seconde);
},1000);
//轮播图
//右按钮
var index = 0;
$("#lll_lunbo>div>span:eq(1)").click(function(){
	index++;
	if(index>= 3){
		index = 0;
		//让上一张出现 left值为0px
		$("#lll_lunboul>li").eq(index).animate({left:"0px"},1000);
		//上一张为li left为-800px
		$("#lll_lunbo>ul>li").eq(2).animate({left:"-800px"},1000,function(){
		})
		return false;
	}
	//下一张li，left为0px
	$("#lll_lunbo>ul>li").eq(index).animate({left:"0px"},1000);
	//上一张li，left为-800px
	$("#lll_lunbo>ul>li").eq(index-1).animate({left:"-800px"},1000,function(){
		$(this).css("left","800px");
	})
})
//左按钮
$("#lll_lunbo>div>span:eq(0)").click(function(){
	index--;
	//当前里为第一组图片，上一组图片就是第三组图片
	if(index <= -1){
		index = 2;
		$("#lll_lunbo>ul>li").eq(index).css("left","800px").animate({left:"0px"},1000);
		$("#lll_lunbo>ul>li").eq(index+1).animate({left:"800px"},1000);
		return false;
		
	}
	$("#lll_lunbo>ul>li").eq(index).css("left","-800px").animate({left:"0px"},1000);
	$("#lll_lunbo>ul>li").eq(index+1).animate({left:"800px"},1000);
	
})
//右后边轮播
$.fn.ret=function(){
	this.mouseover(function(){
	$(this).addClass("lll_current").siblings().removeClass("lll_current");
	var index = $(this).index();
	$(".lll_right>ul>li").eq(index).show().siblings().hide();
	})
}
$(".lll_right>ol>li").ret();

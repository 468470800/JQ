//复制
// var copy = $(".lunbo>ul>li").clone();
// $(".lunbo>ul").append(copy);


//小圆点
var index = 0;//保存当前操作对象的下标
var bgArr = ["#eee","blue","green","yellow","pink"];
$(".banner .lunbo>ol>li").mouseover(function(){
	index = $(this).index();//获取下标
	$(this).addClass('current').siblings().removeClass('current');
	var l = -index*860;
	$(".banner .lunbo>ul").stop().animate({left:l+"px"},1000);
	$(".banner").css('background',bgArr[index]);
})

// //左
// $(".banner .left>div>span").eq(0).click(function(){
// 	// console.log(index);
// 	clearInterval(timer);
// 	index--;
// 	if(index <= -1){
// 		index = 4;
// 	}
// 	$(".banner .left>ol>li").eq(index).addClass('current').siblings().removeClass('current');
// 	$(".banner .left>ul>li").eq(index).fadeIn(1000).siblings().fadeOut(500);
// 	$(".banner").css('background',bgArr[index]);
// })
// //右
// $(".banner .left>div>span").eq(1).click(function(){
// 	// console.log(index);
// 	clearInterval(timer);
// 	move();
// })

// //自动轮播
// // setInterval(function(){
// // 	move();
// // },2000);
// //简写
// var timer = setInterval(move,2000);
// 	//移动
// 	function move(){
// 		index++;
// 		if(index >= 5){
// 			index = 0;
// 		}
// 		$(".banner .left>ol>li").eq(index).addClass('current').siblings().removeClass('current');
// 		$(".banner .left>ul>li").eq(index).fadeIn(1000).siblings().fadeOut(500);
// 		$(".banner").css('background',bgArr[index]);		
// 	}

// //鼠标移入，停止自动轮播，移出，继续
// $('.banner .left').hover(function(){
// 	clearInterval(timer);
// },function(){
// 	clearInterval(timer);
// 	timer = setInterval(move,2000);
// });
